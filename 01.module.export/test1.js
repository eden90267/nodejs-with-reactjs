/**
 * Created by eden90267 on 2017/2/27.
 */
// module.exports 與 exports 用來輸出
exports.name = function () {
    console.log('I am banana');
};

exports.hi = function () {
    console.log('h1h1');
};

// 寫出 module.exports 會忽略掉上面寫的 exports.name 跟 exports.hi
module.exports = {
    type: 'string',
    text: 'hihi'
};