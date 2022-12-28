console.log("🟩 🟩 🟩");

const productList = document.querySelector(".productList");

let allProducts = [];

const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const doto = await response.json();
    allProducts = doto.products;
    console.log(doto);
    displayProduct();


}

getProducts();


const displayProduct = () => {
  allProducts.forEach((product) =>{
  const item =`
  <div class="p-2 col-12 col-md-6 col-lg-4">
  <div class="shadow-lg p-3 card text-dark bg-light">
      <img src="${product.thumbnail}" style="width:100%; height: 300px;" >
      <div class="card-body">
          <h3 class="card-title">${product.title}</h3>
          <h5 class="card-price text-success">$${product.price}</h5>
          <p class="card-text text-trunate">${product.description}</p>
          <div class="d-flex w-100 justify-content-between">
              <div class="m-0">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>
              <div class="m-0">  
                  <button class="btn btn-primary">Нэмэх</button>
              </div>
          </div>
      </div>
  </div>
</div>

    `;
    productList.innerHTML += item;
});

    

};