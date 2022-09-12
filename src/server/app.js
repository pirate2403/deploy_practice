const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname + '/../../dist/login/login.html')
  );
})

app.get('/signin', (req, res) => {
  res.sendFile(
    path.join(__dirname + '/../../dist/signin/signin.html')
  );
})
app.get('/profile', (req, res) => {
  res.sendFile(
    path.join(__dirname + '/../../dist/profile/profile.html')
  );
})
app.get('/main', (req, res) => {
  res.sendFile(
    path.join(__dirname + '/../../dist/main/main.html')
  );
})

app.listen(8080);