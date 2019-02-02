const Bundler = require('parcel-bundler');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const file = path.resolve(__dirname, './public/index.html');
const isProduction = process.env.NODE_ENV === 'production' ? true : false;
// Copied from https://zh.parceljs.org/api.html
const options = {};

const bundler = new Bundler(file, options);

if (!isProduction) {
  app.use(morgan('dev'));
}

app.use(bundler.middleware());
app.listen(8081);

bundler.on('buildStart', () => {
  console.log('\nStart building...\n');
});

bundler.on('buildEnd', () => {
  console.log('\nServer is starting at localhost: 8081');
});
