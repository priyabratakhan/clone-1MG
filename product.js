document.querySelector("#login").addEventListener("click", function () {
    window.location.href = "login.html";
})
document.querySelector("#signup").addEventListener("click", function () {
    window.location.href = "signup.html";
})
document.querySelector("#home").addEventListener("click", function () {
    window.location.href = "nav.html";
})
// document.querySelector("#covid").addEventListener("click", function () {
//     window.location.href = "product.html";
// })

var data = [{
    image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601190642/cropped/bnnkb6r0hzixoxq8naqg.png",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 517,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1617710521/padyzhy6mcjdfebkvzie.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 128,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1614658205/c2gzcmk755v7vajnqpvl.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 148,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1610953036/urczie6pparx8gmqju05.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 68,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601923806/j2a5yqn1zohbjiw87xzm.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 99,
    },
{
    image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631893673/wvl115zyvhgv9hmn5eby.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 361,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601227281/cropped/pp6czhf8zt4rjpw4j1zb.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 533,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637906497/hspydxm0bi6xkbfmyue7.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 194,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600204507/cropped/jczeebil5hqmqtawsl13.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 389,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600710983/cropped/mgomlhxfcmkv8rqkwlgb.png",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 429,
    },
{
    image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601190642/cropped/bnnkb6r0hzixoxq8naqg.png",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 98,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1617710521/padyzhy6mcjdfebkvzie.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 89,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1614658205/c2gzcmk755v7vajnqpvl.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 87,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1610953036/urczie6pparx8gmqju05.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 468,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601923806/j2a5yqn1zohbjiw87xzm.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 250,
    },
{
    image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1631893673/wvl115zyvhgv9hmn5eby.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 139,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601227281/cropped/pp6czhf8zt4rjpw4j1zb.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 254,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637906497/hspydxm0bi6xkbfmyue7.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 99,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600204507/cropped/jczeebil5hqmqtawsl13.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 479,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600710983/cropped/mgomlhxfcmkv8rqkwlgb.png",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 245,
    },
{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601227281/cropped/pp6czhf8zt4rjpw4j1zb.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 158,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1637906497/hspydxm0bi6xkbfmyue7.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 262,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600204507/cropped/jczeebil5hqmqtawsl13.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 293,
},{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600710983/cropped/mgomlhxfcmkv8rqkwlgb.png",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 160,
    },{
image_url: "https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600204507/cropped/jczeebil5hqmqtawsl13.jpg",
    para1: "1mg Multivitamin Supreme, Zinc",
    para2: "bottle of 60 capsules",
    span1: "4.1 *",
    span2: "627 ratings",
    span3: "MRP",
    span4: 999,
    span5: 155,
    }];
localStorage.setItem("shoppingItems", JSON.stringify(data));
var main = document.createElement("div");
main.setAttribute("class", "health1");

data.map(function (elem) {
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

    div1.append(image, para1, para2, span1, span2, span3, span4, span5, butt);
    main.append(div1);

    document.querySelector("#data").append(main);
})