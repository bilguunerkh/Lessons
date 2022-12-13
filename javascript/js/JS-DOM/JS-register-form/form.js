
const inputs = document.getElementsByTagName("input");
const hedbaina = document.getElementsByTagName("input");
let button = document.getElementsByClassName("registerBtn");

// for(let i = 0; i < hedbaina; i++){
//     inputs[i].addEventListener("change",() => {
//         console.log(inputs.email.value);
//         console.log(inputs.psw.value);
//         console.log(inputs.repeatPsw.value);
//     })
// }
let i = 0;

let tool = () =>{
    for( i = 0; i < hedbaina; i++){
        console.log(inputs.email.value);
        console.log(inputs.psw.value);
        console.log(inputs.repeatPsw.value);

    }
}
inputs[i].addEventListener("change",tool);
