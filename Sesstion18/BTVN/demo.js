let products =  JSON.parse(localStorage.getItem("product")) || [];

let productName = document.getElementById("productName");
let productCategory = document.getElementById("productCategory");
let productPrice = document.getElementById("productPrice");
let productQuantity = document.getElementById("productQuantity");
let productDescription = document.getElementById("productDescription");

let productForm = document.getElementById('productForm');
let tableBody = document.getElementById("productTableBody");
let footerData = document.getElementById("footerData");

productForm.addEventListener('submit',createProduct);

function renderProducts() {
    tableBody.innerHTML = "";

    products.forEach((p) => {
        let row = `
        <td>${p.id}</td>
                <td><strong>${p.productName}</strong></td>
                <td>${p.productCategory}</td>
                <td class="price">${Number(p.productPrice).toLocaleString()}₫</td>
                <td class="quantity">${p.productQuantity}</td>
                <td class="description">${p.productDescription}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${p.id})">
                      ✏️ Sửa
                    </button>
                    <button class="btn-delete" onclick="deleteProduct(${p.id})">
                      🗑️ Xóa
                    </button>
                  </div>
                </td>
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

// function deleteProduct(id) {
//     products = products.filter(p => p.id !== id);
//     localStorage.setItem("product", JSON.stringify(products));
//     renderProducts();
// }

function deleteProduct(id) {
    let deleteId = products.findIndex((product) => product.id === id);
    if(deleteId !== -1){
        products.splice(deleteId, 1);
        localStorage.setItem("product", JSON.stringify(products));
        renderProducts();
    }
}

function editProduct(id) {
    
}

renderProducts();