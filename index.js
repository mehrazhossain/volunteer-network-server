const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

const app = express();

// middleware
app.use(express());
app.use(cors());

// api
app.get('/', (req, res) => {
  res.send('Wow! server response successfully!!!');
});

app.listen(port, () => {
  console.log('Server running on port', port);
});
