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

currentItem = $(".current-item");
if (currentItem[0]) {
  currentItem.css({
    "width": currentItem.width(),
    "left": currentItem.position().left
  });
}

$("#header a").hover(
  // ホバー時
  function(){
    // ホバーしているメニューの幅と左位置に変更
    $("#slide-line").css({
      "width": $(this).width(),
      "left": $(this).position().left
    });
  },
  // ホバーが外れたとき
  function(){
    // カレントメニューがある場合
    if (currentItem[0]) {
      // カレントメニューに下線を戻す
      $("#slide-line").css({
        "width": currentItem.width(),
        "left": currentItem.position().left
      });
    }
    // カレントメニューがない場合
    else {
      // 下線を消す
      $("#slide-line").width(0);
    }
  }
 );
