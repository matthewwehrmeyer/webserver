let x = 1;

if ( x == 0){
let array1 = [3,6,4,2,7,8,6,10,2,5,4,1];
for (let i=0; i<array1.length; i++) {
  array1[i] = array1[i] + 3;
}
console.log(array1);

let array2 = [3,6,4,2,7,8,6,10,2,5,4,1];
let newArray = array2.map(item => item + 3);
let newArray2 = array2.map(item => item * 5);
console.log('Old array');
console.log(array2);
console.log('New array');
console.log(newArray);
console.log(newArray2);

// Go Patrick Henry?
let array3 = ['P','a','t','r','i','c','k',' ','H','e','n','r','y'];
let newArray3 = array3.reduce((accumulator, item) => accumulator + item, 'Go ');
console.log(newArray3);
}

let array4_ = [
  {name: 'George', rank: 1},
  {name: 'Thomas', rank: 2},
  {name: 'Abraham', rank: 5},
  {name: 'Alexander', rank: 10},
  {name: 'Andrew', rank: 20},
  {name: 'Ulysses', rank: 50},
  {name: 'Benjamin', rank: 100},
  {name: 'William', rank: 500},
  {name: 'Grover', rank: 1000},
  {name: 'James', rank: 5000},
  {name: 'Salmon', rank: 10000},
  {name: 'Woodrow', rank: 100000}
];
let newArray = array4_.filter(item => item.rank < 50);
console.log(newArray)
