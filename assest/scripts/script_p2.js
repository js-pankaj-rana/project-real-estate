$(document).ready(function(){

    $('.select-opt').on('click', function(){
        $(this).parent().toggleClass('active').siblings().removeClass('active');
    })
    $('.form-row').find('li').on('click', function(){
        $(this).parent().siblings('.select-opt').val( $(this).text() );
        $(this).addClass('active').siblings().removeClass('active');
    })

    $(window).scroll(function(){
        
        //getting viewport height;
        var screenHeight = $(window).height();
        // console.log(screenHeight);

        //getting current scroll Y;
        var scrOffsetY = $(this).scrollTop();
        console.log(scrOffsetY);

        

        var firstElementOffsetY = $('.effect:eq(0)').offset().top;
        
        //substract element page Y -
        var diffPageOffsetY = (firstElementOffsetY - screenHeight);
        

        if(scrOffsetY >= diffPageOffsetY  ){
            $('.effect:eq(0)').addClass('animate-left');
        }
        
    })

    $('.effect').scrollTop(function(){

           console.log('Scroll Y', $(this).offset().top);

           if($(this).hasClass('effect-left')){
               $(this).addClass('animate-left')
           }
           else if($(this).hasClass('effect-right')){
            $(this).addClass('animate-right')
            }
            else if($(this).hasClass('effect-top')){
                $(this).addClass('animate-top')
            }
            else if($(this).hasClass('effect-bottom')){
                $(this).addClass('animate-bottom')
            }

   })
    
})