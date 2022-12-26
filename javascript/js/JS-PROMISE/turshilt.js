console.log("Fetch");

const container = document.getElementById("container");
async function getdata() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    data.products.forEach((product) => {
      const item = `
            <div style="background-color: azure;">
            ${product.brand}: ${product.title} - $${product.price}
            </div>
        `;
      container.innerHTML += item;
    });
  } catch (err) {
    console.log("Aldaa:", err.message);
  }
}

getdata();
