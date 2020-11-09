// $(function() {// équivaut à $(document).ready(function() {});
//     $('#myImage').mouseenter(function(){

//     $(this).css("width", "700px"); //On met la largeur à 700px
//     $(this).css("height", "350px");//On met la hauteur à 350px
// });
// $('#myImage').mouseleave(function(){

//     $(this).css("width", "318px"); //On met la largeur à 318px
//     $(this).css("height", "159px");//On met la hauteur à 159px
// });

// équivaut à ça aussi:
$("document").ready(function () {
    $("#myImage").hover(
        function () {
            $(this).css("width", "700px", "height", "350px");
        },
        function () {
            $(this).css("width", "318px", "height", "159px");
        }
    )
});