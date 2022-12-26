console.log("FETCH");
const container = document.getElementById("container");
async function getData(){
    try{
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);

        data.products.forEach((product) => {
            const item = `
            <div>
            ${product.brand}: ${product.title} - $${product.price}
            </div>
            `;
            container.innerHTML += item;
        });
    } catch(err){
        
        console.log("ALDAA:",err.message);
    }
}
getData();
