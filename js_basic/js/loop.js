// let sondgoi = prompt("10-аас бага то оруулна уу");
// let nom = Number(sondgoi);
// const togtmol = 100;

// while (nom <= togtmol){
//     if(nom % 2 !== 0){
//         console.log(nom);

//     }         nom = nom + 1;

// }



// let ntoo = prompt("n toog orurlna uu");
// let s = 0;
// let i = 1;
// let sondgoi = Number(ntoo);

// while( i <= sondgoi ){
//     if(i % 2 !== 0){
//         s = s + i;
//         i = i + 1;
//         console.log(s);  
//     }
//     i++;
// }




//Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич

// let p = prompt("Ta duriin too oruulna uu");
// let eko = Number(p);
// let isPrime = true;

// if (p === 2){
//     console.log(`${p} ni 🟩 🟩 🟩 `);
// } else {
//     let i = 2;
//     while (i < eko ){
//         if (eko%i === 0){
//             isPrime = false;
//             break;
//         }
//         i = i+1;
//     }
//     if (isPrime){
//         console.log(`${eko} ni 🟩 🟩 🟩 `);
//     } else{
//         console.log(`${eko} ni 🟥 🟥 🟥 `);
//     }

// }


// let s = prompt("Ta duriin toogo oruulna uu");
// let sum = Number(s);

// if(0>sum){
//     console.log(" 🟥 🟥 🟥");
// } else{
//     let i = 0;
//     let o = 0;
//     while(i < sum){
//         i = i+1;
//         o = o+i;
//     }
//     console.log(`${o}`);

// }

let a = prompt("тоог хэдэн оронтойг хэвлэнэ");
let d = Number(a);

if(0>d){
    console.log(" 🟥 🟥 🟥");
} else{
    let digit = 0;
    while(d % 10 !== 0){
        digit = digit + 1;
    }
    console.log(`${digit}`)
    

}




