import React from 'react'

export default function Total({parts}) {
  return (
    <p>Number of exercises {
        parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)
      }</p>
  )
}
