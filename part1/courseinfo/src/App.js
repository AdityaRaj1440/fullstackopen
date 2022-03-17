import Header from "./Components/Header"
import Content from "./Components/Content"
import Total from "./Components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
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
  } 
  

  return (
    <div>
      <Header course= {course.name} />
      <Content parts= {course.part} />
      <Total parts= {course.part} />
    </div>
  )
}

export default App