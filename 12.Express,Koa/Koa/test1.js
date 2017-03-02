// Koa框架
// Koa有分 v1 與 v2
// Koa1: 主要使用Generator
// Koa2: 主要使用async/await

// https://github.com/guo-yu/koa-guide


// 1. 建立一個簡單server

// const Koa = require('koa');

// const app = new Koa();

// app.use(ctx => {
// 	ctx.body = 'Hello, this is Koa';
// });

// app.listen(3000);


// 2. 加入router
// var Koa = require('koa');
// var Router = require('koa-router');

// var app = new Koa();
// var router = new Router();

// router.get('/', function *(next) {
// 	this.body = 'hihi';
// });

// router.get('/main', function *(next) {
// 	this.body = 'I am main!';
// });

// app.use(router.routes());

// app.listen(3000);


// 3. 使用static傳送html

// koa-static
// var Koa = require('koa');
// var Router = require('koa-router');
// var serve = require('koa-static');
// const app = new Koa();

// app.use(serve(__dirname + '/static/'));

// app.listen(3000);


// 4. 使用Router加上static

// var Koa = require('koa');
// var Router = require('koa-router');
// var serve = require('koa-static');
// const app = new Koa();
// const router = Router();

// router.get('/test', function *(next) {
// 	this.body = 'test!!';
// });

// router.get('/main', function *(next) {
// 	this.body = 'main!!';
// });

// app.use(router.routes());
// app.use(serve(__dirname + '/static/'));

// app.listen(3000);


// 5. 使用 body-parser 解析 post 的data
// 使用test2發出post request
// 也可使用curl: curl -d "name=yicheng%20Sagula%26phone=123" http://localhost:3000/info

var Koa = require('koa');
var Router = require('koa-router');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = Router();

app.use(bodyParser()); // 要放在 app.use(router.routes()) 前
app.use(async ctx => {
	var data = ctx.request.body;
	console.log(data);
	ctx.body = {
		'result': true
	}
});
app.use(router.routes());
app.use(serve(__dirname + '/static/'));

app.listen(3000);