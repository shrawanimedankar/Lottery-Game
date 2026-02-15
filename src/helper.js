function genTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

// if ticket numbers are all same
let winCondition = (ticket) => {
  return ticket.every((num) => num === ticket[0]);
};

// if sum of ticket is 15
// function sum(arr){
//     return arr.reduce((sum, curr) => sum + curr , 0);
// }

// if ticket first number is 0
// let winCondition = (ticket) => {
//     return ticket[0] === 0;
//  };

export { genTicket, winCondition };
