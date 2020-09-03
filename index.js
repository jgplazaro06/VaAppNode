var mysql = require('mysql')
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

var sqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'va_app'
})

// sqlConnection.connect((error) => {
//     if (!error)
//         console.log('Connected')
//     else
//         console.log('Connection Failed')
// })

app.listen(process.env.PORT || 8080)

app.get('/nse', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_nse`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/nse', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_nse`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/corporate', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_corporatestaff`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/ambassadors', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_ambassadors`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/candidate', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_candidate`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/gbd', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_gbd`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/travel', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_travelrequest`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/vote', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_vote`", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    }
    )
})

app.get('/ambassadorsLogin', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_ambassadors` where Email='" + req.query.username + "' AND Password='" + req.query.password + "'", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    })
})

app.get('/adminLogin', function (req, res) {
    sqlConnection.query("SELECT * FROM `t_corporatestaff` where Email='" + req.query.username + "' AND Password='" + req.query.password + "'", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    })
})

app.get('/getVotes', function (req, res) {
    // SELECT * FROM `t_vote` WHERE CreatedOn between '2019-09-11 00:00:00' and '2019-09-15 00:00:00'
    sqlConnection.query("SELECT * FROM `t_vote` where CreatedOn between'" + req.query.dateFrom + "' AND '" + req.query.dateEnd + "'", function (error, rows, fields) {
        if (error) {
            res.json('Error ' + error)
        }
        else {
            res.json(rows)
        }
    })
})