const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('json spaces', 2);
app.use(express.static('public'));

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true,
	limit: '5mb'
}));

module.exports = app;
