$(document).ready(function(){

});

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

$("#product-search").on("keyup", function (e) {
  search($(this).val());
})

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
  $("#product-list").html(null);
  $("#product-list").attr("class", "");
  for (var i=0; i<list.length; i++) {
    $("#product-list").append("<li><a href='product.html?id=" + list[i].id + "'>" + list[i].name + "</a></li>");
  }
}

function renderThumbnails (list) {
  $("#product-list").html(null);
  $("#product-list").attr("class", "products-thumbnail");
  for (var i=0; i<list.length; i++) {
    $("#product-list").append("<li><a href='product.html?id=" + list[i].id + "'><img src='" + list[i].image + "'><span>" + list[i].name + "</span></a></li>");
  }
}

function getQueryString (field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
};
