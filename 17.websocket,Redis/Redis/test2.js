/**
 * Created by eden90267 on 2017/3/5.
 */
var Redis = require('./test1').connect;
var Redisclient = require('./test1').RedisClient;
Redis();

const payload = [{a: 12, b: 13}, {a: 12, b: 13}, {a: 12, b: 13}];

Redisclient.set('short', JSON.stringify(payload), () => {
});

Redisclient.get('short', (err, reply) => {
    console.log(JSON.parse(reply));
});