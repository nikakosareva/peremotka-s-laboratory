$(document).ready(function () {
    $(".fullmenu").on("click", function () {
        const menu = document.getElementById("img1")
        if (menu.style.display === "none") {
            menu.style.display = "block";
        }
        else {
            menu.style.display = "none";
        }
    });


    $(".katblue").on("click", function () {
        $(".lenta").toggleClass("lenta-move");
        $(".task1").toggleClass("task1-move");
    });

    $(".katorange").on("click", function () {
        $(".lenta2").toggleClass("lenta2-move");
        $(".task2").toggleClass("task2-move");
    });


    $(".orange").on("click", function () {
        $("#color").attr("src", "img/красный.svg");
    });

    $(".blue").on("click", function () {
        $("#color").attr("src", "img/голубой.svg");
    });

    $(".yellow").on("click", function () {
        $("#color").attr("src", "img/жёлтый.svg");
    });

    $(".green").on("click", function () {
        $("#color").attr("src", "img/зеленый.svg");
    });

    $(".pink").on("click", function () {
        $("#color").attr("src", "img/розовый.svg");
    });

    $(".darkblue").on("click", function () {
        $("#color").attr("src", "img/синий.svg");
    });


    $(".blackvideo").on("click", function () {
        $(".format").toggleClass("format-hide");
    });

    let photos = [
        "img/photo_2024-02-15 12.47.svg",
        "img/photo_2024-02-15 19.25-1.svg",
        "img/photo_2024-02-15 19.25.svg"
    ]
    let curPhoto = 0;

    $(".blackleft").on("click", function () {
        --curPhoto;
        if (curPhoto < 0) curPhoto = photos.length - 1;
        $("#moment-pic").attr("src", photos[curPhoto]);
    });

    $(".blackright").on("click", function () {
        ++curPhoto;
        if (curPhoto >= photos.length) curPhoto = 0;
        $("#moment-pic").attr("src", photos[curPhoto]);
    });

    $(".blackbin").on("click", function () {
        $(".delete").toggleClass("delete-show");
    });

    $(".blackgrid").on("click", function () {
        $(".grid").toggleClass("grid-show");
    });



    $(".draggable").mousedown(function (event) {
        $(this).css("animation", "none");
    });

    $(".draggable").draggable()
});

