$(document).ready(function () {
    $("#btn-page1").click(function () {
        $(".page-2").hide();
        $(".page-1").show();
        $("#btn-page2").removeClass("active");
        $(this).addClass("active");
        window.scrollTo({ top: 1000, behavior: "smooth" });
    });

    $("#btn-page2").click(function () {
        $(".page-1").hide();
        $(".page-2").show();
        $("#btn-page1").removeClass("active");
        $(this).addClass("active");
        window.scrollTo({ top: 1000, behavior: "smooth" });
    });

});