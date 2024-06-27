let newstorage = new Storage ("Kho lưu trữ");

let p1 = new SavingsBook(100,"Ngắn hạn","Lê Văn A", 123456789, "05/07", 5000000);
let p2 = new SavingsBook(200,"Dài hạn","Trần B", 123456780, "08/10", 105000000);
newstorage.addSavingBook(p1);
newstorage.addSavingBook(p2);
console.log(newstorage.listSavingsBook);


showAll();


function add() {
    let idInput = document.getElementById("id").value;
    let nameInput = document.getElementById("name").value;
    let moneyInput = document.getElementById("money").value;
    let typeInput = document.getElementById("type").value;
    let dateInput = document.getElementById("date").value;
    let codeInput = document.getElementById("code").value;
    
    let newSavingsBook = new SavingsBook(codeInput, typeInput, nameInput, idInput, dateInput, moneyInput);
    newstorage.addSavingBook(newSavingsBook);
    alert("Thêm thành công");
    showAll();
}

function remove(index) {
    let isConfirm = confirm("Bạn chắc chứ?");
    if (isConfirm) {
        newstorage.removeSavingBook(index);
        alert("Xóa thành công");
        showAll();
    }
}

function update(index) {
    let codeInput = +prompt("Nhập mã sổ");
    let typeInput = prompt("Nhập loại sổ");
    let nameInput = prompt("Nhập Họ và Tên");
    let idInput = +prompt("Nhập số căn cước");
    let dateInput = prompt("Nhập ngày mở sổ");
    let moneyInput = +prompt("Nhập số tiền gửi");
    
    let newSavingsBook = new SavingsBook(codeInput, typeInput, nameInput, idInput, dateInput, moneyInput);
    newstorage.update(index, newSavingsBook);
    alert("Sửa thành công");
    showAll();
}

function showAll() {
    let list = newstorage.listSavingsBook;
    let str = `
        <tr>
            <th>Code</th>
            <th>Type</th>
            <th>Name</th>
            <th>Id number</th>
            <th>Date</th>
            <th>Amount</th>
            <th colspan="2">Action</th>
        </tr>
    `;
    for (let i = 0; i < list.length; i++) {
        str += `
            <tr>
                <td>${list[i].code}</td>
                <td>${list[i].type}</td>
                <td>${list[i].fullName}</td>
                <td>${list[i].identityCard}</td>
                <td>${list[i].openingDate}</td>
                <td>${list[i].depositAmount}</td>
                <td><button onclick="update(${i})">Sửa</button></td>
                <td><button onclick="remove(${i})">Xóa</button></td>
            </tr>
        `;
    }
    document.getElementById("book-list").innerHTML = str;
}