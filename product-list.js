var display = getQueryString("display");

var container = document.getElementById("product-list");
var displayList = document.getElementById("display-list");
var displayThumbnails = document.getElementById("display-thumbnails");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
xhr.send();

function onDataLoad (e) {
  alert(e);
  console.log(e);
}

var items = [];
items.push({id: 1, name: "DC media blitz snowboard 150CM", price: 460, description: "Make sure to have the cameras rolling because the DC Media Blitz Snowboard is back for another season of mountainous destruction!", image: "product1.jpg"});
items.push({id: 2, name: "DC tone snowboard 149CM", price: 620, description: "A stiff flex paired with a traditional camber profile and lightweight core provides an extra poppy and responsive platform for pro-level progression. ", image: "product2.jpg"});
items.push({id: 3, name: "DC supernatant snowboard 154CM", price: 770, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product3.jpg"});
items.push({id: 4, name: "DC supernatant snowboard 154CM", price: 730, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product4.jpg"});
items.push({id: 5, name: "DC supernatant snowboard 154CM", price: 710, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product5.jpg"});
items.push({id: 6, name: "DC supernatant snowboard 154CM", price: 450, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product6.jpg"});
items.push({id: 7, name: "DC supernatant snowboard 154CM", price: 880, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product7.jpg"});
items.push({id: 8, name: "DC supernatant snowboard 154CM", price: 560, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product8.jpg"});
items.push({id: 9, name: "DC supernatant snowboard 154CM", price: 340, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product9.jpg"});
items.push({id: 10, name: "DC supernatant snowboard 154CM", price: 560, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product10.jpg"});
items.push({id: 11, name: "DC supernatant snowboard 154CM", price: 600, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product11.jpg"});
items.push({id: 12, name: "DC supernatant snowboard 154CM", price: 640, description: "Stack some shots and stomp landing after landing this winter with the DC Media Blitz Snowboard.", image: "product12.jpg"});

// Set product display (default: thumbnails)
display == "list" ? renderList() : renderThumbnails();

displayList.addEventListener("click", function () {
  renderList ();
});

displayThumbnails.addEventListener("click", function () {
  renderThumbnails ();
});

function renderList () {
  container.innerHTML = null;
  container.className = "";
  for (var i=0; i<items.length ;i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + items[i].id;
    a.innerText = items[i].name;
    item.appendChild(a);
    container.appendChild(item);
  }
}

function renderThumbnails () {
  container.innerHTML = null;
  container.className = "products-thumbnail";
  container.innerHTML = null;
  for (var i=0; i<items.length ;i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + items[i].id;
    var img = document.createElement("img");
    img.src = items[i].image;
    var span = document.createElement("span");
    span.innerText = items[i].name;
    a.appendChild(img);
    a.appendChild(span);
    item.appendChild(a);
    container.appendChild(item);
  }
}

function getQueryString (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
