$(document).ready(function() {

    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

var i = GET_PARAM("produit_id")


    var html = '<div class="col-12">\
    <h4>' + catalog[i].name+'<h4>\
    <ul class="bxslider">\
    <li>\
    <img class="card-img-top m-auto mw-50"  src="' + catalog[i].pictures[0] + '" alt="'+ [i] +'">\
    </li>\
    <li>\
    <img class="card-img-top m-auto mw-50"  src="' + catalog[i].pictures[1] + '" alt="'+ [i] +'">\
    </li>\
    <li>\
    <img class="card-img-top m-auto mw-50" src="' + catalog[i].pictures[2] + '" alt="'+ [i] +'">\
    </li>\
    </ul>\
    </div>\
    <div class="col-12">\
    <section>\
    <p>' + catalog[i].price + '€</p>\
    <h4>Description</h4>\
    <p>' + catalog[i].description +'</p>\
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
