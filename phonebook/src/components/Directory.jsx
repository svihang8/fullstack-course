import React from 'react'

export default function Directory({persons, newFilter, handleDelete}) {
  return (
    <>
    {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map((person) => {
                return (
                <div key = {person.id}>
                  <p>{person.name} {person.number}</p>
                  <button onClick={() => {handleDelete(person.id)}}>delete</button>
                </div>
                )
                })
    }
    </>
  )
}
