/**
 * Created by eden90267 on 2017/2/28.
 */
// REPL(自訂命令列)
// 全名Read-Eval-Print-Loop
// 主要用來產生一個terminal終端機程式，
// 可接受使用者從終端機的輸入做對應的輸出，或是直接將想顯示的文字輸出至終端機

// $ node
// > .help
// > .editor
// > .save ./test2.js
// > .load ./test2.js
// > <tab> // 列出所有變數
// > fs.createReadStream('./test2.js');

const repl = require('repl');

// 1. 輸入對應的文字，產生自訂的文字
// var test = repl.start('請輸入：').context;
// test.hello = '哈囉，你好！';
// test.今天天氣 = '多雲時晴，偶陣雨！';


// 2. 監聽exit事件
// var replServer = repl.start();
// replServer.on('exit', () => {
//     console.log('離開terminal!');
//     process.exit(); // 離開執行緒
// });


// 3. 監聽reset事件，先在repl輸入hi = 'hello!' 之後輸入 .clear
// function initializeContext(context) {
//     context.hi = 'hi變更為hihi!';
// }
//
// const r = repl.start({prompt: '> '});
//
// r.on('reset', initializeContext);


// 4. 加上顏色
// console.log('\x1b[36m你好\x1b[0m');
// console.log('\x1b[35m你好\x1b[0m');
// console.log('\x1b[34m你好\x1b[0m');
// console.log('\x1b[33m你好\x1b[0m');
// console.log('\x1b[32m你好\x1b[0m');

// 上面這些是什麼意思？
// 關鍵字 ANSI escape code


// 為了適應不同平台的terminal控制顏色的方式，使用他人寫好的第三方模組
// ansi-styles
const style = require('ansi-styles');

console.log(style.bgColor.ansi.hsl(120, 80, 72) + 'Hello world!' + style.bgColor.close);
console.log(style.color.ansi256.rgb(199, 20, 250) + 'Hello world!' + style.color.close);
console.log(style.color.ansi16m.hex('#ABCDEF') + 'Hello world!' + style.color.close);