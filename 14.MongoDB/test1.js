/**
 * Created by eden90267 on 2017/3/4.
 */
var express = require('express');

////
var mongo = require('mongodb');
var Server = mongo.Server;
var Db = mongo.Db;

var server = new Server('<dbhost>', 13680, {auto_reconnect: true});
var db = new Db('xxxxx', server);


db.open((err, client) => {
    client.authenticate('<dbuser>', '<dbpassword>', (err, success) => {
        if (success) {
            console.log('connect success');


            // var cursor = db.collection('apple').find({"borough": "Bronx"});
            // cursor.each((err, doc) => {
            //     console.log(doc);
            // });


            // var cursor = db.collection('apple').remove({});


            // db.collection('apple').insert({
            //     title: 'web課程',
            //     description: 'test ',
            //     by: 'eason',
            //     url: 'hi',
            //     tags: ['hello'],
            //     likes: 50
            // });
            // db.collection('apple').insert({
            //     title: 'web課程',
            //     description: 'test ',
            //     by: 'eason',
            //     url: ['hi'],
            //     tags: 'hello',
            //     likes: 100
            // });
            // db.collection('apple').insert({
            //     title: 'web課程',
            //     description: 'test ',
            //     by: 'eason',
            //     url: true,
            //     tags: ['hello'],
            //     likes: 200
            // });


            // $gt代表大於
            // $lt代表小於
            // $gte大於等於
            // $lte小於等於
            // var cursor = db.collection('apple').find({likes: {$gt: 100}});
            // cursor.each((err, doc) => {
            //     console.log(doc);
            // });


            // type的值，數字對照表
            // Double    1
            // String    2
            // Object    3
            // Array    4
            // Binary data    5
            // Object id    7
            // Boolean    8
            // Date    9
            // Null    10
            // Regular Expression    11
            // JavaScript    13
            // Symbol    14
            // JavaScript (with scope)    15
            // 32-bit integer    16
            // Timestamp    17
            // 64-bit integer    18
            // var cursor = db.collection('apple').find({url: {$type: 8}});
            //
            // cursor.each((err, doc) => {
            //     console.log(doc);
            // });



            // limit()
            // var cursor = db.collection('apple').find().limit(1);
            // cursor.each((err, doc) => {
            //     console.log(doc);
            // });



            // skip()
            // var cursor = db.collection('apple').find().skip(2);
            // cursor.each((err, doc) => console.log(doc));




            // sort()
            // var cursor = db.collection('apple').find().sort({"likes": -1});
            // cursor.each((err, doc) => console.log(doc));



            // find()第一個參數：我們要從哪個地方去找東西
            // find()第二個參數：從那個地方要找哪些東西出來
            // 第二個參數中物件的值只有0和1，指定其他數和指定1的效果相同，0為不顯示
            var cursor = db.collection('apple').find({}, {likes: 1, _id: 0});
            var cursor = db.collection('apple').find({likes: {$gt: 100}}, {likes: 1, _id: 0});

            db.close();
        } else {
            console.log('client.authenticate error');
        }
    });
});

///
var app = express();


app.listen(8080);