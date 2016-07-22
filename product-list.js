var display = getQueryString("display");

var containerElement = document.getElementById("product-list");
var searchElement = document.getElementById("product-search");
var displayListElement = document.getElementById("display-list");
var displayThumbnailsElement = document.getElementById("display-thumbnails");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
xhr.send();

var items = [];
function onDataLoad (e) {
  if (e.target.status == 200) {
    items = JSON.parse(e.target.response);
    render(items);
  }
}

function search (text) {
  var results = [];
  for (var i=0; i<items.length; i++) {
    if (items[i].name.toLowerCase().indexOf(text.trim().toLowerCase()) >= 0
    || items[i].price == text) {
      results.push(items[i]);
    }
  }
  render(results);
}

searchElement.addEventListener("keyup", function (e) {
  search(e.target.value);
  console.log(e);
});

displayListElement.addEventListener("click", function () {
  renderList (items);
});

displayThumbnailsElement.addEventListener("click", function () {
  renderThumbnails (items);
});

function render (list) {
  display == "list" ? renderList(list) : renderThumbnails(list);
}

function renderList (list) {
  containerElement.innerHTML = null;
  containerElement.className = "";
  for (var i=0; i<list.length; i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + list[i].id;
    a.innerText = list[i].name;
    item.appendChild(a);
    containerElement.appendChild(item);
  }
}

function renderThumbnails (list) {
  containerElement.innerHTML = null;
  containerElement.className = "products-thumbnail";
  containerElement.innerHTML = null;
  for (var i=0; i<list.length; i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + list[i].id;
    var img = document.createElement("img");
    img.src = list[i].image;
    var span = document.createElement("span");
    span.innerText = list[i].name;
    a.appendChild(img);
    a.appendChild(span);
    item.appendChild(a);
    containerElement.appendChild(item);
  }
}

function getQueryString (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
