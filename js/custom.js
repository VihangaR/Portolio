jQuery(document).ready(function($){

    var $toggle = $('.navbar-burger');
    var $menu = $('.navbar-menu');

    $toggle.click(function() {
        $toggle.toggleClass('is-active');
        $menu.toggleClass('is-active');
    });
});