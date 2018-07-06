$(document).ready(function() {

        var GET_PARAM = function(name) {
            return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
        };

    var i = GET_PARAM('product_id');
    var myProduct = catalog[i];


    console.log(i);



    var html = '<div class="col-12">\
    <h4>' +myProduct.name+'<h4>\
    <ul class="bxslider">\
    <li>\
    <img class="card-img-top m-auto mw-50"  src="' +myProduct.pictures[0] + '" alt="'+ [i] +'">\
    </li>\
    <li>\
    <img class="card-img-top m-auto mw-50"  src="' +myProduct.pictures[1] + '" alt="'+ [i] +'">\
    </li>\
    <li>\
    <img class="card-img-top m-auto mw-50" src="' +myProduct.pictures[2] + '" alt="'+ [i] +'">\
    </li>\
    </ul>\
    </div>\
    <div class="col-12">\
    <section>\
    <p>' +myProduct.price + '€</p>\
    <h4>Description</h4>\
    <p>' +myProduct.description +'</p>\
    </section>\
    <button type="button" name="button">Acheter</button>\
    </div>\
    <div class="col-12">\
    <h4>Caractéristiques</h4>\
    <ul>\
    <li>fzqr fcezqsfccaz fezqsvcseq dzefqg  fezsgv</li>\
    <li>fzqr fcezqsfccaz fezqsvcseq dzefqg  fezsgv</li>\
    <li>fzqr fcezqsfccaz fezqsvcseq dzefqg  fezsgv</li>\
    <li>fzqr fcezqsfccaz fezqsvcseq dzefqg  fezsgv</li>\
    <li>fzqr fcezqsfccaz fezqsvcseq dzefqg  fezsgv</li>\
    <li>fzqr fcezqsfccaz fezqsvcseq dzefqg  fezsgv</li>\
    </ul>\
    </div>'

    $("#cadre").append(html)


});
