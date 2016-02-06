$( document ).ready(function() {
   var charRemainder = 140;
    
    // text area click
    $("#new-tweet-thingy").click(function() {
        $(this).css("height","5em");
         $('#tweet-controls').css('display', 'block')
 });

    // text area typing
    $( "#new-tweet-thingy" ).keyup(function() {
        var tweetLength = $(this).val().length;
        $("#char-count").text(140 - tweetLength)
        
        if(tweetLength >= 130) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', '#999');
        }

        if(tweetLength > 140) {
            $('#tweet-submit').prop('disabled', true);
        } else {
            $('#tweet-submit').prop('disabled', false);
        }

});
    // Tweet Event
    $('#tweet-submit').click(function(event) {
        var tweet = $('#new-tweet-thingy').val();
        if(!tweet.length) return;
        var userName = "Paige Viehweg";

        var tweetHtml = '<div class="tweet">'
                        + '<div class="content">'
                        + '<img class="avatar" src="img/damenleeturks.jpg" />'
                        + '<strong class="fullname"></strong>'
                        + '<span class="username">' + userName + '</span>'
                        + '<p class="tweet-text">' + tweet + '</p>'
                        + '<div class="tweet-actions">'
                        + '<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>'
                        + '</div></div></div>';


        $('#stream').prepend(tweetHtml);
        $('#new-tweet-thingy').val('');
        $('#char-count').text(140);

    });

//hiding the tweet and retweet
    $('tweet').click(function() {
        $(this).find('.stats, .reply').slideDown(200);
        });


 // $('.tweet').hover(function () {
 //    $(this).find('tweet-actions').css('visibility', 'visable');  
 // }, function () {
 //    $(this).find('.tweet-actions').css('visibility', 'hidden');
 // }); 
// This would be better to do in css.. so that is how we did it. 


});