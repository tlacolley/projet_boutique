$(document).ready(function() {



    var html = '<div class="col-sm-12 col-md-7">\
        <div class="row">\
            <div class="col-12">\
                <div class="row flex-nowrap">\
                    <div class="col-sm-4 ">\
                        <img src="'+catalog[i].thumb+'" alt="product">\
                    </div>\
                    <div class="col-sm-8">\
                        <h4>' +myProduct.name+'</h4>\
                        <p>' +myProduct.description+'</p>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="col-6">\
                        <form>\
                            <h4>Quantité</h4>\
                            <select class="" name="">'
                            for (var j = 0; j < catalog[i].quantity; j++) {
                                $("select").append("<option>"+j+"</option>")
                            }
                            '</select>\
                        </form>\
                    </div>\
                    <div class="col-6">\
                        <h4>Prix</h4>\
                        <p>'+catalog[i].price+'</p>\
                    </div>\
                </div>\
            </div>\
            </div>'

            $("#panier").append(html)
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// <div class="row">
//     <div class="col">
//         <h4>Récap</h4>
//         <ul>
//             <li>Article</li>
//             <li>Article</li>
//             <li>Article</li>
//         </ul>
//         <p>total :</p>
//         <button type="button" name="button">Valider</button>
//     </div>
// </div>




















});
