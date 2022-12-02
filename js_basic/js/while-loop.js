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




//toonii orng tooloh

// let a = prompt("ta hussen toogoo oruulna uu");
// a = Number(a);

// let count = 0;

// while(a!==0){
//     count = count + 1;
//     a = Math.floor(a/10);    
// }
// console.log(count);




let e = prompt("ta duriin too avna uu");
e = Number(e);
let q = prompt("Ta dahin duriin too avna uu");
q  = Number(q);

let isTaav = true;  

let max,min;
if(e < q){
    max = q;
    min = e;
} else{
    max = e;
    min = q;
}

let random = (Math.round(Math.random() * (max-min) + min));
console.log(`Random: ${random}`);




let erh = 2;
let ntoo = 0;

while(erh > 0){
   ntoo = prompt("Ta taah toogoo oruulna uu???"); 
   ntoo = Number(ntoo);
    if(ntoo === random){
        isTaav = true;
        break;
    }
    else{   
        erh = erh - 1;
        console.log(`Too taah erh ${erh},${ntoo},${random} baina.`);
        isTaav = false;    
    }

}


if(isTaav){
    // console.log(`${ntoo} ni RANDOM tootoi taarj baina 🟩`)
    alert("Zuw bn");
} else{
    // console.log(`${ntoo} ni RANDOM tootoi taarahgui baina 🟥 `)
    alert("buruu baina");
}










