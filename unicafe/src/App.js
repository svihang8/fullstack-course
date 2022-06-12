import React, {useState} from 'react';


const StatisticLine = (props) => {

  return (
    <>
      <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
      </tr>
    </>
  )
}

const Statistics = (props) => {

  return (
    <>
    <h1>Statistics</h1>
    <table>
      <StatisticLine text = "good" value = {props.goodCount}/>
      <StatisticLine text = "neutral" value = {props.neutralCount}/>
      <StatisticLine text = "bad" value = {props.badCount}/>
      <StatisticLine text = "average" value = {props.average}/>
      <StatisticLine text = "positive" value = {props.positive}/>
    </table>
    </>
  );
}


const Button = (props) => {

  return (
    <>
    <button onClick={props.handleClick}>{props.text}</button>
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
    <Button handleClick={() => {setGoodCount(goodCount + 1)}} text = "good"></Button>
    <Button handleClick={() => {setNeutralCount(neutralCount + 1)}} text = "neutral"></Button>
    <Button handleClick={() => {setBadCount(badCount + 1)}} text = "bad"></Button>

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
