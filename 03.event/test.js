/**
 * Created by eden90267 on 2017/2/28.
 */
// EventEmitter(事件觸發)
// Node.js核心模組events嚇得一個區塊
// 想像成是一個發送與監聽機制，分別是 emit 與 on
// ex. 使用者點擊按鈕會 emit 一個事件名稱，
//     而和 on 綁定的相同事件則會接收到此事件

var EventEmitter = require('events');

// console.log(EventEmitter);

// 常用的為EventEmitter區塊
var emitter = new EventEmitter();


// 1. 註冊一事件
// emitter.on('sleep', () =>
//     console.log('going to sleep'));
// (() => emitter.emit('sleep'))();

// 使用繼承的方式讓其他對象也擁有EventEmitter
// 讓非events的對象註冊事件

// 2. prototype.__proto__ 在javascript中意思為每個物件的原生繼承屬性

// function Human() {};
//
// Human.prototype.__proto__ = EventEmitter.prototype;
//
// var man = new Human();
//
// man.on('sleeping', () => console.log('sleeping'));
// man.emit('sleeping');

// 3. 可以把 on 換成 addListener 效果相同

// 4. 把 on 換成 once 只會監聽一次事件
// function Human() {}
//
// Human.prototype.__proto__ = EventEmitter.prototype;
//
// var man = new Human();
//
// man.once('sleeping', () => console.log('sleeping'));
//
// man.emit('sleeping');
// man.emit('sleeping');


// 5. 使用removeListener移除事件，用來作記憶體回收

// emitter.on('message', console.log);
//
// setInterval(() => emitter.emit('message', 'HIHI'), 500);
//
// setTimeout(() => emitter.removeListener('message', console.log), 2000);


// 6. setMaxListeners()
// EventEmitter預設最多監聽10個on事件，需手動調整
// 可設為 Infinity 或 0 代表無限的Listener
// emitter.setMaxListeners(20);


// 7. 可使用removeAllListeners移除所有監聽事件
// emitter.removeAllListeners('sleeping');


// 8. 取得指定名稱的監聽事件中所有的callback
// function getAll() {
//     console.log(emitter.listeners('sleeping'));
// }
// emitter.on('sleeping', callback);
// emitter.on('sleeping', callback1);
//
// function callback() {
//
// }
// function callback1() {
//
// }
// getAll();