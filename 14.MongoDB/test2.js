/**
 * Created by eden90267 on 2017/3/4.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://<dbuser>:<dbpassword>@<dbhost>:13680/<db>', (err) => {
    if (err) {
        throw err;
    }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("connect mongo");
});

// var Cat = mongoose.model('Cat', {
//     name: String,
//     friends: [String],
//     age: Number,
// });
//
// var kitty = new Cat({name: 'Zildjian', friends: ['tom', 'jerry']});
// kitty.age = 3;
//
// kitty.save(err => {
//     if (err) {
//         // ...
//     }
//     console.log('meow');
// });


// 使用Promise
// var User = mongoose.model('ac', new mongoose.Schema({
//     name: {type: String, unique: true},
//     password: String
// }));
// var list = new User({name: "s", password: "123456"});
// list.save()
//     .then(a => console.log(a))
//     .catch(err => console.log(err));


// 查詢資料
// var Cat = mongoose.model('Cat', {
//     name: String,
//     friends: [String],
//     age: Number,
// });
// var Cat = mongoose.model('Cat', {}); // Schema留空，一樣可查找
// Cat.find({}, (err, doc) => {
//     console.log(doc);
// });


// 先定義Schema，可以幫Schema指定方法
// var kittySchema = mongoose.Schema({
//     name: String
// });
// kittySchema.methods.speak = () => {
//     var greeting = this.name
//         ? "Meow name is " + this.name
//         : "I don't have a name";
//     console.log(greeting);
// };
//
// var Kitten = mongoose.model('cats', kittySchema);
//
// var fluffy = new Kitten({name: 'fluffy'});
// fluffy.speak();
