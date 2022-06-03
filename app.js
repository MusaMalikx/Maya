var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require('cors')
var logger = require('morgan');
const session = require('express-session');
const dotenv = require("dotenv");
const passport = require('passport');

const bodyParser = require('body-parser')
const MongodbSession = require('connect-mongodb-session')(session);
const MONGO = "mongodb://localhost:27017/MAYADB"

dotenv.config();

//Passport config
const passportSetup = require("./passport");

//Routes
const userRoute = require('./routes/userRoutes')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/Product')
const productReviewRoute = require('./routes/ProductReview')
const CartRoute = require('./routes/cart')
const OrderRoute = require('./routes/order')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const store = new MongodbSession({
  uri: MONGO,
  collection: "sessions"
})

app.use(session({
  secret: process.env.JWT_SEC,
  resave: false,
  saveUninitialized: false,
  store: store
}))

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '500kb' }))
app.use(passport.initialize());

//middlewares
app.use('/auth', authRoute)
app.use('/user', userRoute)
app.use('/products', productRoute)
app.use('/reviews', productReviewRoute)
app.use('/cart', CartRoute)
app.use('/order', OrderRoute)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
