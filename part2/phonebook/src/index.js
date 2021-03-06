import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios
.get("http://localhost:3001/persons")
.then(response => {
  const note= response.data
  ReactDOM.render(
    <App note= {note}/>, 
    document.getElementById('root')
    )
})

