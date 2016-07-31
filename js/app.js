$(document).ready(function() {
    $('.ryu').mouseenter(function() {
            $('.ryu-still').hide();
            $('.ryu-ready').show();
        })
        .mouseleave(function() {
            $('.ryu-ready').hide();
            $('.ryu-still').show();
        })
        .mousedown(function() {
            // play hadouken sound  
            //where did playHadouken() function come from?
            playHadouken();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1020px' },
                500,
                //what does 'this' do?
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');
                });
            // $(.'hadouken').show();
            // animate it to the right of the screen
        })
        .mouseup(function() {
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        });
});
//keydown function isn't working
$(document).keydown(function(e) {
    if (e.keyCode == 88) {
        $('.ryu-still').hide();
        $('.ryu-cool').show();
    }
}).keyup(function(e) {
    if (e.keyCode == 88) {
        $('.ryu-cool').hide();
        $('.ryu-still').show();
    }
//when mouse is inside .ryu div and 'x' is
// pressed addt'l div appears bottom of page.
    // .off(){
    //     if (e.keyCode == 88) {
    //     $('.ryu-cool').show();
    //     $('.ryu-still').hide();
    //     }
    //}
});
//why isn't this function inside of .mousedown listener?
function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}