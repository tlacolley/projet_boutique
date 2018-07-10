$(document).ready(function() {


    var panier = {};




    // for (var i = 0; i < catalog.length; i++) {
    // var html = '<div class="col-sm-12 col-md-7">\
    //     <div class="row">\
    //         <div class="col-12">\
    //             <div class="row flex-nowrap">\
    //                 <div class="col-sm-4 ">\
    //                     <img src="'+catalog[i].thumb+'" alt="product">\
    //                 </div>\
    //                 <div class="col-sm-8">\
    //                     <h4>' +catalog[i].name+'</h4>\
    //                     <p>' +catalog[i].description+'</p>\
    //                 </div>\
    //             </div>\
    //             <div class="row">\
    //                 <div class="col-6">\
    //                     <form class="panierQte">\
    //                         <h4>Quantité</h4>\
    //                         <select class="" name="">'
    //                         for (var j = 0; j < catalog[i].quantity; j++) {
    //                             $("select").append("<option>"+j+"</option>")
    //                         }
    //                         '</select>\
    //                     </form>\
    //                 </div>\
    //                 <div class="col-6">\
    //                     <h4>Prix</h4>\
    //                     <p>'+catalog[i].price+'</p>\
    //                 </div>\
    //             </div>\
    //         </div>\
    //         </div>'
    //
    //         $("#panier").append(html)
    //             }
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



    function savePanier(){
        var panier_json = JSON.stringify(panier);
        sessionStorage.setItem("panier",panier_json);

    }

    function loadPanier(){
        var panier_json = sessionStorage.getItem("panier");
        panier = JSON.parse(panier_json) || {};
    }


    function displayCart(){
        $("#panierUl").html("")
        var total = $("<p class='total'>")
        var addPrice = 0
        for(productId in panier){
        $("#panierUl").append($(`<li>${catalog[productId].name} x ${panier[productId]} --------- ${catalog[productId].price}€ x ${panier[productId]} = ${catalog[productId].price*panier[productId]}€ </li>`))

        addPrice += catalog[productId].price*panier[productId]


        }

        $(".quezac").append(total.html(addPrice))

    }


    loadPanier();
    console.log(panier);
    displayCart()
    $(".btn_add").click(function(){
        productId = $(this).val()
        if(panier[productId]){
            panier[productId]++
        }
        else{
            panier[productId] = 1
        }
        savePanier();
        displayCart()
        console.log(panier);


    })












});
