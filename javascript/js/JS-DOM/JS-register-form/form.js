
const inputs = document.getElementsByTagName("input");
const hedbaina = document.getElementsByTagName("input");
const regisBtn = document.getElementsByClassName("registerBtn")[0];
const loginBtn = document.getElementsByClassName("loginBtn")[0];



regisBtn.addEventListener("click",() => {
    console.log(hedbaina[0].value);
    console.log(hedbaina[1].value);
    console.log(hedbaina[2].value);
});

let locations = () => {
    location = "login.html";    
}
loginBtn.addEventListener("click",locations);




