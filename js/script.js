var buy = document.getElementById("buy-btn");
var opdiv = document.getElementById('oldpricediv');
var pdiv = document.getElementById('pricediv');
var totaldiv = document.getElementById('totalpricediv');
var pbtn = document.getElementById('pricebtn');
var products = document.getElementById('product');
var allnames = document.querySelectorAll("#buy-btn");
var pname = document.querySelectorAll(".product-h2");

var pr = "" ;
var opr = "" ;
var total = 0;


allnames.forEach(
    function (item){
        item.onclick = function (){
            products.innerHTML += item.getAttribute("name") + ' + ';
            pr += item.getAttribute("price") + " + ";
            total += +( item.getAttribute("price"));
            opr += item.getAttribute("oldprice") + " + ";
            if( products.innerHTML !='' ){
                pbtn.style.display="block";
            }
        }
    }
)

pbtn.onclick = function(){
    pdiv.innerHTML = pr;
    opdiv.innerHTML = opr;
    totaldiv.innerHTML = total
}
