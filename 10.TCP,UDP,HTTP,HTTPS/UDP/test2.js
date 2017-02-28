/**
 * Created by eden90267 on 2017/2/28.
 */

// 廣播方client
var udp = require('dgram');
var client = udp.createSocket('udp4', () => {});
client.on('listening', () => {
    client.setBroadcast(true);
});
process.stdin.on('data', (data) => {
    client.send(data, 0, data.length, 8080, '255.255.255.255');
});