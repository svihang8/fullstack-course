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