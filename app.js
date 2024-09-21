const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();




// Connect to MongoDB
// mongoose.connect('mongodb+srv://dbUser:Gagandeep23@cluster0.ugzbage.mongodb.net/suits?retryWrites=true&w=majority&appName=Cluster0', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
const productRoutes = require('./routes/products');
app.use('/', productRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

mongoose.connect('mongodb+srv://dbUser:Gagandeep23@cluster0.ugzbage.mongodb.net/suits?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));