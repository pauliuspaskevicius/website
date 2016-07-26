$(document).ready(function(){
  $('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1]
		}
	});
});

var id = getQueryString("id") - 1;

var productName = document.getElementById("product-name");
var productDescription = document.getElementById("product-desc");
var productImage = document.getElementById("product-img");
var productPrice = document.getElementById("product-price");
var productPriceOld = document.getElementById("product-price-old");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
//xhr.send();

//var items = [];
var items = [
  {"id": 1, "name": "DC Media blitz snowboard 150CM", "price": 460, "description": "Make sure to have the cameras rolling because the DC Media Blitz Snowboard is back for another season of mountainous destruction!", "image": "product1.jpg"},
  {"id": 2, "name": "DC Tone snowboard 149CM", "price": 620, "description": "A stiff flex paired with a traditional camber profile and lightweight core provides an extra poppy and responsive platform for pro-level progression. ", "image": "product2.jpg"},
  {"id": 3, "name": "DC Omega snowboard 157CM", "price": 770, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product3.jpg"},
  {"id": 4, "name": "BURTON Lift snowboard 160CM", "price": 730, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product4.jpg"},
  {"id": 5, "name": "BURTON Chile snowboard 149CM", "price": 710, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product5.jpg"},
  {"id": 6, "name": "DC Fick snowboard 156CM", "price": 450, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product6.jpg"},
  {"id": 7, "name": "DC PBJ snowboard 149CM", "price": 880, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product7.jpg"},
  {"id": 8, "name": "DC MLF snowboard 157CM", "price": 560, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product8.jpg"},
  {"id": 9, "name": "DC ALPHA snowboard 156CM", "price": 340, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product9.jpg"},
  {"id": 10, "name": "DC SuperNova snowboard 155CM", "price": 560, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product10.jpg"},
  {"id": 11, "name": "DC Nova snowboard 149CM", "price": 600, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product11.jpg"},
  {"id": 12, "name": "DC TripleStrike snowboard 159CM", "price": 640, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product12.jpg"},
  {"id": 13, "name": "DC Boom snowboard 161CM", "price": 740, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product13.jpg"},
  {"id": 14, "name": "DC Bravo snowboard 148CM", "price": 835, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product14.jpg"},
  {"id": 15, "name": "DC Supernatant snowboard 151CM", "price": 428, "description": "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", "image": "product15.jpg"}
];
render(items);

function onDataLoad (e) {
  if (e.target.status == 200) {
    items = JSON.parse(e.target.response);
    render();
  }
}

function render () {
  var item = items[id];
  try {
    productName.innerText = item.name;
    productDescription.innerText = item.description;
    productPrice.innerText = "$" + item.price;
    $("#product-img-link").attr("href", item.image);
    $("#product-img").attr("src", item.image);
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
