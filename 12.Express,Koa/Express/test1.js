/**
 * Created by eden90267 on 2017/3/2.
 */
// var express = require('express');
// var app = express();
// var port = 8000;

// app.locals = {
//     test: 'Extended Express Example'
// };

// app.set('view engine', 'ejs'); // 設定要用的模板引擎
// app = require('./routes')(app); // require指定資料夾，預設會去找下面的index檔案
// app.use(express.static(__dirname + '/public')); // 將預設路徑設在public


// app.listen(port, () => console.log(`listening on ${port}`));


// middleware

// 接收http請求，並對其進行加工，記得調用next，表示繼續往下加工

// var express = require('express');
// var app = express();
// var port = 8000;

// app.set('view engine', 'ejs');
// app.use((req, res, next) => {
//     console.log(`現在時間：${new Date()}`);
//     next();
// });
// app.use(express.static(__dirname + '/public'));
// app.locals = {
//     test: 'Extended Express Example'
// };

// app = require('./routes')(app);

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


// 上傳檔案到server
// 使用multer middleware

// var express = require('express');
// var multer = require('multer');
// var app = express();
// var port = 8000;

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
// 	res.render('test1');
// });

// var storage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, './uploads/');
// 	},
// 	filename: (req, file, cb) => {
// 		cb(null, file.originalname);
// 	}
// });

// // single('file')，這個file必須跟<input type="file" name="file">的name相同
// app.post('/upload', multer({storage: storage}).single('file'), (req, res) => {
// 	console.log(req.body);
// 	console.log(req.files);
// 	res.status(204).end()
// });

// app.listen(port, () => console.log(`listening on ${port}`));



// // express 的 set 方法
// var app = require('express')();

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// // 最常看見上面兩種寫法，但他其實只是為你的前面的參數的值指定為第二個參數

// app.set('Fruit', 'I am banana');
// console.log(app.settings.Fruit);
// console.log(app.get('Fruit'));


// 使用session

// session有兩種，一種是browser的session storage，關閉即消失。
//                一種是會把cookie拿來server驗證的session

// 以下為第二種

// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// app.use(session({
// 	saveUninitialized: false, // don't create session until something stored
// 	resave: false, // don't save session if unmodified
// 	secret: 'yicheng',
// 	key: 'auto_token', // cookie name
// 	cookie: {maxAge: 1000 * 60 * 60 * 24 * 1}, // 1 days
// 	store: new MongoStore({
// 		url:'mongodb://forclass1:test123@ds013898.mlab.com:13898/forclass'
// 	})
// }));

// 如果此選項設為true則重新整理網頁在你還沒設session會自動附加上去，所以建議為false
// saveUninitialized:false

// 新增，會附加cookie到browser上
// req.session.user = req.body.account; // 將會在cookie中存入token之後回到server取值

// 移除
// req.session.user = null; // 移除server端資料
// req.session.cookie.expires = new Date(Date.now()); // 移除browser端cookie


// 使用JWT Token

// let token = jwt.sign({
// 	exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
// 	data: {
// 		user: jwtpayload
// 	}
// }, jwtSecret);
// res.cookie('t', token, {maxAge: 1000 * 60 * 60 * 24 * 1, httpOnly: true});

// 上面是將token存在cookie的做法，也可使用別的方式傳回client

// 認證
app.post('/', (req,res) => {
	jwt.verify(req.cookies.t, jwtSecret, (err, decoded) => {
		if(decoded) {
			// TODO 認證成功後要做的事
		} else {
			console.log('no token');
		}
	}
}


// 也可寫為function然後用middleware方式

// const authToken = (req, res, next) => {
// 	const token = req.cookies.t;
// 	if (token) {
// 	  jwt.verify(req.cookies.t, jwtSecret, (err, decoded) => {
// 	    if(decoded){
// 	      next();
// 	    } else {
// 	      res.end('token not correct');
// 	    }
// 	  });
// 	} else {
// 	  res.end('no Token');
// 	}
// };


// app.get('/userArticles/:user', authToken, (req,res) => {
//   Post.find({posterAccount: req.params.user})
//       .then(data => {
//         res.end(JSON.stringify(data))
//       });
// });