$(document).ready(function () {

$('.bxslider').bxSlider();






$(".container-fluid").append('<div class="row text-center">')

for (var i = 0; i < catalog.length; i++) {
    var html = '<div class="col-sm-6 col-md-4 col-lg-3">\
    <article class="p-0">\
    <div class="card">\
    <a href="../produit.html?product_id='+ [i]'">\
    <h5 class="card-title text-center">'+ catalog[i].name +'</h5>\
    <img class="card-img-top m-auto mw-50" src="'+ catalog[i].thumb +'" alt="pic"></a>\
    <div class="card-body p-0">\
    <p class="card-text">'+ catalog[i].description +'</p>\
    <p>'+ catalog[i].price +'€</p>\
    <button type="button" name="button" id="btn_add'+ i +'">Add Cards</button>\
    <button type="button" name="button" id="btn_see'+ i +'"> See Product</button>\
    </div>\
    </div>\
    </article>'
    $("main .row").append(html)
    $("#btn_see"+i).click(function() {
        window.location.href="../produit.html?produit_id="+ [i]
    });

};


});
