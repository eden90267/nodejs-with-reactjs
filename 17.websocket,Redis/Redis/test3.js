/**
 * Created by eden90267 on 2017/3/5.
 */
var redis = require('redis');
var sub = redis.createClient(), pub = redis.createClient();

sub.on('message', (channel, message) => {
    console.log(message);
});

process.stdin.on('data', (data) => {
    pub.publish('channel001', data);
});

sub.subscribe("channel001");