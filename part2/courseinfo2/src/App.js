import Total from "./Components/Total"
import Header from "./Components/Header"
import Content from "./Components/Content"  

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web Development Cirriculum</h1>
      <Header course={courses[0].name} />
      <Content parts={courses[0].parts} />
      <Total sum={courses[0].parts} />
      <br/>
      <Header course={courses[1].name} />
      <Content parts={courses[1].parts} />
      <Total sum={courses[1].parts} />
    </div>
  )
}

export default App