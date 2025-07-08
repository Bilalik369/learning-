import express from 'express';
const app = express();
const PORT = 4001;

const products = [
  { id: 1, name: 'Laptop', price: 8000 },
  { id: 2, name: 'Phone', price: 4000 }
];

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});
