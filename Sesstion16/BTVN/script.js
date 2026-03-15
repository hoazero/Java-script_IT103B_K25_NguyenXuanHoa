let employees = [];
let currentEditId = null;
let idCounter = 1;

const form = document.getElementById("employeeForm");
const fullNameInput = document.getElementById("fullName");
const dobInput = document.getElementById("dob");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const tableBody = document.getElementById("employeeTableBody");
const totalEmployees = document.getElementById("totalEmployees");
const formTitle = document.getElementById("formTitle");
const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");

function validateForm(fullName, dob, email, address) {
    if (!fullName || !dob || !email || !address) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Email không hợp lệ!");
        return false;
    }

    return true;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function renderTable() {
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const row = `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.fullName}</td>
                <td>${formatDate(employee.dob)}</td>
                <td>${employee.email}</td>
                <td>${employee.address}</td>
                <td>
                    <button class="edit-btn" onclick="editEmployee(${employee.id})">Sửa</button>
                    <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Xóa</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    totalEmployees.innerText = employees.length;
}


form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = fullNameInput.value.trim();
    const dob = dobInput.value;
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();

    if (!validateForm(fullName, dob, email, address)) return;

    if (currentEditId === null) {
        
        employees.push({
            id: idCounter++,
            fullName,
            dob,
            email,
            address
        });
    } else {
        
        const employee = employees.find(emp => emp.id === currentEditId);
        employee.fullName = fullName;
        employee.dob = dob;
        employee.email = email;
        employee.address = address;

        currentEditId = null;
        formTitle.innerText = "Thêm Nhân Viên Mới";
        submitBtn.innerText = "+ Thêm Nhân Viên";
        cancelBtn.classList.add("hidden");
    }

    form.reset();
    renderTable();
});


function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    fullNameInput.value = employee.fullName;
    dobInput.value = employee.dob;
    emailInput.value = employee.email;
    addressInput.value = employee.address;

    currentEditId = id;

    formTitle.innerText = "Chỉnh Sửa Nhân Viên";
    submitBtn.innerText = "Cập Nhật";
    cancelBtn.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}


function deleteEmployee(id) {
    const employee = employees.find(emp => emp.id === id);

    if (!confirm(`Bạn có chắc chắn muốn xóa nhân viên ${employee.fullName}?`)) {
        return;
    }

    employees = employees.filter(emp => emp.id !== id);

    if (currentEditId === id) {
        form.reset();
        currentEditId = null;
        formTitle.innerText = "Thêm Nhân Viên Mới";
        submitBtn.innerText = "+ Thêm Nhân Viên";
        cancelBtn.classList.add("hidden");
    }

    renderTable();
}


cancelBtn.addEventListener("click", function() {
    form.reset();
    currentEditId = null;
    formTitle.innerText = "Thêm Nhân Viên Mới";
    submitBtn.innerText = "+ Thêm Nhân Viên";
    cancelBtn.classList.add("hidden");
});