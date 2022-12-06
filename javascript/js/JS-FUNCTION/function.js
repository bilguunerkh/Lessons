// function ekoerkhe(){
//     console.log("Hello Bilguunerkh");
// }

// function zenee(name){
//     console.log("SAIN BAINA uu " + name);
// }


// function add(a,b){
//     return a+b;
// }
// function syb(a,b){
//     return a-b;
// }


// ekoerkhe();
// zenee("Khulan");
// let c = add(10,10);
// console.log(c);



// let x = function (num){
//     return num * num;
// };
// let y = x(3);
// console.log(y);

// let x = (num) => {
//     return num * num;
// }
// console.log(x(5));




//FUNCION DECLARATION
// a = kbadrat(4);
// console.log(a);

// function kbadrat (num){
//     return num * num;
// };


//FUNCTION EXPRESSION
// let kbadrat = function(num){
//     return num * num;
// }
// a = kbadrat(10);
// console.log(a);



// let x = (num) =>{
//     return num * num;

// }
// console.log(x(7));





// // Өгөгдсөн 2 тооны ихийг олох функц бич.
// let a = prompt("ehnii too oruulna uu");
// let b = prompt("2 dahi too oruulna uu");

// a = Number (a);
// b = Number(b);

// let x = (a,b) => {
//     return a*b;
// }
// console.log(x(a,b));



// Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич.
let p = prompt("Хайх тоогоо оруулна уу");
p = Number(p);
let isWoo = true;



let data = [1,2,3,4,5];
// let slice = (data.slice());
// console.log(slice);
console.log(data);

let find  = (arr,p) => {
    let i=0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] === p){
            isWoo = true;
         
            break;
        } else{
            isWoo = false;
        }
    }
    if (isWoo){
        return i;
    } else{
        return -1;
 
    }
}





console.log(find(data,p));







