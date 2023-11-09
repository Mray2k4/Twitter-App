const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/static/index.html'));
})

app.get('/api/character', function(req, res){
   // res.send(character);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
