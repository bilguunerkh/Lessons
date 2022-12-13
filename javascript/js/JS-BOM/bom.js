const startBtn = document.getElementsByTagName("button")[0];
const stopBtn = document.getElementsByTagName("button")[1];
const container = document.getElementById("container");
const h1 = document.getElementsByTagName("h1")[0];


let timer = null;

const ekoerkhe = () => {
    seconds = new Date().getSeconds();
    minutes = new Date().getMinutes();
    hours = new Date().getHours();
    h1.innerHTML = `<span style="color: blue">TIME:</span>: ${hours}:${minutes}:${seconds}`;
}



const stop = () => {
    clearInterval(timer);
}


const start = () => {};
    timer = setInterval(ekoerkhe, 1000);




startBtn.addEventListener("click",start);
stopBtn.addEventListener("click",() =>{
    location = "";
});



const con = `
<div class="blue">
   <div class="boxa"></div>
    <div class="boxa"></div>
    <div class="boxa"></div>
</div>
`;
container.innerHTML = con;

