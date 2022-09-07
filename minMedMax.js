const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  // let min = Math.min(n1, n2, n3)
  // let med = Math.median(n1, n2, n3)
  // let max = Math.max(n1, n2, n3)
  let name
  if  (n1 > n2) {
    name = n1 
    n1 = n2
    n2 = name
  } if (n1 > n3) {
    name = n1
    n1 = n3
    n3 = name
  } if (n2 > n3) {
    name = n2
    n2 = n3
    n3 = name
  }
  return { 'min' : n1 ,'mid' : n2 ,'max' : n3}
}
// console.log(minMedMax(85, 30, 1))
// console.log(minMedMax(10, 0, 20))
// console.log(minMedMax(-5, 0, 10))
// console.log(minMedMax(5, 1, 1))
// console.log(minMedMax(-1, -8, 0))
module.exports = minMedMax
