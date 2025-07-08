import express from "express";
const app = express();

const PORT = 4002


app.use(express.json());


app.post('/orders', (req, res) => {
    const { productId, quantity } = req.body;
    res.json({
      message: 'Order created successfully',
      productId,
      quantity
    });
  });
  
  app.listen(PORT, () => console.log(` Order service running on port ${PORT}`));