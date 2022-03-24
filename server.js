const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

const port = process.env.PORT || 7777;

app.listen(port, () => {
  console.log(__dirname);
  console.log('Listening Port ' + port);
});
