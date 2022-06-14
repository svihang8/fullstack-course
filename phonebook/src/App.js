import { useState } from 'react'
import Directory from './components/Directory'
import Form from './components/Form'
import SearchBar from './components/SearchBar'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('');


  const handleName = (e) => {
    setNewName(e.target.value);
  }

  const handleNumber = (e) => {
    setNewNumber(e.target.value);
  }

  const handleFilter = (e) => {
    setNewFilter(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newPersons = [...persons];
    let name = newName;
    let number = newNumber;
    let dup = false;

    for(let person of newPersons) {
      if(name === person.name) {
        dup = true;
        break;
      }
    }

    if(dup) {
      alert(`${name} already exists.`);
    } else {
      newPersons.push({name : name, number : number,});
    }

    setPersons(newPersons);
    setNewName('');
  }

  return (
    <div>
      
      <h2>Phonebook</h2>
      <SearchBar newFilter = {newFilter} handleFilter = {handleFilter}/>

      <h2>add a new</h2>
      <Form newName = {newName} handleName = {handleName}
            newNumber = {newNumber} handleNumber = {handleNumber}
            handleSubmit = {handleSubmit}/>

      <h2>Numbers</h2>
      <Directory persons = {persons} newFilter = {newFilter}/>
    
    </div>
  )
}

export default App