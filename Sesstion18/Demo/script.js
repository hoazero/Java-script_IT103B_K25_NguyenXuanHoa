let products = [];

let productCode = document.getElementById("product-code");
let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-price");

let productForm = document.getElementById("product-form");
productForm.addEventListener("submit", createProduct);

function createProduct(e) {
    e.preventDefault();

    let newProduct = {
        id: products.length !== 0 ? products[products.length - 1].id + 1 : 1,
        productCode: productCode.value,
        productName: productName.value,
        productPrice: productPrice.value,
    }

    products.push(newProduct);
    // console.log(newProduct);
    productForm.reset();
    inputProduct()
}

function inputProduct() {
    let productTbody = document.getElementById("product-tbody");
    productTbody.innerHTML = "";
    products.forEach((product) =>{
        productTbody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.productCode}</td>
                <td>${product.productName}</td>
                <td>${product.productPrice}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>
            </tr>
        `
    })
}
inputProduct();