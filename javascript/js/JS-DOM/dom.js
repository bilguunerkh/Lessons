const myButton = document.getElementById("myBtn");
const divs = document.getElementsByClassName("box");


// const change = () => {
//     for(let i = 0; i < divs.length; i++){
//         let color = getColor;
//         divs[i].style.backgroundColor = color;
//     }
// }



const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };




myButton.addEventListener("click",() =>{
    for(let i = 0; i < divs.length; i++){
        let color = randomColor;
        divs[i].style.backgroundColor = color;
    }

})