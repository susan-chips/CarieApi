const express = require('express');

const Router = express.Router();

router.use('/add-product', (req, res, next)=>{
    res.get('<html><form action="/product" method ="POST"><input type="text" name="title"> <button type="submit">Add Product</form></html>');
});
router.post('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

module.exports =router;