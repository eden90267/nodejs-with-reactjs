/**
 * Created by eden90267 on 2017/3/1.
 */
var http = require('http');
var qs = require('querystring');

http.createServer((req, res) => {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('This is origin!');
    } else if (req.url == '/main') {

        if (req.method === 'POST') {
            console.log('get a POST request!');
            var body = '';
            req.on('data', (data) => {
                console.log(data); // 為Buffer型態
                body += data;
            });
            req.on('end', () => {
                console.log(body); // 未parse過的字串
                var post = qs.parse(body);
                console.log(post); // parse過的字串
            });
        }

        if (req.method === 'GET') {
            // 可以回傳html類型檔案之類
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("This is Main!");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Oh! origin Main!");
    }
}).listen(8000, '127.0.0.1');