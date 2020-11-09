$(function () {

    $("#show").click(function () { //Lorsque le bouton de la souris est pressé au dessus de l'élément...
        $("p").show(); //Les éléments avec #show seront visibles
    })
});

$("#hide").click(function () { //Lorsque le bouton de la souris est pressé au dessus de l'élément...
    $("p").hide(); //Les éléments avec #hide seront invisibles
});