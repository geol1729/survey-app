const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    hi: 'there',
    hey: "let's make some more changes",
    more: 'yes'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
