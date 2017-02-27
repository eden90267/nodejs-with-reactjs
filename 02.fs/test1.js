/**
 * Created by eden90267 on 2017/2/28.
 */
var fs = require('fs');

// console.log(fs);

// 1. 異步讀取檔案的內容
// fs.readFile('./test.jpg', function (err, buffer) {
//     if (err) throw err;
//     console.log(buffer);
// });
// console.log('before');

// 2. 同步讀取檔案內容
// var file2 = fs.readFileSync('./test.txt', 'utf-8');
// console.log(file2);
// console.log('after');

// buffer ?
// 電腦裡有很多檔案其實不是文字檔案來的。實際上，大部分我們開啟的檔案都是二進制檔案，例如圖片檔案，音訊檔案，簡報等，所有檔案裡的資料其實都是以二進制表示的。
// 所以我們就用Buffer物件去表示檔案的內容，和方便我們閱讀檔案資料的每個位元組。

// 讀取的內容為buffer，可以用toString轉換為文字
// fs.readFile('./test.sql', function (err, buffer) {
//     if (err) throw err;
//     console.log(buffer);
//     console.log(buffer.toString());
// });

// 3. 寫入文字到檔案
// fs.writeFile('./test.txt', 'Banana', (err) => {
//     if (err) throw err;
//     console.log('saved!');
// });

// 內容不覆蓋
// fs.appendFile('./test.txt', ' is me', (err) => {
//     if (err) throw err;
//     console.log('saved!');
// });

// 4. 查看檔案是否存在
// fs.exists('./test.txt', (exists) => {
//     if (exists) {
//         console.log('檔案存在');
//     } else {
//         console.log('檔案不存在');
//     }
// });

// 5. 創建資料夾
// fs.mkdir('./testDir', 0777, (err) => {
//     if (err) throw err;
// });

// 0777是該資料夾權限 Read(4) + Write(2) + Execute(1)

// 6. 讀取目錄內檔案

// fs.readdir('../', (err, files) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(files);
// });

// ./ 同層  ../ 上層

// 7. 監聽檔案的變更，修改後儲存即可看到console訊息
// fs.watchFile('./test.txt', (curr, prev) => {
//     console.log(`現在時間是：${curr.mtime}`);
//     console.log(`上次修改時間：${prev.mtime}`);
// });

// 8. 更改檔案名稱
// fs.rename('./test11.txt', './test123.txt', (err) => {
//     if (err) throw err;
//     console.log('file name changed!');
// });

// 9. 刪除檔案
// fs.unlink('./test123.txt', (err) => {
//     if (err) throw err;
//     console.log('deleted');
// });

// 10. 刪除資料夾
// fs.rmdir('./dir', (err) => {
//     if (err) throw err;
//     console.log('deleted!');
// });

// 11. 複製檔案
// function copy(src, target) {
//     console.log(target);
//     fs.writeFileSync(target, fs.readFileSync(src));
// }
// copy('./test.txt', './test2.txt');

// 上面這種方式效能不好，且會造成內存泄露
// 可使用如下的stream方式

// function copy(src, target) {
//     fs.createReadStream(src).pipe(fs.createWriteStream(target));
// }
// copy('./test.txt', 'test2.txt');

// 想像pipe是一個水管，把水從A直接流到B
// createReadStream 為水從水管進入那一端
// createWriteStream 為流出水的那一端