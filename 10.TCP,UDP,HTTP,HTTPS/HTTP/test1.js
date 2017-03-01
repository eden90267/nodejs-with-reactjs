/**
 * Created by eden90267 on 2017/3/1.
 */
var http = require('http');

// 1. 查看模組內擁有的功能
// console.log(http);


// 比較常用的方法
// createServer(callback)：創造一個server實例
// listen(port)：啟動服務器並指定PORT
// setHeader(key, value)：寫入http封包header訊息
// write(str)：發送http回應
// end()：發送並結束http回應


// 2. 建立一個簡單HTTP server
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.write('Welcome!');
//     res.end();
// }).listen(8000, '127.0.0.1');
//
// console.log('Server running on port 8000.');


// 3. 上面是回覆給client端字串，這次回覆一個完整的html頁面

// var fs = require('fs');
//
// http.createServer((req, res) => {
//     fs.createReadStream(__dirname + '/index.html').pipe(res);
// }).listen(8000, '127.0.0.1');
//
// console.log('Server running on port 8000.');


// 4. 也可讀取其他格式的檔案
// var fs = require('fs');
//
// http.createServer((req, res) => {
//     fs.createReadStream(__dirname + '/test.txt').pipe(res);
// }).listen(8000, '127.0.0.1');
//
// console.log('Server running on port 8000.');


// 5. 根據網址不同，回傳不同的字串
//    Http Router
// http.createServer((req, res) => {
//     if (req.url == '/') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('This is origin!');
//     } else if (req.url == '/main') {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.end('This is Main!');
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/plain'});
//         res.end('Oh! origin Main!');
//     }
// }).listen(8000, '127.0.0.1');


// 6. 一個Websocket server 的雛形
//    http升級成websocket：
// var srv = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('okay');
// });
// srv.on('upgrade', (req, socket, head) => {
//     socket.write(
//         'HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
//         'Upgrade: WebSocket\r\n' +
//         'Connection: Upgrade\r\n' +
//         '\r\n');
//     socket.pipe(socket);
// });
//
// srv.listen(1337, '127.0.0.1');


// 7. 使用http模組發出get請求，此即為一個網站爬蟲的雛形
// http.get({
//     host: 'www.chinatimes.com',
//     path: '/'
// }, (res) => {
//     var body = '';
//     res.on('data', (d) => {
//         body += d;
//     });
//     res.on('end', () => {
//         console.log(body);
//     })
// });


// 8. 使用 http.request 發出 POST 請求
// var queststring = require('querystring');
// var postData = queststring.stringify({
//     'msg': 'Hello World!'
// });
//
// var options = {
//     hostname: '127.0.0.1',
//     port: 8000,
//     path: '/main',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Content-Length': postData.length
//     }
// };
//
// var req = http.request(options, (res) => {
//     console.log('STATUS: ' + res.statusCode);
//     console.log('HEADERS: ' + JSON.stringify(res.headers));
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//         console.log('BODY: ' + chunk);
//     });
// });
//
// req.on('error', (e) => {
//     console.log('problem with request: ' + e.message);
// });
//
// req.write(postData);
// req.end();


// HTTPS
// var https = require('https');
// var fs = require('fs');
//
// var options = {
//     key: fs.readFileSync('./server-key.pem'),
//     ca: [fs.readFileSync('./cert.pem')],
//     cert: fs.readFileSync('./server-cert.pem')
// };
//
// https.createServer(options, (req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
// }).listen(3000, '127.0.0.1');