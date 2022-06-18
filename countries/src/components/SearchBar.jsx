import React from 'react'

export default function SearchBar({filter, handleFilter}) {
  return (
    <>
    <div> find countries : <input value = {filter} onChange = {handleFilter}/> </div>
    </>
  )
}
