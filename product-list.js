var display = getQueryString("display");

var container = document.getElementById("product-list");
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
