/**
 * Created by eden90267 on 2017/3/2.
 */
var express = require('express');
var app = express();
var port = 8000;

app.use(express.static(__dirname + '/public')); // 將預設路徑設在public

app.listen(port, () => console.log(`listening on ${port}`));