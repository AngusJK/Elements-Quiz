export const compare = function (a, b) {
  const scoreA = a.score
  const scoreB = b.score
  let comparison = 0
  if (scoreA > scoreB) {
    comparison = -1
  } else if (scoreA < scoreB) {
    comparison = 1
  }
  return comparison
}
