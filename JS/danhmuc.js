$(document).ready(function () {
    $("#btn-page1").click(function () {
        $(".page-2").hide();
        $(".page-3").hide();
        $(".page-1").show();
        $("#btn-page2").removeClass("active");
        $("#btn-page3").removeClass("active");
        $(this).addClass("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $("#btn-page2").click(function () {
        $(".page-1").hide();
        $(".page-3").hide();
        $(".page-2").show();
        $("#btn-page1").removeClass("active");
        $("#btn-page3").removeClass("active");
        $(this).addClass("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $("#btn-page3").click(function () {
        $(".page-1").hide();
        $(".page-2").hide();
        $(".page-3").show();
        $("#btn-page1").removeClass("active");
        $("#btn-page2").removeClass("active");
        $(this).addClass("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $("#btn-whiteChoco").click(function(){
        $("#btn-whiteChoco").addClass("active");
        $("#btn-dark").removeClass("active");
    })

    $("#btn-darkChoco").click(function () {
        $("#btn-darkChoco").addClass("active");
        $("#btn-whiteChoco").removeClass("active");
    })
});