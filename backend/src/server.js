const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://airbnc:airbnc@airbnc-7iugc.mongodb.net/airbnc?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  return res.json('Hellow');
});

app.listen(8082);
