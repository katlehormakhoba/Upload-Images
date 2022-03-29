const express = require("express");
const morgan = require('morgan')


const app = express();

const userRoutes = require('./routers/userRoutes')


app.use(express.json());
app.use(express.static("./public"));

app.use(morgan('dev'));
app.use('/api/v1/users', userRoutes);

app.all('*', (req, res, next) => {

   
    res.status(404).json({
        status: 'fail',
        message: `cant find ${req.originalUrl} on this server`
    })
    next();
})


app.use((err, req, res, next) => {
  res.status(200).json({
    status: "fail",
    message: err.message,
  });
});

module.exports = app;
