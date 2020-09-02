$(document).ready(function() {

    var inicio = $('#inicio').offset().top,
        sobreNosotros = $('#sobre-nosotros').offset().top,
        servicios = $('#servicios').offset().top,
        nuestrosProfesionales = $('#nuestros-profesionales').offset().top,
        contacto = $('#contacto').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-inicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: inicio
        }, 500);
    });

    $('#btn-sobre-nosotros').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: sobreNosotros
        }, 500);
    });

    $('#btn-servicios').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicios
        }, 500);
    });

    $('#btn-nuestros-profesionales').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: nuestrosProfesionales
        }, 500);
    });

    $('#btn-contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });

    /* para arriba */
   /*  $('.ir-arriba').on('click', function() {
        $('html, body').animate({
            scrollTop: '0'
        }, 300);
    }); */

    /* $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideInDown(300);
        } else {
            $('.ir-arriba').slideInUp(300);
        }
    }); */




});