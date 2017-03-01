/**
 * Created by eden90267 on 2017/3/2.
 */
module.exports = app => {
    app.get('/', (req, res) => {
        res.render('test1', {title: 'Hello', message: 'Hello there!'});
    }); // 第二個參數物件為我們給到ejs上的變數
    return app;
};