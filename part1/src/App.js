import React, {useState} from 'react'
let total=0
let avg=0
let positivity=0
let votes= new Array(7).fill(0)

const Statistics = (props) => {
  if(total===0)
  return <>No Feedback Given</>
  return (
  <>
      <StatisticLine label='good' value={props.good} />
      <StatisticLine label='neutral' value={props.neutral} />
      <StatisticLine label='bad' value={props.bad} />
      <StatisticLine label='total' value={total} />
      <StatisticLine label= 'avg' value ={avg} />
      <StatisticLine label='positivity' value={positivity} />
  </>
  )
}


const Button = ({func, feed}) => <button onClick= {func}>{feed}</button>

const StatisticLine = ({label, value}) => <><p>{label}={value}</p></>

const App = () => {

  const anecdotes= ['If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients']

  const [good, setGood]= useState(0)
  const [neutral, setNeutral]= useState(0)
  const [bad, setBad]= useState(0)
  const [anec, setAnec]= useState()
  const [popAnec, setPop]= useState()
  const handleGoodFeed= () => {
    setGood(good+1)
    total+=1
    avg= (avg*(total-1)+1)/total
    positivity= ((good+1)/total)*100
  }
  const handleNeutralFeed= () => {
    setNeutral(neutral+1)
    total+=1
    avg= (avg*(total-1))/total
    positivity= (good/total)*100
  }
  const handleBadFeed= () => {
    setBad(bad+1)
    total+=1
    avg= (avg*(total-1)-1)/total
    positivity= (good/total)*100
  }
  const handleAnecSelection= () => {
    const index= Math.floor(Math.random()*(anecdotes.length))
    setAnec(anecdotes[index])
  }
  const handleVote= () => {
    const ind= anecdotes.indexOf(anec)
    votes[ind]+=1
    console.log(votes[ind])
    printHighest()
  }
  const printHighest = () => {
    let max=0
    let temp=0
    for(let i=0; i<anecdotes.length; i++)
    {
       if(max<votes[i])
         {
           max= votes[i]
           temp=i
         }
    }
    setPop(anecdotes[temp])
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <br/>
      <Button func= {handleGoodFeed} feed= 'good' />
      <Button func= {handleNeutralFeed} feed= 'neutral' />
      <Button func= {handleBadFeed} feed= 'bad' />
      <br/><br/>
      <h1>Statistics</h1>  
      <Statistics good= {good} neutral={neutral} bad={bad} />
      <br/><br/>
      <Button func= {handleAnecSelection} feed= 'Anecdote' />
      <Button func= {handleVote} feed= 'Vote' />
      <h1>Anecdotes</h1>
      {anec}
      <br/>
      It has {votes[anecdotes.indexOf(anec)]} votes.
      <br/><br/>
      <h1>The anecdote with highest vote: </h1>
      <p>{popAnec}</p>
    </div>
  )
}

export default App