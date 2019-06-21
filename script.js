$(function() {
  var h = $(window).height();
  $('#main-contents').css('display','none');
  $('#loader-bg ,#loader').height(h).css('display','block');
});

$(window).load(function () {
  $('#loader-bg').delay(900).fadeOut(800);
  $('#loader').delay(600).fadeOut(300);
  $('#main-contents').css('display', 'block');
});

// $("html,body").animate({scrollTop:$('#works-id').offset().top});

$('#scroll300').click(function() {
    var about = $('#about-id').offset().top;

    $('html, body').animate({scrollTop:about});

})

$('#top-menu').click(function() {
    var topmenu = $('#top-id').offset().top;

    $('html, body').animate({scrollTop:topmenu});

})

$('#about-menu').click(function() {
  console.log('about');
    var aboutmenu = $('#about-id').offset().top;

    $('html, body').animate({scrollTop:aboutmenu});

})

$('#works-menu').click(function() {
    var worksmenu = $('#works-id').offset().top;

    $('html, body').animate({scrollTop:worksmenu});

})
