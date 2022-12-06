// let studentNames = ['boldo', 'dorjo', 'tsetsge','dulmaa']
// let i = 0;
// while (i <= studentNames.length) {
// if (studentNames[i][0] === 'd') {
// console.log(studentNames[i]);
// break;
// }
// i++;
// }



// let studentAges = [10, 20, 15, 19, 18,19 ,19];
// let i = 0;
// let sum = 0;
// while (i < studentAges.length) {
// sum+=studentAges[i]
// i++;
// }
// let avarage = sum/studentAges.length
// console.log(Math.round(avarage));



// let userBalance = [1,2,3,5];
// let i = 0;

// while (i<userBalance.length){
//     userBalance[i] *= 10;
//     i = i+1;
// }
// console.log(userBalance)



// let arrayOfNumbers = [43, 56, 96, 89, 88, 90, 99, 652, 15, 290, 91];

// let max = 0;
// let sum = 0;
// let min = 0;


// for(let i = 0; i < arrayOfNumbers.length; i++){
//     sum = sum + arrayOfNumbers[i];

//     if(max < arrayOfNumbers[i]){
//         max = arrayOfNumbers[i];
//     }

// }
// console.log(`Max utga ni: ${max}`);
// console.log(`Min utga ni: ${min}`);
// console.log(`Sum utga ni: ${sum}`);

// arrayOfNumbers[0] = 1;
// console.log(arrayOfNumbers);

// arrayOfNumbers[arrayOfNumbers.length -1] = 100;
// console.log(arrayOfNumbers);


// let x = [[1,2,3],[4,5,6],[7,8,9]];

// for(let i = 0; i < x.length; i++){
//     for(let j = 0; j<x[0].length; j++){
//         console.log(x[i][j]);
//     }
// }


let q = prompt("Onjogo mine ner ee bicheeed hai.")
let itCompanies = ['Zenee','khulan','Bilguunerkh','Nomin','Bat','Oracle'];
let isBaigaa = true;

let slice = (itCompanies.slice());
console.log(slice);
for(let i = 0; i < itCompanies.length;i++){
    if(itCompanies[i] === q){
        isBaigaa = true;
        console.log(`Tanii ner: ${i}r bairlald baina.`);
        break;
    } else{
        isBaigaa = false;
    }

}
if (isBaigaa){
    console.log("🟩 🟩 🟩 🟩 🟩 🟩");
}else{
    console.log("🟥 🟥 🟥 🟥 🟥 🟥");
} 




//count word
let p = prompt("Хайх үгээ оруулна уу");

let data = ['Засгийн', 'газарт', '6.4', 'сая', 'тонн', 'нүүрс', 'алдагдсан', 'гэх', 'мэдээлэл', 'ирээгүй', 'байна.', 'Бодит', 'Бодит', 'Бодит', 'их', 'хэмжээний', 'нүүрс', 'алдагдсан', 'гэх', 'асуудал', 'байна', 'байна.', 'Хууль', 'хяналтын', 'байгууллага', 'хяналт', 'шалгалтын', 'ажил', 'явуулж', 'байна'];
let count = 0;

for(let i = 0; i < data.length; i++){
    if(data[i] === p){
        count = count + 1;
    }
}
console.log(`🧮 ${p} gedeg ug: ${count} orson baina.`);
