
const inputs = document.getElementsByTagName("input");
const hedbaina = document.getElementsByTagName("input") ;
let regisBtn = document.getElementsByClassName("registerBtn")[0];
let loginBtn = document.getElementsByClassName("loginBtn")[0];





let values = () => {
    for(let i = 0; i < hedbaina.length;i++){
        console.log(hedbaina[0].value);
        console.log(hedbaina[1].value);
        console.log(hedbaina[2].value);

    }
};

let locations = () => {
    location = "login.html";

    
}
regisBtn.addEventListener("click",values);
loginBtn.addEventListener("click",locations);




