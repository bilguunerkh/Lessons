let input = prompt("Эхний үсгээр хайх");
isMun = true;
carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];
let loke = (p) => {

    for(let i = 0; i < carBrands.length;i++){
        if(carBrands[0][0][0].toLocaleLowerCase() === 'a'){
            console.log(`brand: ${carBrands[0][0]}`);
            console.log(`country: ${carBrands[0][1]}`);
            console.log(`year: ${carBrands[0][2]}`);
            isMun = true;
            break;
        } else if(carBrands[1][0][0].toLocaleLowerCase() === 'b'){
            console.log(`brand: ${carBrands[1][0]}`);
            console.log(`country: ${carBrands[1][1]}`);
            console.log(`year: ${carBrands[1][2]}`);
            isMun = true;
            break;                                                                                   
        }
    }



}
console.log(loke(input));



// console.log(carBrands[1][0][0])