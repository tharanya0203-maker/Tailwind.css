var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");
var closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0";
});

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%";
});

// product js functionality
var productContainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll("div");

search.addEventListener("input", function () {

    var enteredValue = this.value.toUpperCase();

    for (var count = 0; count < productList.length; count++) {

        var productName = productList[count].textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});
