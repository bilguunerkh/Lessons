
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
} else{
    console.log("🟥 🟥 🟥 🟥 🟥 🟥");
} 


