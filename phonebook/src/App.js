import { useEffect, useState } from 'react'
import Directory from './components/Directory'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import {getPersons, postPersons, deletePerson} from './service/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    getPersons()
    .then((res) => {
      console.log('phonebook', res.data);
      setPersons(res.data);
    });
  }, [setPersons]);

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

    for(const person of newPersons) {
      if(newPerson.name === person.name) {
        console.log('person', person);
        console.log('Person with same name already exists');
        return;
      }
    }
    
    postPersons(newPerson)
    .then((res) => {
          console.log(res.data);
          newPersons.push(res.data);
          setPersons(newPersons);
          setNewName('');
         });
  }

  const handleDelete = (id) => {
    console.log('id', id);

    let newPersons = [...persons];
    let deletePersonObj;

    for(const person of newPersons) {
      if(person.id === id) {
        deletePersonObj = person;
      }
    }

    console.log('deletePerson', deletePersonObj);
    if(window.confirm(`Delete ${deletePersonObj.name} ?`)) {
      deletePerson(id)
      .then((res) => {
        console.log('res', res);
        newPersons = newPersons.filter((person) => {return person.id !== id});
        setPersons(newPersons);
      })
    }
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
      <Directory persons = {persons} newFilter = {newFilter} handleDelete = {handleDelete}/>
    
    </div>
  )
}

export default App