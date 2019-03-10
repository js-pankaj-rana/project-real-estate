$(document).ready(function(){

    $('.select-opt').on('click', function(){
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    })
    $('.form-row').find('li').on('click', function(){
        $(this).parent().siblings('.select-opt').val( $(this).text() );
        $(this).addClass('active').siblings().removeClass('active');
    })

    $(window).scroll(function(){
        var scrT = $(this).scrollTop();
        
    })
    
})