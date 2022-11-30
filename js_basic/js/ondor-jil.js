let years = prompt("Хэрэглэгч та жилээ оруулна уу");

if (years % 400 === 0){
    console.log("🟩");
} else if ( years % 100 === 0){
    console.log("🟥");
} else if (years %4 === 0){
    console.log("🟩");
} else {
    console.log("🟥");
}