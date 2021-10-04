import React from 'react'
import { Link } from 'react-router-dom'
import { compare } from '../Utils'

const NameScores = function ({ nameScores }) {
  const scoresInOrder = nameScores.sort(compare)
  let n = 1
  for (const score of scoresInOrder) {
    score.rank = n
    n++
  }
  return (
    <div id="high-scores">
      <h3>High scores for Game 1</h3>
      <table className="high-scores">
        <thead>
          <tr id="columns">
            <th id="rank">Rank</th>
            <th>Name</th>
            <th id="score">Score</th>
          </tr>
        </thead>
        <tbody>
          {scoresInOrder.map(score => (
            <tr key={score.key}>
              <td className="rank-number">{score.rank}</td>
              <td>{score.name}</td>
              <td>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <div><button className="btn escape-btn">Go Back</button></div>
      </Link>
    </div>
  )
}

export default NameScores
