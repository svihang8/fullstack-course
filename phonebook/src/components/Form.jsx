import React from 'react'

export default function Form({newName, handleName, newNumber, handleNumber, handleSubmit}) {
  return (
    <form>
    <div>
      name: <input value = {newName} onChange = {handleName}/>
    </div>
    <div>
      number: <input value = {newNumber} onChange = {handleNumber}/>
    </div>
    <div>
      <button type="submit" onClick={handleSubmit}>add</button>
    </div>
    </form>
  )
}
