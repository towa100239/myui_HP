$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $("#navi").toggleClass('panelactive');
});

$("#navi").click(function(){
    $(".openbtn").removeClass('active');
    $("#navi").removeClass('panelactive');
});
