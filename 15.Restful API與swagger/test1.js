/**
 * Created by eden90267 on 2017/3/4.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

app.use('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.get('/allArticle', (req, res) => {
    res.json({
        result: 'ok',
        data: 'thisisall'
    });
});

app.get('/getArticle/:id', (req, res) => {
    console.log(req.params);
    res.json({
        result: 'ok',
        data: ['data1', 'data2']
    });
});

app.get('/getUser', (req, res) => {
    console.log(req.query);
    res.json({
        result: 'ok',
        data: ['data1', 'data2']
    });
});

app.post('/register', (req,res) => {
    console.log(req.body);
    res.json({
        result: 'ok',
        data: ['data1','data2']
    });
});

app.put('/user', (req, res) => {
    console.log(req.body);
    console.log('user info updated!')
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    console.log(req.body);
    console.log('user deleted!')
    res.send('Got a DELETE request at /user');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});