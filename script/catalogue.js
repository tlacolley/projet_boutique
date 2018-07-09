$(document).ready(function () {

$('.bxslider').bxSlider();




var panier = {};

$(".container-fluid").append('<div class="row text-center">')

for (var i = 0; i < catalog.length; i++) {
    var html = '<div class="col-sm-6 col-md-4 col-lg-3">\
    <article class="p-0" id="art'+i+'">\
    <div class="card">\
    <a href="../produit.html?product_id='+i+'">\
    <h5 class="card-title text-center">'+catalog[i].name+'</h5>\
    <img class="card-img-top m-auto mw-50" src="'+catalog[i].thumb+'" alt="pic"></a>\
    <div class="card-body p-0">\
    <p class="card-text">'+catalog[i].description+'</p>\
    <p>'+catalog[i].price+'€</p>\
    <button type="button" value= '+i+' name="button" class="btn_add">Add Cards</button>\
    <button type="button" name="button" id="btn_see'+i+'"> See Product</button>\
    </div>\
    </div>\
    </article>'
    $("main .row").append(html)

        }


        function savePanier(){
            var panier_json = JSON.stringify(panier);
            sessionStorage.setItem("panier",panier_json);

        }
        function loadPanier(){
            var panier_json = sessionStorage.getItem("panier");
            panier = JSON.parse(panier_json);


        }

        loadPanier();
        console.log(panier);

        $(".btn_add").click(function(){
            productId = $(this).val()
            if(panier[productId]){
                panier[productId]++
            }
            else{
                panier[productId] = 1
            }
            savePanier();

            console.log(panier);


        })





});
