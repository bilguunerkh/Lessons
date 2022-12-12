// function openWindow() {
//     let url = 'http://www.google.com';
//     let hemjee = 'height=600,width=800'
//     window.open(url, "", hemjee);
// }

// alert ("Welcome to Pinecone academy");
// let result = window.confirm(question);



// let ageStr = prompt("Ta heden nastai ve?");
// let age = Number(ageStr);

// let feedback = age >= 16 ? "🟩" : "🟥";
// alert(feedback);


let timeoutID;

function showAlert(){
    let ageStr = prompt("Ta heden nastai ve?");
    let age = Number(ageStr);

    let feedback = age >=16 ?  "🟩" : "🟥";
    alert(feedback);
}
function cancelAlert(){
    timeoutID = setTimeout(alert, 10, 'Demo Demo!');
}


let print = 0;
setInterval(startInterval, 1000);
function setInterval(){
    console.log(print);
    print = print + 2;
}
