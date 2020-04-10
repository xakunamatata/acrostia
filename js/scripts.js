$('.nav-burger').click(function(){
    $(this).toggleClass('burger-close');
    $('.nav-menu').toggleClass('nav-menu-open');
})

// gallery

$('#portfolio').lightGallery({
    thumbnail:true,
    animateThumb: false,
    showThumbByDefault: false
}); 

