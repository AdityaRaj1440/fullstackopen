import {  useState } from 'react'
import Filter from './Components/Filter'
import AddPerson from './Components/AddPerson'


const App = ({note}) => {
  const [persons, setPersons] = useState(note) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState([])
  let res= persons

  const filterName= (event)=> {
    let elem= event.target.value
    console.log("checker:",elem!=="");
    if(elem!=="")
    {
      res= persons.filter((item)=> item.name.includes(elem)
      )
      if(res.length===0)
      res= [{name: "No results"}]
      console.log("res", res)
    }
    else 
      res= persons
      console.log(res);
    setFindName(res)
  }

  const showDetails= () => {
    let arr=findName
    console.log("finder",findName)
    if(findName.length===0)
      arr= persons
    return(
    
    arr.map((person, index) => {
      return (
        <p key= {index}>{person.name} {person.number}</p>
      )
    })
  )
  }

  const addPeople= (event) => {
    let elem= document.getElementById("name")
    let num= document.getElementById("number")
    elem.value= ""
    num.value=""
    event.preventDefault()
    let obj= {name: newName, number: newNumber}
    if (persons.some((item)=> item.name===obj.name))
    {
      alert(`${obj.name} is already added to the phonebook`)
    }
    else
    {
      setPersons(persons.concat(obj))
    }
  }

  // const filterName= (event) => {
  //   let name= event.target.value
    

  // }
  
console.log("test:",findName);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
         <Filter filterName= {filterName} />
         <AddPerson setNewName={setNewName} setNewNumber={setNewNumber}/>
        </div>
        <br/>
        <div>
          <button type="submit" onClick={addPeople}>add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      {showDetails()}
    </div>
  )
}

export default App