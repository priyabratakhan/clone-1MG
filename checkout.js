var checkout = JSON.parse(localStorage.getItem("cartItems"));
// console.log(checkout);

var main = document.createElement("div");
main.setAttribute("class", "health1");

var final = [];
checkout.map(function (elem) {
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
    final.push(checkout);
    // var butt = document.createElement("button");
    // butt.textContent = "Add to cart";
    // butt.addEventListener("click", function () {
    //     console.log(elem);
    //     addToCart(elem)
    // })

    div1.append(image, para1, para2, span1, span2, span3, span4, span5);
    main.append(div1);

    document.querySelector("#data").append(main);
})

document.querySelector("#next").addEventListener("click", function () {
    window.location.href = "payment.html"
})