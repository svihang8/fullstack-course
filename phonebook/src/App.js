import { useEffect, useState } from 'react'
import Directory from './components/Directory'
import Form from './components/Form'
import SearchBar from './components/SearchBar'
import {getPersons, postPersons, deletePerson, updatePerson} from './service/persons';

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

    for(const personObj of newPersons) {
      if(newPerson.name === personObj.name) {
        console.log('person', personObj);
        console.log('Person with same name already exists');
        if(window.confirm(`${personObj.name} is already in the phonebook ? Do you want to update the phone number ?`)) {
          console.log('newPerson', newPerson);
          updatePerson(newPerson, personObj.id)
          .then(handleUpdate(personObj))
        }
        return;
      }
    }
    
    postPersons(newPerson)
    .then((res) => {
          console.log(res.data);
          newPersons.push(res.data);
          setPersons(newPersons);
          setNewName('');
          setNewNumber('');
         });

    function handleUpdate(personObj) {
      return (res) => {
        console.log('res', res.data);
        newPersons = newPersons.map((person) => {
          return person.id === personObj.id ? res.data : person;
        });
        setPersons(newPersons);
        setNewName('');
        setNewNumber('');
      };
    }
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