$(function () {

            $("#green").mouseenter(function () { //Lorsque le bouton VERT est survolé par la souris
                $("p").css("color", "green"); //"p" change de color en css et devient vert
                
            });

            $("#red").mouseenter(function () { //Lorsque le bouton ROUGE est survolé par la souris
                $("p").css("color", "red"); //"p" change de color en css et devient rouge
            });

            $("#blue").mouseenter(function () { //Lorsque le bouton BLEU est survolé par la souris
                $("p").css("color", "blue"); //"p" change de color en css et devient bleu
            });

            $("#green,#red,#blue").mouseleave(function () { //Lorsque les boutons ne sont plus survolés
                $("p").css("color", "black"); //"p" change de color en css et redevient noir
            });
        });