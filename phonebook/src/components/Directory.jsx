import React from 'react'

export default function Directory({persons, newFilter}) {
  return (
    <>
    {persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
            .map((person) => {
                return (
                <p key = {person.name}>{person.name} {person.number}</p>
                )
                })
    }
    </>
  )
}
