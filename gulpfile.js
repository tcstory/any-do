/* global require, __dirname */
/* eslint-disable no-console */

var gulp = require('gulp');
var del = require('del');
var express = require('express');
var path = require('path');

var rootDir = path.join(__dirname, 'dist');

gulp.task('clean', function () {
  return del(['dist/**/*', '!dist'])
});


gulp.task('server', function () {
  runExpress(4000, rootDir);
});

function runExpress(port, rootDir) {
  var app = express();

  app.use(express.static(rootDir));

  var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server running at http://%s:%s', host, port);
  });
}
