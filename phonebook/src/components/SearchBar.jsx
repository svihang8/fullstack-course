import React from 'react'

export default function SearchBar({newFilter, handleFilter}) {
  return (
    <>
    <div> filter shown with : <input value = {newFilter} onChange = {handleFilter}/> </div>
    </>
  )
}
