$(document).ready(function(){
    $("#nav-toggle").click(function(){
        $("#nav-menu").addClass('show-menu')
    });
    $("#nav-close").click(function(){
        $("#nav-menu").removeClass('show-menu')
    });

    $(window).scroll(function() {
        $("#header").toggleClass('blur-header', $(this).scrollTop() >= 50);

        $("")
    });
});