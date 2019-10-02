import React, { useEffect, useState } from 'react';
import Body from './LFscoreBody'
const App = () => {

  const [scores, Setscores] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    await fetch('https://secure-lake-56026.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
    console.log(data)
      Setscores([data.data])
    })
  }
console.log(scores)
  return (
    <div style={{width: "500px", margin: "0 auto"}}>
      hhhhhhhhhhhhhhhhhhh
      {
        scores.map((score, index) => (
          // <h6 key={index} style={{marginLeft:'30px', color: "white"}}>{score.leagueName}</h6>
          score.map((sc,i) => <h6 key={i} style={{marginLeft:'30px', color: "white"}}>{sc.leagueName}</h6>)
        ))
      }
      
  
    </div>

  )
}
export default App;