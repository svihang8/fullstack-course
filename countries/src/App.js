import { useState } from 'react'
import Countries from './components/Countries'
import SearchBar from './components/SearchBar'

const App = () => {
  //const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div>
      <SearchBar filter = {filter} handleFilter = {handleFilter}/>

      <Countries filter = {filter}/>
    
    </div>
  )
}

export default App