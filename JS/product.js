const products = [
    {
      name: "Iphone 14 Pro Mã 256GB",
      img: "assets/img/phone.png",
      price: 1349
    },
    {
      name: "Samsung S23 Ultra 256GB",
      img: "assets/img/phone.png",
      price: 1089
    },
    {
      name: "Xiaomi Redmi Note 9 Pro 512GB",
      img: "assets/img/phone.png",
      price: 1000
    },
    {
      name: "Lenovo L78 256GB",
      img: "assets/img/phone.png",
      price: 710
    },
    {
      name: "Ipad Pro M1 11'' 128GB",
      img: "assets/img/phone.png",
      price: 999
    },
    {
      name: "ASUS ZenBook UX505",
      img: "assets/img/laptop.png",
      price: 929
    },
    {
      name: "LG Gram 2023 17''",
      img: "assets/img/laptop.png",
      price: 1049
    },
    {
      name: "DELLXPS 13 9315(2022)",
      img: "assets/img/laptop.png",
      price: 1049
    }
];

var listProductTable = document.querySelector('#main-product .listProduct-body');
for(let i in products){
    listProductTable.innerHTML += `
        <div class="productItem">
            <img src="${products[i].img}" alt="">
            <p>${products[i].name}</p>
            <span>$${products[i].price}</span>
        </div>                            
    `;
}
var listProduct = listProductTable.querySelectorAll('.productItem');
for(let i in listProduct){
    listProduct[i].addEventListener('click',e => {
        if(listProduct[i].classList.contains('selectProductItem')){
            listProduct[i].classList.remove('selectProductItem');
        }else{
            listProduct[i].classList.add('selectProductItem');
        }
    })
}