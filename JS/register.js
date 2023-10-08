var username = document.getElementById('username');
var usernameError = document.querySelector('.username-error');

var address = document.getElementById('address');
var addressError = document.querySelector('.address-error');

var phone = document.getElementById('phone');
var phoneError = document.querySelector('.phone-error');

var deliveryDate = document.getElementById('deliveryDate');
var deliveryDateError = document.querySelector('.deliveryDate-error');

var email = document.getElementById('email');
var emailError = document.querySelector('.mail-error');

var registerBtn = document.getElementById('registerProduct');
var deleteBtn = document.getElementById('deleteCustomerData');

var errorMessage = document.getElementsByClassName('errorMessage');
var inputText = document.getElementsByClassName('inputText');

var customerTable = document.querySelector('#main-list-customer .customer-table');
var customerTableTitle = `
    <tr class="title-table-register">
        <th>Họ Tên</th>
        <th>Giới Tính</th>
        <th>Địa Chỉ</th>
        <th>Ngày Giao</th>
        <th>Sản Phẩm</th>
    </tr>
`;
var customerTableData = [
    {
      name: "Nguyễn Thị A",
      gender: "Nữ",
      address: "TP.Hồ Chí Minh",
      deliveryDate: "07/10/2023",
      products: [
        "LG Gram 2023 17''",
        "iPad Pro M1 11'' 128GB"
      ]
    },
    {
      name: "Trần Thị C",
      gender: "Nữ",
      address: "TP.Cần Thơ",
      deliveryDate: "01/11/2023",
      products: [
        "iPhone 14 Pro Mã 256GB"
      ]
    },
    {
      name: "Lê Văn E",
      gender: "Nam",
      address: "TP.Hà Nội",
      deliveryDate: "14/12/2023",
      products: [
        "DELL XPS 13 9315(2022)"
      ]
    }
];

function objectCustomerToColumn(object, index){
    let typeColumn = 'odd-row-register-table';
    if(index % 2 == 0){
        typeColumn = 'even-row-register-table';
    }
    let result = `
        <tr class="${typeColumn}">
            <td>${object.name}</td>
            <td>${object.gender}</td>
            <td>${object.address}</td>
            <td>${object.deliveryDate}</td>
    `;
    let temp = "";
    for(let i in object.products){
        temp += object.products[i];
        if(i != object.products.length - 1){
            temp += "; ";
        }
    }
    result += `
            <td>${temp}</td>
        </tr> 
    `;
    return result;
}
deleteBtn.addEventListener('click', e =>{
    customerTableData = [];
    customerTable.innerHTML = customerTableTitle;
    console.log('ok');
});
// init data for register table 
customerTable.innerHTML = customerTableTitle;
customerTableData.forEach((e,i)=>{
    customerTable.innerHTML += objectCustomerToColumn(e, i + 1);
})
function hideError(e){
    e.classList.add('display-none');
} 
function showError(e){
    e.classList.remove('display-none');
}

function deleteData(){
    console.log('ok');
}
deleteBtn.onclick = deleteData;
registerBtn.addEventListener('click',e => {
    let usernameValue = username.value.trim();  
    let addressValue = address.value.trim();
    let phoneValue = phone.value.trim();
    let deliveryDateValue = deliveryDate.value;
    let emailValue = email.value.trim();
    
    const phoneRegex = /^0\d{9}$/;
    const emailRegex = /^[\w-\.]+@([\w]+\.)+[\w]{2,4}$/;
    let now = new Date();
    let inputDate = new Date(deliveryDateValue);
    let trueFormat = true;
    
    if(usernameValue === ''){
        trueFormat = false;
        usernameError.innerHTML = `<span>*Họ và tên chưa được điền</span>`;
        showError(usernameError);
    }else if(usernameValue.split(' ').length == 1){
        trueFormat = false;
        usernameError.innerHTML = `<span>*Họ và tên chưa hợp lệ</span>`;
        showError(usernameError);
    }
    
    if(addressValue === ''){
        trueFormat = false;
        addressError.innerHTML = `<span>*Địa chỉ chưa được điền</span>`;
        showError(addressError);
    }else if(addressValue.split(' ').length == 1){
        trueFormat = false;
        addressError.innerHTML = `<span>*Địa chỉ chưa hợp lệ</span>`;
        showError(addressError);
    }
    
    if(phoneValue === ''){
        trueFormat = false; 
        phoneError.innerHTML = `<span>*Điện thoại chưa được điền</span>`
        showError(phoneError);
    }
    else if(!phoneRegex.test(phoneValue)){
        trueFormat = false; 
        phoneError.innerHTML = `<span>*Điện thoại chưa hợp lệ</span>`
        showError(phoneError);
    }
    
    if(emailValue === ''){
        trueFormat = false;
        emailError.innerHTML = `<span>*Email chưa được điền</span>`
        showError(emailError);
    }else if(!emailRegex.test(emailValue)){
        trueFormat = false;
        emailError.innerHTML = `<span>*Email chưa hợp lệ</span>`
        showError(emailError);
    }
    
    if(deliveryDateValue === ''){
        trueFormat = false;
        deliveryDateError.innerHTML = `<span>*Ngày giao hàng chưa được điền</span>`
        showError(deliveryDateError);
    }else if(inputDate < now){
        trueFormat = false;
        deliveryDateError.innerHTML = `<span>*Ngày giao hàng không được trước ngày hiện tại</span>`
        showError(deliveryDateError);
    }
});

for(let i in inputText){
    let temp = inputText[i];
    temp.addEventListener('input',e=>{
        hideError(errorMessage[i]);
    });
}