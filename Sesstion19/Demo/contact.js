let products = [
    {id: 1, name: "Nguyễn Xuân Hòa", phone: "0901234567", email: "nguyenhoa@email.com"},
    {id: 2, name: "Nguyễn Long", phone: "0901234563", email: "nguyenlong@email.com"},
];

// products = 
let contactBody = document.getElementById("contact-tbody");

function renderProduct() {
    contactBody.innerHTML = "";
    products.forEach((product) => {
        contactBody.innerHTML += `
        <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.phone}</td>
                <td>${product.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit" onclick="editProduct(${product.id})">Sửa</button>
                    <button class="btn-delete" onclick="deleteProduct(${product.id})">Xóa</button>
                  </div>
                </td>
              </tr>
        `
    })
    
    localStorage.setItem("product", JSON.stringify(products));
}

function deleteProduct(id) {
    products = products.filter((product) => product.id !== id);
    localStorage.setItem("product", JSON.stringify(products));
    renderProduct();
}

function editProduct(id) {
    
}
renderProduct();

