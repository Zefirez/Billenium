

import express from 'express';
import bodyParser from 'body-parser';
import {readJSON} from './db';
const idName = "id";
const PORT = 5555;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/api/v1/todos', (req, res) => {
  res.send(readJSON());
  
});

app.get('/api/v1/todos/:id', (req, res) => {
  var tablica = readJSON();
  var obiekt = tablica.find(function(record){
    console.log(req);
    return record[idName] == req.params.id;
  })
  res.send(obiekt);
  
});


app.listen(PORT, () => console.log('Server is working on port 5555'))

