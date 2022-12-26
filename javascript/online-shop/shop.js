console.log("ajillaj baina")
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
  
    <div class="p-2 col-3 ">
        <div class="shadow-lg  card text-dark bg-light">
            <img src="${product.thumbnail}" style="width:100%; height: 200px">
            <div class="card-body">

                <h5 class="card-title">${product.title}</h5>
                <p class="card-text text-primary">$549.00</p>
                <p class="card-text">${product.description}</p>

                <div class="d-flex w-100 justify-content-between">
                    <div class="m-0">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="m-0">  
                        <button class="btn btn-primary" >Нэмэх</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    `;
    productList.innerHTML += item;
});

    

};
