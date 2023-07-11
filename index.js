import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET request with single parameter
app.get('/single/:name', (req, res) => {
  const { name } = req.params;
  res.send(`GET request with single parameter: ${name}`);
});

// GET request with multiple parameters
app.get('/multiple/:fname/:lname', (req, res) => {
  const { query } = req;
  const { fname, lname } = req.params;
  console.log(query);
  res.send(`GET request with multiple values: ${JSON.stringify(query)} fname: ${fname} lname: ${lname}`);
});

// POST request with single parameter
app.post('/single', (req, res) => {
  const { name } = req.body;
  res.send(`POST request with single parameter: ${name}`);
});

// POST request with multiple values
app.post('/multiple', (req, res) => {
  const { body } = req;
  console.log(body);
  res.send(`POST request with multiple values: ${JSON.stringify(body)}`);
});

// POST request with multiple values and single parameter
app.post('/multiple/:name', (req, res) => {
  const { body } = req;
  console.log(body);
  const { name } = req.params;
  res.send(`POST request with multiple values: ${JSON.stringify(body)} and name param: ${name}`);
});

// Start the server
app.listen(port, () => {
  console.log('Server listening on port ${port}');
});