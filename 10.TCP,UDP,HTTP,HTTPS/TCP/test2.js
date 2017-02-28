/**
 * Created by eden90267 on 2017/2/28.
 */
var net = require('net');

var HOST = 'localhost';
var PORT = 8000;

var client = new net.Socket(); // 建立一個新的socket實例
client.connect(PORT, HOST, () => {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.write('hello,this is from client'); // 發送給server數據

    const repl = require('repl');
    var test = repl.start('請輸入：').context;
    test.hello = () => {
        client.write('client說了hello');
    };
});

client.on('data', (data) => {
    console.log('DATA: ' + data);
});

client.on('close', () => {
    console.log('Connection closed');
});