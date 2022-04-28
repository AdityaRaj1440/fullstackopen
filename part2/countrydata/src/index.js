import ReactDOM from 'react-dom'
import App from './App'
import axios from 'axios'

axios
.get("https://restcountries.com/v3.1/all")
.then(response => {
  const note= response.data
  // console.log(note);
  ReactDOM.render(
    <App note= {note}/>, 
    document.getElementById('root')
    )
})
