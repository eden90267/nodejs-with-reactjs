/**
 * Created by eden90267 on 2017/2/28.
 */
// UDP的特色在於傳輸資料時，不需要驗證資料，不保證正確性，發送端不知道數據是否會正確接收，所以速度較快速

// 主要使用名為 dgram 的核心模組
// 全名為 UDP / Datagram Sockets


// 接收方(所有區網上其他電腦所架設的UDP server)
var udp = require('dgram');
var socket = udp.createSocket('udp4', (msg) => {
    console.log(msg.toString());
});
socket.bind(8080);