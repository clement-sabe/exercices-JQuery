$(function () {

    $("#green").click(function () { //Lorsque le bouton de la souris est pressé au dessus de l'élément...
        $("p").css("color", "green"); //"p" change de color en css et devient vert
    })
});

$("#red").click(function () { //Lorsque le bouton de la souris est pressé au dessus de l'élément...
    $("p").css("color", "red"); //"p" change de color en css et devient rouge
});

$("#blue").click(function () { //Lorsque le bouton de la souris est pressé au dessus de l'élément...
    $("p").css("color", "blue"); //"p" change de color en css et devient bleu
});