const myBtn = document.getElementById("myBtn");

const divs = document.getElementsByClassName("box");

const solih = () => {
    for(let i = 0; i < divs.length; i++){
        let color = randomColor();
        divs[i].style.backgroundColor = color;
    }
}



let changee = () => {
    let red = Math.floor(Math.random() * 256).toString(16);
    let green = Math.floor(Math.random() * 256).toString(16);
    let blue = Math.floor(Math.random() * 256).toString(16);
    return `#${red},${green},${blue}`
};


myBtn.addEventListener("click", changee);