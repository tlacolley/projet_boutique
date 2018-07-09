$(document).ready(function () {


// --------------------------*-SLIDER SELECTION
var selection = [catalog[42],catalog[69],catalog[51],catalog[27],catalog[31],catalog[13]];



//
// var mainSelection = ' <div class="col-12">\
//                 <h4>Pourrait vous intéresser</h4>\
//                 <ul class="bxslider">'
//                         cpt=0
//                       for (var i = 0; i < 3; i++) {
//
//                             mainSelection+= '<li>\
//                                 <div class="row">'
//                                      for (var j = 0; j < 2; j++) {
//                                         mainSelection+= '<div class="col-6">\
//                                             <article class="p-0">\
//                                                 <div class="card">\
//                                                     <h5 class="card-title">'+selection[cpt++].name+'</h5>\
//                                                     <img class="card-img-top m-auto mw-50" src="https://picsum.photos/100/150/?random" alt="pic">\
//                                                     <div class="card-body p-0">\
//                                                         <p class="card-text">vw  eebvwvfvwe co</p>\
//                                                         <p>'+catalog[i+j].price+'€</p>\
//                                                         <button type="button" name="button"> Add Cards</button>\
//                                                     </div>\
//                                                 </div>\
//                                             </article>\
//                                         </div>'
//
//                                    }
//
//                                 '</div>\
//                             </li>'
//                     }
//
//                 '</ul>\
//             </div>';
//
//
//
// $("main .container-fluid ").append(mainSelection);




var mainSelection = ' <div class="col-12">\
                <h4>Pourrait vous intéresser</h4>\
                <ul class="bxslider">'

                      for (var i = 0; i < selection.length; i++) {


                          if( i%2 ==0 ){
                              mainSelection+= '<li>\
                              <div class="row">'

                          }

                                        mainSelection+= '<div class="col-6">\
                                            <article class="p-0">\
                                                <div class="card">\
                                                    <h5 class="card-title">'+selection[i].name+'</h5>\
                                                    <ul class="bxslider02">'


                                                    for (var j = 0; j < selection[i].pictures.length; j++) {
                                                    mainSelection+= '<li>\
                                                        <img class="card-img-top m-auto mw-50" src="'+selection[i].pictures[j]+'" alt="pic'+selection[i].name+j+'">\
                                                         </li>'


                                                    }
                                                mainSelection+=  '</ul>\
                                                <div class="card-body p-0">\
                                                        <p class="card-text">vw  eebvwvfvwe co</p>\
                                                        <p>'+catalog[i].price+'€</p>\
                                                        <button type="button" name="button"> Add Cards</button>\
                                                            <button type="button" name="button" id="btn_see'+i+'"> See Product</button>\
                                                    </div>\
                                                </div>\
                                            </article>\
                                        </div>'
                                    if ( i%2 == 1 ){

                                       '</div>\
                                       </li>'

                                   }

                    }

                '</ul>\
            </div>';



$("main .container-fluid ").append(mainSelection);




$('.bxslider02').bxSlider({

    auto: true,
    stopAutoOnClick: true,
    easing: "linear",
    controls: false,
    pause: 2000
});

$('.bxslider').bxSlider({

});











































});
