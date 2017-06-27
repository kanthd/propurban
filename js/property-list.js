$('.btn-show-more').click( function (e) {
    e.stopPropagation();
    var $curr = $(".btn-show-more");
    var $prev = $curr.parent().parent();
    if ($prev.hasClass('active')) {
      if ($prev.find('tbody').hasClass('collapse-content')) {
          $prev.find('tbody').removeClass('collapse-content');
          $curr.children().removeClass('fa-angle-up').addClass('fa-angle-down');
      } else {
          $prev.find('tbody').addClass('collapse-content');
          $curr.children().removeClass('fa-angle-down').addClass('fa-angle-up');
      }
    }
});
