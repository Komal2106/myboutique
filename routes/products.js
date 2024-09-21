const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Home Route
router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.render('index', { products });
});

// Collection Route
router.get('/collection', async (req, res) => {
    const products = await Product.find({});
    res.render('collection', { products });
});

// Add Product Route (for simplicity, we'll add via URL params here)
router.post('/add', async (req, res) => {
    const { name, description, price, imageUrl } = req.body;
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res.redirect('/');
});



// Render the Contact Page
router.get('/contact', (req, res) => {
    res.render('contact');
});

// Render the About Page
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;

module.exports = router;