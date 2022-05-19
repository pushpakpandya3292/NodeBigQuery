var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const {BigQuery} = require('@google-cloud/bigquery');

async function createDataset() {
  // Creates a client
  const bigquery = new BigQuery();

  // here is the nuxt-hazura is the projectID, github_source_data is the dataset and demo is the table name.
  const sqlQuery = `SELECT * FROM nuxt-hazura.github_source_data.demo LIMIT 10`;

const options = {
  query: sqlQuery,
  // Location must match that of the dataset(s) referenced in the query.
  location: 'US',
};

// Run the query
const [rows] = await bigquery.query(options);

console.log('rows',rows);

}
createDataset();


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
