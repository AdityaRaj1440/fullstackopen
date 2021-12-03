import React from 'react'

const Header= (props)=>
(
 <div><h1>{props.course}</h1></div>
)

const Total= (t)=>
(
  <div>
    total= {t.t1}+{t.t2}+{t.t3}
  </div>
)

const Part=(parts)=>
(
  <div>
    <p>{parts.part} {parts.exercise}</p>
  </div>
)

const Content= (props)=>
(
  <div>
    <Part part= {props.part1} exercise= {props.exercises1} /> 
    <Part part= {props.part2} exercise= {props.exercises2}/>
    <Part part= {props.part3} exercise= {props.exercises3}/>
  </div>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course= {course}/>
      <Content part1={part1} exercises1= {exercises1} part2= {part2} exercises2= {exercises2} part3= {part3} exercises3= {exercises3}/>
      <Total t1= {exercises1} t2= {exercises2} t3= {exercises3}/>
    </div>
  )
}

export default App