import { useState } from 'react'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      text : 'If it hurts, do it more often',
      votes : 0, 
    },
    {
      text : 'Adding manpower to a late software project makes it later!',
      votes : 0, 
    },
    {
      text : 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes : 0, 
    },
    {
      text : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes : 0, 
    },
    {
      text : 'Premature optimization is the root of all evil.',
      votes : 0, 
    },
    {
      text : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes : 0, 
    },
    {
      text : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
      votes : 0, 
    },
  ])
   
  const [selected, setSelected] = useState(0);

  const [mostVoted, setMostVoted] = useState(0);

  const handleAnecdote = () => {
    let nextIndex = selected;
    while(nextIndex === selected) {
      nextIndex = Math.floor(Math.random() * anecdotes.length);
    }
    
    setSelected(nextIndex);
  }

  const handleVote = () => {
    let newAnecdotes = [...anecdotes];
    let newMostVoted = mostVoted;
    newAnecdotes[selected].votes++;

    if(newAnecdotes[selected].votes > newAnecdotes[newMostVoted].votes) {
      newMostVoted = selected;
    }
    setAnecdotes(newAnecdotes);
    setMostVoted(newMostVoted);
  }
  return (
    <>
    <div>
      <h1>Anecdote of the day</h1>
      <p> {anecdotes[selected].text} has {anecdotes[selected].votes} votes </p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>
    </div>
    <div>
      <h1>Anecdote with most Votes</h1>
      <p>
        {anecdotes[mostVoted].text} has {anecdotes[mostVoted].votes} votes </p>
    </div>
    </>
  )
}

export default App