var id = getQueryString("id") - 1;

var productName = document.getElementById("product-name");
var productDescription = document.getElementById("product-desc");
var productImage = document.getElementById("product-img");
var productPrice = document.getElementById("product-price");
var productPriceOld = document.getElementById("product-price-old");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
xhr.send();

var items = [];
function onDataLoad (e) {
  if (e.target.status == 200) {
    items = JSON.parse(e.target.response);
    renderItem();
  }
}

function renderItem () {
  var item = items[id];
  try {
    productName.innerText = item.name;
    productDescription.innerText = item.description;
    productPrice.innerText = "$" + item.price;
    productImage.src = item.image;
  } catch (e) {
    productName.innerText = "Product not found";
  }
}

function getQueryString (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
