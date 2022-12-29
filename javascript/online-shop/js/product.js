console.log("🟩 🟩 🟩");
let table = document.querySelector("table");
const productList = document.querySelector(".productList");



const getProducts = async () => {
    const response = await fetch("http://192.168.1.220:4040/product");
    const doto = await response.json();
    allProducts = doto.product;
    console.log(doto);
    displayProduct();

};
getProducts();






const displayProduct = () => {
    productList.innerHTML = "";
  allProducts.forEach((product) =>{
  const item =`
  <tr>
                <th scope="row">1</th>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
                <td>${product.isSpecial}</td>
                <td>
                    <button type="button" class="btn btn-success">Edit</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                </td>
                
              </tr>
    `;
    productList.innerHTML += item;
});

    

};





