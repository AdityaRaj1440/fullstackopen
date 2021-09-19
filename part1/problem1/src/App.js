import React from 'react';

const Header= (props) => {

  return (
    <h1> {props.course} </h1>
  );
};

const Part= (props) => {
  return (
    <p> {props.part} {props.excercise} </p>
  )
}

const Content= (props) => {

  return (
    <>
    <Part part={props.part[0].name} excercise={props.part[0].excercise} />
    <Part part={props.part[1].name} excercise={props.part[1].excercise} />
    <Part part={props.part[2].name} excercise={props.part[2].excercise} />
    </>
  );
};

const Total= (props) => {

  return (
    <p> No. of excercises= {props.part[0].excercise+props.part[1].excercise+props.part[2].excercise} </p>
  );
};

const App= () => {

  const course= {
    name: "HalfStack Application Development",
    parts: [
     {
      name: 'Fundamental of React',
      excercise: 10
     },
     {
      name: 'Using props to pass data',
      excercise: 7
     },
     {
      name: 'State of the componenet',
      excercise: 14
     }
   ]
  }

  return(
    <div>
     <Header course= {course.name} />
     <Content part={course.parts} />
     <Total part={course.parts} />
    </div>
  );
};

export default App;