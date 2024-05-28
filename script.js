(function ($) {
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };

    // Initialize the first item as active and set the background image
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
    );

    $(window).scroll(function () {
      var winHeight = $(this).height(); // Get the height of the viewport
      var winTop = $(this).scrollTop(); // Get the top scroll position
      var winBottom = winTop + winHeight; // Calculate the bottom scroll position of the viewport

      selectors.item.each(function () {
        var itemTop = $(this).offset().top; // Top position of the current item
        var itemBottom = itemTop + $(this).outerHeight(); // Bottom position of the current item

        // Check if the entire item is within the viewport
        if (itemTop >= winTop && itemBottom <= winBottom) {
          // Update background image to current item's image
          var imageUrl = $(this).find(selectors.img).attr("src");
          selectors.id.css("background-image", "url(" + imageUrl + ")");

          // Update active class
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();
