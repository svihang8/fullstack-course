import React from 'react'

import Part from './Part'

export default function Content({parts}) {
  return (
    <>
    {
      parts.map((part) => {
        return <Part key = {part.name} part = {part.name} exercise = {part.exercises}/>
      })
    }
    {/*
    <Part part = {props.parts[0].name} exercise = {props.parts[0].exercises}/>
    <Part part = {props.parts[1].name} exercise = {props.parts[1].exercises}/>
    <Part part = {props.parts[2].name} exercise = {props.parts[2].exercises}/>
    */
    }
    </>
  )
}
