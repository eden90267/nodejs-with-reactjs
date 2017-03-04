/**
 * Created by eden90267 on 2017/3/5.
 */
const redis = require('redis');
const Redisclient = redis.createClient();

exports.connect = () => {

    Redisclient.on('ready', (err) => {
        console.log('Ready');
    });

    Redisclient.on('error', (err) => {
        console.log('Error' + err);
    });

};

exports.RedisClient = Redisclient;