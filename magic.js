$(document).ready(function () {
    $surface = $(".surface")
    $car = $(".car")
    $img = $(".car img")
    let flag = true
    const cars = ["./Img_06.png", "./Img_05.png"]

    //key press
    $(document).on("keypress", function (e) {
        if (e.which == 13) {
            $($surface).toggleClass("moveRight")
            $($car).toggleClass("suspension")
        }
    })

    $(document).on("keypress", function (e) {
        if (e.which == 119) {
            if (flag == true) {
                flag = false
                $img.attr('src', cars[0])
            }
            else {
                flag = true
                $img.attr('src', cars[1])
            }

        }
    })
})
