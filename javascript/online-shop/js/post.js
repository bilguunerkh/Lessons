console.log("🟩 🟩 🟩");

const title  = document.getElementById("title");
const category = document.getElementById("category");
const price = document.getElementById("price");
const saveBtn = document.getElementById("saveBtn");
// const isSpecial = document.getElementById("radioNoLabel");


let saveFun = async () => {
    await fetch("http://192.168.1.220:4040/product",{
    method: "POST",
    headers: {"Content-type": "application/json"},

    body: JSON.stringify({
        title: title.value,
        category: category.value,
        price: price.value,
        image: "url",
        isSpecial: false,
    }),
})

}

saveBtn.addEventListener("click", saveFun);
