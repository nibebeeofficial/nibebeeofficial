$(document).ready(function() {
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });

});
$(document).ready(function() {

    function toggleTheme_() {
        updateIcon()
    }
    toggleTheme_();

    function updateIcon() {
        if ($(body).hasClass("dark")) {
            $("toggle-theme i").removeClass("fa-moon");
            $("toggle-theme i").addClass("fa-sun");
        } else {
            $("toggle-theme i").removeClass("fa-sun");
            $("toggle-theme i").addClass("fa-moon");
        }
    }
});