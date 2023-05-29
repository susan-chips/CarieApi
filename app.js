const path = require('path')
const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('../routes/admin.js');
const shopRoutes = require('../routes/shop.js')


app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status().sendFile(path.join(__dirname, 'view', '404.html'));
});

app.listen(3000)


