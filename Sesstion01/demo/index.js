// let name = "hoa"

// console.log("hello world");

//Biến
//Từ khóa khai báo + tên biến + (gán giá trị)
var a = "hoa";            // có thể khai báo lại 1 biến giống hệ (ko nên dùng)
let b;                    // ko thể giống var
const PI = 3.14;          //không gán lại đc giá trị

b = PI;

let str = "hello";        // "" dùng cho chuỗi bình thường
let str2 = `hello ${a}`    //`` dùng cho chuỗi đặc biệt, đưa biến vào trong chuỗi

//input và output
let inputName = prompt("Vui lòng nhập tên của mày");
console.log(inputName, "con mẹ mày");   // in ra màn console trên web dấu ',' = '+' = ${}
alert(inputName);         // in luôn trên trình duyệt

console.log("xin chào " + inputName);
console.log(`12 ${inputName}`);         // ${} đc bao bọc bởi dấu ``

console.log("15", 1 + 2); 
console.log("15", 1 + "2");        // ưu tiên chuỗi với cộng với các phép khác ưu tiên số

// ép kiểu
let number = "2";
number = Number(number);  // thay hàm Number = + hoặc parseInt
console.log(1 + number);

number = parseFloat(number);
number = String(number);

//-----Ép kiểu prompt về dạng số
let number0 = +prompt("Nhạp vào số nguyên bất kỳ");

// đối tượng math
console.log(Math.floor(Math.random() * 10) + 1);

//Một số phương thức của chuỗi 
let myName = prompt("Nhạp vào số nguyên bất kỳ");
console.log("Chào " + myName.toUpperCase);  // cắt khoảng trống đầu vào cuối, viết hoa
console.log(typeof(myName));

console.log(isNaN(myName));  // kiểm tra số 







