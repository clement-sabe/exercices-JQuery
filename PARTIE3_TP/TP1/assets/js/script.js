$(document).ready(function(){
    //Déclaration de ma variable countClicks qui est égale à 0
    var countClicks = 0;
    
    //Déclaration de ma variable answer qui est un nombre random entre 1 et 100
    var answer = Math.floor((Math.random() * 100) + 1);

    /*Fonction qui s'éxécute au clic sur le bouton:*/
       $('#button').click(function(){
        if(($('#number').val() < 0) || ($('#number').val() > 100)){
            $('#moreLess').text('On avait dit entre 0 et 100!');    
            countClicks++; //SI la valeur de l'input est inférieure à 0 OU SI elle est supérieure à 100: afficher 'On avait dit entre 0 et 100!' et ajouter 1 à la variable countClicks
        } else if ($('#number').val() > answer){
            $('#moreLess').text('C\'est moins...');
            countClicks++; //    SINON SI la valeur de l'input est supérieure à la réponse: afficher 'C'est moins' et ajouter 1 à la variable countClicks

        } else if ($('#number').val() < answer) {
            $('#moreLess').text('C\'est plus...');
            countClicks++; //SINON SI la valeur de l'input est inférieure à la réponse: afficher 'C'est plus' et ajouter 1 à la variable countClicks 

        }
        else if ($('#number').val() == answer){
            countClicks++;
            $('#button').css('display', 'none');
            $('#title').css('display', 'none');
            $('#subtitle').css('display', 'none');
            $('#number').css('display', 'none');
            $('#moreLess').css('font-size', '40px', 'margin-top', '250px', 'width', '100%');
            $('#moreLess').text('Bravo!\nAprès '+ countClicks +' essais,\nTu as trouvé!!');
            $('.container-fluid').css('background-image', 'url(assets/images/mario.gif)');
            $('.container-fluid').css('border', '2px solid orangered');
            $('#replay').css('visibility', 'visible','margin-top', '250px');
    
} //SINON SI la valeur de l'input est égale à la réponse: ajouter 1 à la variable countClicks 
        else{
            alert('Erreur'); // SINON afficher une boîte de dialogue 'erreur'
        }
        $('#number').val('')
    }); 
});