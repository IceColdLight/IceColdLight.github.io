$(document).ready(function () {

    var menuOpen = false;

    // Trigger event listener (this time with jquery)

    $("#floating_btn_trigger").click(function () {
        // Animate menu icon
        $(".ph-list").toggleClass("open_rotate");

        // Logic
        if (menuOpen) {
            menuOpen = false;
            closeMenu();
        } else {
            menuOpen = true;
            openMenu();
        }
    });

    // Options event listener

    var liked = false;
    $(".floating_btn_option").first().click(function () {
        if(liked == false){
            liked = true;
            $(this).css({ color: "red" });
        } else {
            liked = false;
            $(this).css({ color: "black" });
        }
    });

    $(".floating_btn_option").last().click(function () {
        document.location.href = "../index.html";
    });

    // Functions

    var options = $(".floating_btn_option");
    var animOptions = { duration: 450, easing: "easeInOutQuint" };

    function openMenu() {
        options.each(function (index, val) {
            $(this).animate({ bottom: (index + 1) * 75 + 'px', opacity: 1 }, animOptions);
        });
    }

    function closeMenu() {
        options.each(function (index, val) {
            $(this).animate({ bottom: '0px', opacity: 0 }, animOptions);
        });
    }

});