const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const farmers = require('./api/farmers');
const markets = require('./api/markets');
const accounts = require('./api/accounts');
const auth = require('./auth/index');
const middleware = require('./auth/middleware');
const cors = require('cors');

const app = express();

const knex = require('./db/knex');
require('dotenv').config();





app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api/v1/farmers', farmers);
app.use('/api/v1/markets', markets);
app.use('/api/v1/accounts', accounts);
app.use('/auth', auth);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message ,
		error: req.app.get('env') === 'development' ? err : {}
	});
});

module.exports = app;
