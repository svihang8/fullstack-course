import { useEffect, useState } from 'react'
import Directory from './components/Directory'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then((res) => {
      console.log('phonebook', res.data);
      setPersons(res.data);
    });
  }, []);

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
    const newPerson = {
      name: newName,
      number: newNumber,  
    }

    for(const person in newPersons) {
      if(newPerson.name === person.name) {
        console.log('Person with same name already exists');
        return;
      }
    };

    axios.post('http://localhost:3001/persons', newPerson)
         .then((res) => {
          console.log(res.data);
          newPersons.push(res.data);
          setPersons(newPersons);
          setNewName('');
         });
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