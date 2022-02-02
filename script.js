
//jquery for carousel pause and play buttons:

$(function(){
    $(".carousel").carousel({interval: 2000});
    $("#carouselPause").click(function(){
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});

//


