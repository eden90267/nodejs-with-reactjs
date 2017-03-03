/**
 * Created by eden90267 on 2017/3/3.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'sql6.freemysqlhosting.net',
    user: 'sql6161705',
    password: 'DrsxQkTt7P',
    database: 'sql6161705'
});
connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});



// connection.query(
//     'CREATE TABLE Food (' +
//     'Food_id int,' +
//     'Food_name VARCHAR(100),' +
//     'Food_prize VARCHAR(100),' +
//     'Food_kind VARCHAR(100),' +
//     'PRIMARY KEY(Food_id))', (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Table Food Created');
//         }
//     });

// var a = (`CREATE TABLE articles (
//   id     INT PRIMARY KEY AUTO_INCREMENT,
//   author VARCHAR(100) NOT NULL,
//   title  VARCHAR(100) NOT NULL,
//   body   TEXT         NOT NULL
// )`);
//
// connection.query(a, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Table Food Created');
//     }
// });




// connection.query('ALTER table articles add column(code varchar(255))', (err, result) => {
//     if (err) throw err;
//
//     console.log(result.insertId);
// });




// var article = {
//     author: 'JOHN',
//     title: 'Hi',
//     body: 'HELLO'
// };
//
// var query = connection.query('insert into articles set ?', article, (err, result) => {
//     if (err) {
//         console.error(err);
//         result;
//     }
//     console.log(result.insertId);
// });


// connection.query('SELECT * FROM articles', (err, rows) => {
//     if (err) throw err;
//
//     console.log(rows);
// });


// connection.query('SELECT * FROM ??', 'articles', (err, rows) => {
//     if (err) throw err;
//
//     console.log(rows);
// });


// var query = connection.query('UPDATE articles SET title = ?', 'Hello M', (err, result) => {
//     if (err) {
//         console.error(err);
//         result;
//     }
//     console.log(result);
// });


// var query = connection.query('UPDATE articles SET title = ? WHERE id = ?', ['Hello', 1], (err, result) => {
//     if (err) {
//         console.error(err);
//         result;
//     }
//     console.log(result);
// });


// 有關?與??
// 指定name時用`??`
// 指定value用`?`

connection.end();