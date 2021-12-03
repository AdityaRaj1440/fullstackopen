import React from 'react'

const Header= (props)=>
(
 <div><h1>{props.course}</h1></div>
)

const Total=(props)=>
{
  const total= props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises
return(<div>total= {total}</div>)
}
const Part=(parts)=>
(
  <div>
    <p>{parts.part} {parts.exercise}</p>
  </div>
)
const Content= (props)=>
(
  <div>
    <Part part= {props.parts[0].name} exercise= {props.parts[0].exercises}/> 
    <Part part= {props.parts[1].name} exercise= {props.parts[1].exercises}/>
    <Part part= {props.parts[2].name} exercise= {props.parts[2].exercises}/>
  </div>
)

const App = () => {
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course= {course}/>
      <Content parts= {parts}/>
      <Total parts= {parts}/>
    </div>
  )
}

export default App