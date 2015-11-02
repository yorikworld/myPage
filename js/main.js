jQuery.noConflict();
jQuery( document ).ready(function( $ ) {

$( "#menu ul li a" ).on( "click", function() {
    $('#menu').find('li').removeClass('active');
    $( this ).parent('li').addClass('active');

});
});