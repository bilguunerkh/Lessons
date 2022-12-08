let input = prompt("Эхний үсгээр хайх");
isMun = true;
carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];
let loke = (carBrands) => {

    for(let i = 0; i < carBrands.length;i++){

        if(carBrands[i][0][0].toLocaleLowerCase() === input){
            console.log(`🟩 brand: ${carBrands[0][0]}`);
            console.log(`🟩 country: ${carBrands[0][1]}`);
            console.log(`🟩 year: ${carBrands[0][2]}`);

            // console.log(`-----------`)

            // console.log(`🟩 brand: ${carBrands[1][0]}`);
            // console.log(`🟩 country: ${carBrands[1][1]}`);
            // console.log(`🟩 year: ${carBrands[1][2]}`);

        } 
        else if(carBrands[i][0][0].toLocaleLowerCase() === input){
            console.log(`🟩 brand: ${carBrands[2][0]}`);
            console.log(`🟩 country: ${carBrands[2][1]}`);
            console.log(`🟩 year: ${carBrands[2][2]}`);
                                                                                
        }
        else if(carBrands[i][0][0].toLocaleLowerCase() === input){
            console.log(`🟩 brand: ${carBrands[3][0]}`);
            console.log(`🟩 country: ${carBrands[3][1]}`);
            console.log(`🟩 year: ${carBrands[3][2]}`);
                                                                                
        }
        else{
            console.log("🟥 🟥 🟥")
        }
    }
    



}
console.log(loke(carBrands));