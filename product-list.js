var display = getQueryString("display");

var container = document.getElementById("product-list");
var search = document.getElementById("product-search");
var displayList = document.getElementById("display-list");
var displayThumbnails = document.getElementById("display-thumbnails");

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onDataLoad);
xhr.open("GET", "product-data.json");
xhr.send();

var items = [];
function onDataLoad (e) {
  if (e.target.status == 200) {
    items = JSON.parse(e.target.response);

    // Set product display (default: thumbnails)
    display == "list" ? renderList() : renderThumbnails();
  }
}

function search (text) {
  var results = [];
  for (var i=0; i<items.length; i++) {
    if (items[i].name == text) {
      results.push(items[i]);
    }
  }
  render(results);
}

search.addEventListener("keyup", function (e) {
  search(e.target.value);
  console.log(e);
});

displayList.addEventListener("click", function () {
  renderList (items);
});

displayThumbnails.addEventListener("click", function () {
  renderThumbnails (items);
});

function render (list) {
  display == "list" ? renderList(list) : renderThumbnails(list);
}

function renderList (list) {
  container.innerHTML = null;
  container.className = "";
  for (var i=0; i<list.length; i++) {
    var item = document.createElement("li");
    var a = document.createElement("a");
    a.href = "product.html?id=" + list[i].id;
    a.innerText = list[i].name;
    item.appendChild(a);
    container.appendChild(item);
  }
}

function renderThumbnails (list) {
  container.innerHTML = null;
  container.className = "products-thumbnail";
  container.innerHTML = null;
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
    container.appendChild(item);
  }
}

function getQueryString (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
