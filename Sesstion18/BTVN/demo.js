let products =  JSON.parse(localStorage.getItem("product")) || [];

let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productPrice = document.getElementById("productPrice");
let productQuantity = document.getElementById("productQuantity");
let productDescription = document.getElementById("productDescription");

let productForm = document.getElementById('productForm');
let tableBody = document.getElementById("productTableBody");

productForm.addEventListener('submit',createProduct);

function renderProducts() {
    tableBody.innerHTML = "";

    products.forEach((p) => {
        let row = `
        <tr>
            <td>${p.id}</td>
            <td><strong>${p.productName}</strong></td>
            <td>${p.productCategory}</td>
            <td class="price">${Number(p.productPrice).toLocaleString()} ₫</td>
            <td class="quantity">${p.productQuantity}</td>
            <td class="description">${p.productDescription}</td>
            <td>
                <button onclick="deleteProduct(${p.id})">Xóa</button>
            </td>
        </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function createProduct(e){
    e.preventDefault();
    let newProduct = {
        id: products.length != 0 ? products[products.length -1].id + 1 : 1,
        productName: productName.value.trim(),
        productCategory : productCategory.value,
        productPrice : productPrice.value,
        productQuantity : productQuantity.value,
        productDescription : productDescription.value
    }
    products.push(newProduct);
    
    localStorage.setItem("product", JSON.stringify(products));
    productForm.reset();
    renderProducts();

};
function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    localStorage.setItem("product", JSON.stringify(products));
    renderProducts();
}

renderProducts();