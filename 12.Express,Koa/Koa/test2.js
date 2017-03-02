var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'msg': 'Hello World!'
});

var options = {
	hostname: 'localhost',
	port: 3000,
	path: '/info',
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

var req = http.request(options, res => {
	console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', chunk => {
    	console.log('BODY: ' + chunk);
    });
});
req.on('error', e => {
	console.log('problem with request: ' + e.message);
});
req.write(postData);
req.end();