// Load Node modules
var express = require('express');
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
// Port website will run on
app.listen(8082);

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('index');
});

app.get('/aboutus', function (req, res) {
    res.render('about-us');
});

app.get('/celeb', function (req, res) {
    res.render('celeb');
});

app.get('/checkout', function (req, res) {
    res.render('checkout');
});

app.get('/event', function (req, res) {
    res.render('events');
});

app.get('/linkedpage', function (req, res) {
    res.render('linked page');
});

app.get('/ourwork', function (req, res) {
    res.render('our-work');
});

app.get('/shop', function (req, res) {
    res.render('shop');
});
