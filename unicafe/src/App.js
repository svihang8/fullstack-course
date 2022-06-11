import React, {useState} from 'react';

const Statistics = (props) => {

  return (
    <>
    <h1>Statistics</h1>
    <p>good {props.goodCount}</p>
    <p>neutral {props.neutralCount}</p>
    <p>bad {props.badCount}</p>
    <p>average {props.average}</p>
    <p>positive {props.positive}</p>
    </>
  )
}


export default function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const sum = (goodCount + neutralCount + badCount);
  const average = sum / 3;

  const positive = sum === 0 ? 0 : goodCount / sum * 100;
  return (
    <>
    <h1>Give Feedback</h1>
    <button onClick={() => {setGoodCount(goodCount + 1)}}>good</button>
    <button onClick={() => {setNeutralCount(neutralCount + 1)}}>neutral</button>
    <button onClick={() => {setBadCount(badCount + 1)}}>bad</button>

    <br/>

    {sum !== 0 && <Statistics
    goodCount = {goodCount}
    neutralCount = {neutralCount}
    badCount = {badCount}
    average = {average}
    positive = {positive}
    />}

    {sum === 0 && (
      <>
      <h1>Statistics</h1>
      <p>No feedback given</p>
      </>
    )
    }

    </>  
  );
}
