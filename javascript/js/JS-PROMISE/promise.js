console.log("Promise");

const getData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            if(id === 1){
                resolve("khulan");
            }else if(id === 2){
                resolve("bilguunerkh");
            } else{
                reject("🟥 🟥 🟥");
            }
        });
    });
};

let p = prompt("Hed gesen id-tai hereglegch haih ve? ");
getData(p)

.then((userData) => {
    console.log(userData);
}).catch((err) => {
    console.log("Error Message:", err);
})
console.log("END")