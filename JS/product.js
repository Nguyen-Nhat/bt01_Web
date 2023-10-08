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
        <div id="productItem${i}" class="productItem" draggable="true">
            <img src="${products[i].img}" alt="" draggable="false">
            <p>${products[i].name}</p>
            <span>$${products[i].price}</span>
        </div>                            
    `;
}
var ProductItems = document.querySelectorAll('#main-product .productItem');
for(let ProductItem of ProductItems){
  ProductItem.addEventListener('click', e=>{
    if(ProductItem.classList.contains('selectProductItem')){
      ProductItem.classList.remove('selectProductItem')
    }else {
      ProductItem.classList.add('selectProductItem')
    }
  })
}