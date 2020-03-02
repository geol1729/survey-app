const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    hi: 'there',
    greeting: 'to you',
    what: 'We love Star Trek',
    alt: 'we do too'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
