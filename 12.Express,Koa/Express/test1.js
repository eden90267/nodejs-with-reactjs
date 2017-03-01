/**
 * Created by eden90267 on 2017/3/2.
 */
// var express = require('express');
// var app = express();
// var port = 8000;
//
// app.locals = {
//     test: 'Extended Express Example'
// };
//
// app.set('view engine', 'ejs'); // 設定要用的模板引擎
// app = require('./routes')(app); // require指定資料夾，預設會去找下面的index檔案
// app.use(express.static(__dirname + '/public')); // 將預設路徑設在public
//
//
// app.listen(port, () => console.log(`listening on ${port}`));


// middleware

// 接收http請求，並對其進行加工，記得調用next，表示繼續往下加工

// var express = require('express');
// var app = express();
// var port = 8000;
//
// app.set('view engine', 'ejs');
// app.use((req, res, next) => {
//     console.log(`現在時間：${new Date()}`);
//     next();
// });
// app.use(express.static(__dirname + '/public'));
// app.locals = {
//     test: 'Extended Express Example'
// };
//
// app = require('./routes')(app);
//
// app.listen(port, () => console.log(`listening on ${port}`));


// 限定指定路徑使用
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method);
//     console.log(req.params.id);
//     next();
// });


// 整理路徑router

// 路徑前綴

// var express = require('express');
// var fruit = express.Router();
// var app = express();
// var port = 8000;
// app.use('/fruit', fruit);
//
// fruit.get('/banana', (req, res) => {
//     res.send('I am banana');
// });
//
// fruit.get('/apple', (req, res) => {
//     res.send('I am apple');
// });
//
// app.listen(port, () => console.log(`listening on ${port}`));


// ##第二個方法

// var express = require('express');
// var app = express();
// var port = 8000;
//
// app.route('/fruit')
//     .get((req, res) => {
//         res.send('Get a random fruit');
//     })
//     .post((req, res) => {
//         res.send('Add a fruit');
//     })
//     .put((req, res) => {
//         res.send('Update the fruit');
//     });
//
// app.listen(port, () => console.log(`listening on ${port}`));


// #外部middleware

// 較常見為

// bodyParser

// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// var port = 8000;
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.post('/login', (req, res) => {
//     console.log(req.body);
//     res.end();
// });
//
// app.post('/payload', (req, res) => {
//     console.log(req.body);
// });
//
// app.listen(port, () => console.log(`listening on ${port}`));


//之後再瀏覽器console貼上如下
// var headers= {
//     'Accept': 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
// }
//
// var request = {
//     method: 'POST',
//     headers: headers,
//     body: 'test=123'
// };
//
// fetch('/login', request);

//之後看console.log即可看到


// 使用cookieParser
// 可解析一個網站中所擁有的cookie

// var express = require('express');
// var app = express();
// var cookieParser = require('cookie-parser');
// var port = 8000;
// app.use(cookieParser());
//
// app.get('/getCookie', (req, res) => {
//     console.log(req.cookies);
//     res.end('cookie test');
// });
//
// app.get('/setCookie', (req, res) => {
//     res.cookie('cookieName', 12, {maxAge: 900000, httpOnly: true});
//     res.end('cookie test');
// });
//
// app.get('/deleteCookie', (req, res) => {
//     res.cookie('cookieName', true, {expires: new Date()});
//     res.end('cookie test');
// });
//
// app.listen(port, () => console.log(`listening on ${port}`));