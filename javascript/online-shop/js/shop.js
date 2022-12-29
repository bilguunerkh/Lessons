console.log("🟩 🟩 🟩");

const productList = document.querySelector(".productList");
const cartCount = document.querySelector(".cartCount");
const cartList = document.querySelector(".cartList");
const countPrice = document.querySelector(".countPrice");

let allProducts = [];
let cartProducts = [];
let countPrices = [];



const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const doto = await response.json();
    allProducts = doto;
    console.log(doto);
    displayProduct();


};
getProducts();

const displayProduct = () => {
    productList.innerHTML = "";
  allProducts.forEach((product, idx) =>{
  const item =`
  <div class="p-2 col-12 col-md-6 col-lg-4">
  <div class="shadow-lg p-3 card text-dark bg-light">
      <img src="${product.thumbnail}" style="width:100%; height: 280px;" >
      <div class="card-body">
          <h3 class="card-title text-truncate b">${product.title}</h3>
  
        <div class="d-flex w-100 justify-content-between">
        <h5 class="card-price text-danger m-0">$${product.price}</h5>
        <p class="card-sale bg-success m-3 text-light p-1 ">${product.discountPercentage}</p>
  

        </div>
          <p class="card-text text-truncate">${product.description}</p>
          <div class="d-flex w-100 justify-content-between">
              <div class="m-0 text-warning">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <h5 class="text-warning">${product.rating}</h5>
              </div>
              <div class="m-0">  
          
                  <button onclick="addCart(${idx})" class="btn btn-primary addCart">Нэмэх</button>
              </div>
          </div>
      </div>
  </div>
</div>
    `;
    productList.innerHTML += item;
});

    

};






const addCart = (idx) => {
    cartProducts.push(allProducts[idx]);
    cartCount.innerText = cartProducts.length;
    displayCart();
}



const displayCart = () => {
    cartList.innerHTML = "";
    for (product of cartProducts) {
      const cartItem = `
      <div class="gada">

      <div class="cartList-image">
          <img src="${product.thumbnail}">
      </div>
      <div class="cartList-brand">
          <h5 class="fw-bold mb-0 me-5 pe-3 text-success">$${product.price}</h5>
          <p style="font-size: 12px; ">${product.discountPercentage}% хямдарсан байна</p>
      </div>
  </div>
`;
      cartList.innerHTML += cartItem;
    }
  };



