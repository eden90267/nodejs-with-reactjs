/**
 * Created by eden90267 on 2017/2/28.
 */

// TCP的特色在於傳輸資料，會有握手的過程，以確保雙方身份，所以花的時間多一點
// 一般瀏覽網頁時使用的協議是HTTP與HTTPS，其主要是基於TCP，為TCP往上之發展

// node.js主要使用 net 這個核心模組來提供TCP的相關功能，
// 一般主要是在做與硬體溝通時會使用到
// 具有TCP中的TCP server與TCP client的兩種類型

var net = require('net');

var HOST = 'localhost';
var PORT = 8000; // 監聽中的PORT，任何server在啟動時都會指定port讓client可以進入該port

net.createServer((sock) => {

    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);

    sock.on('data', (data) => {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        sock.write('hello, this is from server!');// 發訊息給client
    });

    sock.on('close', (data) => {
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    })

}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);