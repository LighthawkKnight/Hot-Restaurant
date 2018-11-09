const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    name: 'Voldemort',
    number: '9992225555',
    email: 'bboyd2008@gmail.com',
    id: '1',
  },
];
const waitlist = [
  {
    name: 'Dumbledore',
    number: '9992225555',
    email: 'bboyd2008@gmail.com',
    id: '2',
  },

];

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});
// view reservations
app.get('/tables', (req, res) => {
  res.sendFile(path.join(__dirname, 'view.html'));
});
// reserve
app.get('/reserve', (req, res) => {
  res.sendFile(path.join(__dirname, 'make.html'));
});
// waitlist
app.get('/api/waitlist', (req, res) => {
  res.json(waitlist);
});
app.get('/api/tables', (req, res) => {
  res.json(reservations);
});

app.get('/waitlist', (req, res) => {
  res.json(waitlist);
});

// POST request
app.post('/api/makeres', (req, res) => {
  console.log(req.body);
  if (reservations.length <= 5) {
    reservations.push(req.body);
  } else {
    waitlist.push(req.body);
  }
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
