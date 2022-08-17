//console.log
//get positive integer from array
const integers = [5, -345, 562456, 95345, 4, 232, 2, 3, 7, -457];
function solution(A) {
  //   let newArray = A.sort();
  let lowestNumber = 1;
  let nextNumber = A[0];
  for (let i = 1; i <= A.length; i++) {
    console.log(i);
    const n = A[i];
    if (n > 0) {
      console.log(n);
      console.log(A.length);

      if (n < nextNumber) {
        console.log(n);
        nextNumber = n;
        lowestNumber = nextNumber;
        return lowestNumber;
      } else {
        return lowestNumber + "lowestNumber";
      }
    }
  }
  //   return lowestNumber;
}

console.log(solution(integers));
