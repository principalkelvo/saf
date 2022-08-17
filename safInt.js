//javascript
// let A = 2
// let B = 2
//  A = A + B
//  B = 2*A
//  A = A
//  let C= A
// A = B
// B = C

//  console.log(A +"a")
//  console.log(B +"b")

//get maximum number divisible by four from the array
// let A = [-6, -91, 1011, -100, 84, -22, 0, 1, 473]
// function solution(A){
// let divisible = []
// let highestNum = 0

// for (let i=0; i<A.length; i++){
//     // if (A[i]%4 == 0){
//     //     return A[i]
//     // }
//     if(A[i] % 4 == 0){
//         divisible.push(A[i]);

//         console.log("divisible: " + divisible);
//         if(divisible.length > 0){
//             //find highestNum
//             highestNum = Math.max(highestNum, divisible[divisible.length-1])
//             console.log("highestNum: " + highestNum);
//         }
//     }
// }
// return 1;
// }

// console.log(solution(A))

let A = [100, 200, 100, 68];
let B = [50, 100, 100, 100];
let X = 50;
let Y = 100;
// let A = [100, 200, 100];
// let B = [50, 100, 100];
// let X = 100;
// let Y = 100;
function solution(A, B, X, Y) {
  // write your code in JavaScript (Node.js 8.9.4)
  //get all icons
  let iconRange = []; // icon range from each other
  let uniqueIconRange = []; //filter icon range
  let tapIcon = []; //tapped icon

  for (let i = 0; i < A.length; i++) {
    for (let k = 0; k < B.length; k++) {
      let icon = [A[i], B[i]];
      uniqueIconRange.push(icon); //get icon positions as array
      let stringifyIcons = uniqueIconRange.map(JSON.stringify); //stringify icons in the array
      let uniqueString = new Set(stringifyIcons);
      iconRange = Array.from(uniqueString, JSON.parse); //back to array on each
    }
  }
  //   console.log("IconRange");
  //   console.log(iconRange);

  //check the tap
  let tapRange = [X, Y]; // tapped coordinate
  //   console.log("tapRange");
  //   console.log(tapRange);

  //minus arrays tapRange subtract each iconRange
  let tapX;
  let tapY;
  for (let i = 0; i < iconRange.length; i++) {
    //get the range of each tap from the center of the icon
    for (let k = 0; k < iconRange[i].length; k++) {
      //iconRange subtract tapRange
      if (k % 2 == 0) {
        tapX = iconRange[i][k] - tapRange[k];
        // tapX = tapX.map(Math.abs);
        tapX = Math.abs(tapX); //change the tapped coordinate to positive num
        // console.log(tapX, "tapX");
      } else {
        tapY = iconRange[i][k] - tapRange[k];
        tapY = Math.abs(tapY); //change the tapped coordinate to positive num
        // console.log(tapY, "tapY");
      }

      //get tapped icon total
      if (tapX !== undefined && tapY !== undefined) {
        if (k % 2 !== 0) {
          let tap = tapX + tapY;
          tapIcon.push(tap);
          //   console.log("tap");
          //   console.log(tap);
          //   console.log("tapIcon");
          //   console.log(tapIcon);
        }
      }
      //push tapArea to tapIcon
    }
  }

  //get lowest range
  let output = Math.min.apply(null, tapIcon);
  //check if its between a difference of 20
  if (output <= 20) {
    indexTap = tapIcon.indexOf(output);
    // console.log(indexTap);
    return indexTap;
  } else {
    return -1;
  }
}
// solution(A, B, X, Y);
console.log(solution(A, B, X, Y));
