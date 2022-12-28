console.log("🟩 🟩 🟩");

const productList = document.querySelector(".productList");
const cartCount = document.querySelector(".cartCount");
const cartList = document.querySelector(".cartList");

let allProducts = [];
let cartProducts = [];





const getProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const doto = await response.json();
    allProducts = doto.products;
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
          <h3 class="card-title">${product.title}</h3>
  
        <div class="d-flex w-100 justify-content-between">
        <h5 class="card-price text-danger m-0">$${product.price}</h5>
        <p class="card-sale bg-success m-3 text-light p-2 rounded">${product.discountPercentage}</p>
  

        </div>
          <p class="card-text text-trunate">${product.description}</p>
          <div class="d-flex w-100 justify-content-between">
              <div class="m-0">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
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
          <div class="d-flex align-items-center mb-5 border border-warning border-2">
              <div class="flex-shrink-0">
                <img
                  src="${product.thumbnail}"
                  class="img-fluid"
                  style="width: 150px"
                  alt="Generic placeholder image"
                />
              </div>
              <div class="flex-grow-1 ms-3">
                <button class="btn float-end text-black">
                  <i class="fas fa-times"></i>
                </button>
                <h5 class="text-primary">${product.title}</h5>
                <h6 style="color: #9e9e9e">Color: white</h6>
                <div class="d-flex align-items-center">
                  <p class="fw-bold mb-0 me-5 pe-3">${product.price}</p>
                  <div class="">
                    <input
                      class="form-control"
                      min="0"
                      id="quantity"
                      value="1"
                      type="number"
                    />
                  </div>
                </div>
              </div>
          </div>`;
      cartList.innerHTML += cartItem;
    }
  };