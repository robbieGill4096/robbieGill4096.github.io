//turn the computer off or on depending on its current state
$('#computer').click(function() {
    //if current state is off turn computer on
    if ($(this).attr('src') === 'computer_off.gif'){
        
        $(this).attr("src", "computer_on.gif");
    }
    //if current state is on turn computer off
    else{
        $(this).attr("src", "computer_off.gif");
    }
    

});