import React from 'react'
import Module from './Module'
const Course = ({courses})=> {
    console.log(courses)
    const parts= courses.parts
    const reducer= (s,p)=> {
        if(s instanceof Object)
         return s.exercises+p.exercises
        return (
            s+p.exercises
            )
        }
    const total= parts.reduce(reducer)
    return (
    <div>
        <h1>{courses.name}</h1>
        <ul>
            {courses.parts.map(module => <Module key={module.id} name={module.name} exercises={module.exercises}/>)}
            <b>total of {total} exercises</b>
        </ul>
    </div>
)
}
export default Course