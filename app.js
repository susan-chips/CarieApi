
const express = require ('express');

const adminRoutes = require('./routes/admin.js');
const adminRoutes = require('./routes/shop.js')

const bodyParser = require('body-parser');

const app = express();

app.use(adminRoutes);

app.use(bodyParser.urlencoded({extended: false}));


app.use('/', (req, res, next)=>{
    res.send('<h1> Hello from Express!</h1>');
});
app.use('/', (req, res, next)=>{
    res.send('<h1> Hello from Express!</h1>');
});

app.listen(3000)


