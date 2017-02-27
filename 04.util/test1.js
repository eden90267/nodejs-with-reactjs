/**
 * Created by eden90267 on 2017/2/28.
 */
// 主要用來輔助Node.js的核心API
// 已多數被deprecated，之後將會全移除掉
const util = require('util');

// 1. 執行NODE_DEBUG=test node test1
// const debuglog = util.debuglog('test');
// debuglog('this is test');


// 2. 告知使用者此function已經deprecate，不推薦再使用
// var test = util.deprecate(function () {
//
// }, 'test function: 這是一個deprecate的function');
//
// test();


// 3. util.format(類似於c語言的printf)
// %s - String
// %d - Number
// %j - JSON
// var test = util.format(1, 2, 3);
// console.log(test); // '1 2 3'
// var test1 = util.format('%s:%s', 'foo', 'bar', 'baz');
// console.log(test1); // 'foo:bar baz'


// 4. util.inherits
// 可用來達成繼承的功能
// (不被官方鼓勵使用，官方建議使用ES6的class與extends)

// var test = function () {
// };
// var emitter = require('events').EventEmitter;
// util.inherits(test, emitter);
// test.on('add', () => console.log('add'));
// test.emit('add');
// 執行後發生錯誤，原因是繼承後必須new出一個實例才可使用繼承後的東西

// var test = function () {
// };
// var emitter = require('events').EventEmitter;
// util.inherits(test, emitter);
// var test1 = new test();
// test1.on('add', () => console.log('add'));
// test1.emit('add');


// 6. util.inspect
// 用來查看深層的json或物件很實用
// var myObject = {
//    "a":"a",
//    "b":{
//       "c":"c",
//       "d":{
//          "e":"e",
//          "f":{
//             "g":"g",
//             "h":{
//                "i":"i"
//             }
//          }
//       }
//    }
// };
// console.log(myObject);
// 發現f: [Object]，無法顯示
// console.log(util.inspect(myObject, {depth: null}));
// depth: null 代表console出無限深層的結構，或可改為數字