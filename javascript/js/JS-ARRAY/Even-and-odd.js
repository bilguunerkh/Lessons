// Even and odd
let array = [5,64,12,19,121,1,7,9,63,10,2,4,3];
let slice = (array.slice());
console.log(slice);

let count = 0;
let tegsh = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
        count++;
    }
    tegsh = array.length - count;

}
console.log(`🧮 Тэгш тоо: ${tegsh} baina.`)
console.log(`🧮 Сондгой тоо: ${count} baina.`)



