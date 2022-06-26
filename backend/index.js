const express = require('express');
const app = express();
const PORT = 3001;

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
    res.send(notes);
})

app.get('/api/notes/:id', (req, res) => {
    console.log('req', req.params.id);
    let id = req.params.id;

    console.log('notes', notes);

    let note = notes.find(note => {
        console.log('note', note);
        return note.id === parseInt(id)
    });

    console.log('note', note);
    if(note) {
        res.send(note);
    } else {
        res.status(404).send({
            error : 'Note not found',
        })
    }
})

app.post('/api/notes/', (req, res) => {
    console.log('req', req.body);
    try {
    newNotes = [...notes];
    newNotes.push(req.body);
    notes = newNotes;
    res.send();
    } catch (err) {
        console.log('error', err);
        res.status(500).send();
    }
})

app.delete('/api/notes/:id', (req, res) => {
    try {
        let newNotes = [...notes];
        newNotes = newNotes.filter((note) => {return note.id !== parseInt(req.params.id)});
        notes = newNotes;
        res.send();
    } catch (error) {
        console.error(error);
        res.status(404).json({error : error});
    }
});

app.listen(PORT);
/*
const http = require('http')

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2022-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2022-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2022-05-30T19:20:14.298Z",
    important: true
  }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
*/