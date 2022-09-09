const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here
  let arrno = [n1, n2, n3]; // arrno คือทำตัว n1, n2, n3 ให้อยู่ด้วยกันใน array arrno
  let no
    for (let i = 0; i < arrno.length; i++) { // Loop ตามจำนวนตัวใน array of arrno ( n ) n1, n2, n3
        for (let j = i + 1; j < arrno.length; j++) { // Loop ตามจำนวนตัวใน array of arrno ( n+1 ) n2, n3
            if (arrno[i] > arrno[j]) { // เทียบค่า arrno[0,1,2] > arrno[1,2]
                no = arrno[i]
                arrno[i] = arrno[j]
                arrno[j] = no
            }
        }
    }
  return {min: arrno[0], mid: arrno[1], max: arrno[2]}
}
module.exports = minMedMax
