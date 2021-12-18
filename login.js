document.querySelector("#signup").addEventListener("click", function () {
    window.location.href = "signup.html";
})
document.querySelector("#home").addEventListener("click", function () {
    window.location.href = "nav.html";
})
document.querySelector("#covid").addEventListener("click", function () {
    window.location.href = "product.html";
});

var regdUsers = JSON.parse(localStorage.getItem("userDatabase"));
document.querySelector("button").addEventListener("click",function () {
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#pass").value;

    for (var i = 0; i < regdUsers.length; i++){
        if (regdUsers[i].email == email && regdUsers[i].password == password) {
            alert("Logged in Successfully");
            window.location.href = "cart.html";
            break;
        }
        else {
            alert("Invalid Users. Please Sign Up");
            break;
        }
    }
})