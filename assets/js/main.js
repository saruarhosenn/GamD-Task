(function ($) {
  "use strict";
  /* ====== Open & Close Mobile Menu ====== */
  $(".open-menu-btn").click(function () {
    $(".main-menu").addClass("open-menu");
  });
  $(".close-menu-btn").click(function () {
    $(".main-menu").removeClass("open-menu");
  });
  $(".link").click(function () {
    $(".main-menu").removeClass("open-menu");
  });

  /* ====== Open & Close Header Search Form ====== */
  $(".search-open-btn").click(function () {
    $(".search-overlay").addClass("open-search-overlay");
  });
  $(".search-close-btn").click(function () {
    $(".search-overlay").removeClass("open-search-overlay");
  });
})(jQuery);
