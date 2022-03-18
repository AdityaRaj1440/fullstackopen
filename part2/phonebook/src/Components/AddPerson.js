const AddPerson = ({setNewName, setNewNumber}) => {
    return (
      <>
      <h3>add new</h3>
            name: <input id="name" onInput={(event) => {
              return (setNewName(event.target.value))}}/>
              <br/><br/>
            number: <input id="number" onInput= {(event) => setNewNumber(event.target.value)}/>
      </>
    )
  }

export default AddPerson