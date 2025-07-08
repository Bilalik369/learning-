import express from "express"
import axios from 'axios'
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/products/:id', async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:4001/products/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Product service is not available' });
  }
});


app.post('/api/orders', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:4002/orders', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Order service is not available' });
  }
});

app.listen(PORT, () => console.log(` API Gateway running on port ${PORT}`));
