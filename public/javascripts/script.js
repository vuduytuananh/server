

$(document).ready(function(){
  // class="menu-item-hover"
  $(".menu-item-hover").hover(function(){
    $(this).addClass("hovered-menu");
  },function(){
    $(this).removeClass("hovered-menu");
  });


  function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

});
