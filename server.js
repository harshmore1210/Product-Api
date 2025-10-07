require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern_demo';
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
// Routes
app.post('/products', async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const prod = new Product({ name, price, description });
        await prod.save();
        res.status(201).json(prod);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.get('/products', async (req, res) => {
    const prods = await Product.find().sort({ createdAt: -1 });
    res.json(prods);
});
app.get('/products/:id', async (req, res) => {
    const prod = await Product.findById(req.params.id);
    if (!prod) return res.status(404).json({ error: 'Not found' });
    res.json(prod);
});
app.put('/products/:id', async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updated) return res.status(404).json({ error: 'Not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.delete('/products/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).end();
});
// app.listen(PORT, () => console.log('Server running on port', PORT));


app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');

  });