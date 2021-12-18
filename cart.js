document.querySelector("#logout").addEventListener("click", function () {
    window.location.href = "nav.html";
})

var products = JSON.parse(localStorage.getItem("shoppingItems"))
// console.log(products);
var cart = JSON.parse(localStorage.getItem("cartItems")) || [];
document.querySelector("h3").textContent = cart.length;
var main = document.createElement("div");
main.setAttribute("class", "health1");

products.map(function (elem) {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "health");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);

    var para1 = document.createElement("p");
    para1.textContent = elem.para1;
    var para2 = document.createElement("p");
    para2.textContent = elem.para2;
    var span1 = document.createElement("span");
    span1.setAttribute("class", "rate");
    span1.textContent = elem.span1;
    var span2 = document.createElement("span");
    span2.textContent = elem.span2;
    var span3 = document.createElement("span");
    span3.setAttribute("class", "mrp");
    span3.textContent = elem.span3;
    var span4 = document.createElement("span");
    span4.setAttribute("class", "less");
    span4.textContent = elem.span4;
    var span5 = document.createElement("span");
    span5.textContent = elem.span5;
    var butt = document.createElement("button");
    butt.textContent = "Add to cart";
    butt.addEventListener("click", function () {
        console.log(elem);
        addToCart(elem)
    })

    div1.append(image, para1, para2, span1, span2, span3, span4, span5, butt);
    main.append(div1);

    document.querySelector("#data").append(main);
})

function addToCart(elem) {
    cart.push(elem);
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

function handlePriceSort() {
    var selected = document.querySelector("#pricesort").value;
    console.log(selected);
    if (selected == "low") {
        products.sort(function (a, b) {
            return a.span5 - b.span5;
        });
    }
    if (selected == "high") {
        products.sort(function (a, b) {
            return b.span5 - a.span5;
        });
    }
    // console.log(products);
    document.querySelector(".health1").textContent = "";
    products.map(function (elem) {
    var div1 = document.createElement("div");
    div1.setAttribute("class", "health");
    var image = document.createElement("img");
    image.setAttribute("src", elem.image_url);

    var para1 = document.createElement("p");
    para1.textContent = elem.para1;
    var para2 = document.createElement("p");
    para2.textContent = elem.para2;
    var span1 = document.createElement("span");
    span1.setAttribute("class", "rate");
    span1.textContent = elem.span1;
    var span2 = document.createElement("span");
    span2.textContent = elem.span2;
    var span3 = document.createElement("span");
    span3.setAttribute("class", "mrp");
    span3.textContent = elem.span3;
    var span4 = document.createElement("span");
    span4.setAttribute("class", "less");
    span4.textContent = elem.span4;
    var span5 = document.createElement("span");
    span5.textContent = elem.span5;
    var butt = document.createElement("button");
    butt.textContent = "Add to cart";
    butt.addEventListener("click", function () {
        console.log(elem);
        addToCart(elem)
    })

    div1.append(image, para1, para2, span1, span2, span3, span4, span5, butt);
    main.append(div1);

    document.querySelector("#data").append(main);
})
}

document.querySelector("h3").addEventListener("click", function () {
    window.location.href = "checkout.html";
})