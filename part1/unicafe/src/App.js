import { useState } from "react"
import Statistics from "./Components/Statistics"
import Button from "./Components/Button"

const App = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad]= useState(0)
    const [neutral, setNeutral]= useState(0)
    return (
        <>
        <h1>give feedback</h1>
        <br/><br/>
        <Button cat="good" target= {good} effect= {setGood} />
        <Button cat="neutral" target= {neutral} effect= {setNeutral} />
        <Button cat="bad" target= {bad} effect= {setBad} />
        <br/><br/>
        <Statistics good= {good} neutral= {neutral} bad= {bad}/>
        </>
    )
}

export default App

