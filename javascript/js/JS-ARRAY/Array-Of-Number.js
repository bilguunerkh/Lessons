
let arrayOfNumbers = [43, 56, 96, 89, 88, 90, 99, 652, 15, 290, 91];

let max = 0;
let sum = 0;
let min = 0;


for(let i = 0; i < arrayOfNumbers.length; i++){
    sum = sum + arrayOfNumbers[i];

    if(max < arrayOfNumbers[i]){
        max = arrayOfNumbers[i];
    }

}
console.log(`Max utga ni: ${max}`);
console.log(`Min utga ni: ${min}`);
console.log(`Sum utga ni: ${sum}`);

arrayOfNumbers[0] = 1;
console.log(arrayOfNumbers);

arrayOfNumbers[arrayOfNumbers.length -1] = 100;
console.log(arrayOfNumbers);


let x = [[1,2,3],[4,5,6],[7,8,9]];

for(let i = 0; i < x.length; i++){
    for(let j = 0; j<x[0].length; j++){
        console.log(x[i][j]);
    }
}
