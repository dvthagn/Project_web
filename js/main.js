// js for index.html

// if($('.typeTicket :selected').val ==1){
//     $('.dateNone').css('display', 'none');
// }

$('.typeTicket').on('change', function(){
    let selectedItem = $('.typeTicket').val();
    if(selectedItem==1){
        $('.dateNone').hide();
        $('.flightReturn').hide();
    }else{
        $('.dateNone').show();
        $('.flightReturn').show();
    }
});


$('.show-detail').click(function(){
    console.log($(this).val());
    
    let clickItem=$('.flight-detail-container').css('display');
    if(clickItem){
        $('.flight-detail-container').css('display', 'block');
    }
    if(clickItem=="block"){
        $('.flight-detail-container').css('display', 'none');
    }
})

$('.fare-option').click(function(){
    console.log($(this)[0].attr('class'));
    // $(this).attr('fare-option-id').addClass('fare-option-active');
    //$(this).attr('fare-option-id')
});
