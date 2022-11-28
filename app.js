const { response } = require('express');
const express = require('express');
const app = express();
const port = 3001;

   const persons = [
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]

app.use(express.json());

app.get('/api/persons', (req, res) => {
    //response.json(persons)
    res.json(persons)
})

app.get('/info', (req, res) => {
    const date = new Date(Date.now())
    console.log(date);
    const string = `<B>Phonebook has info for ${persons.length} people <br /> ${date.toString()}</B>`
    res.send(string)
})

app.get('/api/pesons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.filter((p) => {
    })
})
app.listen(port, () => {console.log('listen')})