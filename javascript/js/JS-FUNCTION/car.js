let p = prompt("Эхний үсгээр хайх");
let carBrands = 'aston Martin Lagonda Ltd, UK, 2016';
isMun = true;
// const like = carBrands.split([]);
let likes = (carBrands) => {

    for(let i = 0; i < carBrands.length; i++){
        
        if(carBrands[0] === p){
            isMun = true;
            break;
        }
        else{
            isMun = false;
        }
    }
    o = carBrands.split([3]);
    console.log(o);

if(isMun){
    return console.log("🟩 brand: " + o[0]),("🟩 country: " + o),("🟩 year: " + o);
} else{
    return console.log("🟥 🟥 🟥")
}

}

console.log(likes(carBrands));

//reverse() тухайн array-н утгуудыг тонгорж шинэчлэнэ.
// let p = prompt("Гараас дурийн тоо оруулна уу");
// let reversed = 0;
// p = Number(p);
// reversed = p.reverse();
// console.log('reverse a number: ',reversed);
// let input = prompt("Гараас дурийн тоо оруулна уу");

// let o = input = Number(input);
// let reverso = (o) =>{
//     return manga = input.reverse();
// }
// console.log(reverso(o));