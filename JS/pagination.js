document.getElementById("show-button").addEventListener("click", function () {
    var hiddenSection = document.querySelector(".hidden-trending2");
    var hiddenSection1 = document.querySelector("#Trend");
    if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
        hiddenSection.style.display = "block"; // Hiển thị phần
        hiddenSection1.style.display = "none";
    }
});