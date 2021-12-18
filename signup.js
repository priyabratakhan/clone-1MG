document.querySelector("#login").addEventListener("click", function () {
    window.location.href = "login.html";
})
document.querySelector("#home").addEventListener("click", function () {
    window.location.href = "nav.html";
})
document.querySelector("#covid").addEventListener("click", function () {
    window.location.href = "product.html";
})

var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
document.querySelector("button").addEventListener("click",function () {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var mobile = document.querySelector("#mobile").value;
    var password = document.querySelector("#pass").value;
    
    var userCred = {
        name: name,
        email: email,
        mobile: mobile,
        password: password
    };
    userData.push(userCred);
    localStorage.setItem("userDatabase", JSON.stringify(userData));

    alert("Thanks for registered");

})