let numbers = [1,2,3,4,5,6,7,8,9,10];

let filter = (numbers,callback) => {
    let urDun = [];
    for(let i = 0; i < numbers.length; i++){
        if(callback(numbers[i])){
            urDun.push(numbers[i]);
        }
    }
    return urDun;

}

const evens = filter(numbers, (n) => {
    return n%2 === 0;
})
console.log(evens);




