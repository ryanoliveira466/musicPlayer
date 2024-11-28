

function colorChangeNext() {
    let elements = document.getElementsByClassName('carousel-item carousel-item-next carousel-item-start')[0];
    // let elements = document.getElementsByClassName('carousel-item active')[0];



    if (elements.id == 'purple') {


        document.getElementById('a').style.backgroundImage = 'linear-gradient(black, rgb(59, 25, 59))';
        document.getElementById('a').style.animation = '2s fadeIn ease-out forwards'

        document.getElementById("a").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(59, 25, 59))';
            document.getElementById("a").style.animation = 'none';
        });




    }
    else if (elements.id == 'blue') {


        document.getElementById('b').style.backgroundImage = 'linear-gradient(black, rgb(40, 113, 126))';
        document.getElementById('b').style.animation = '2s fadeIn ease-out forwards'

        document.getElementById("b").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(40, 113, 126))';
            document.getElementById("b").style.animation = 'none';
        });
    }

    else if (elements.id == 'red') {


        document.getElementById('c').style.backgroundImage = 'linear-gradient(black, rgb(95, 10, 10))';
        document.getElementById('c').style.animation = '2s fadeIn ease-out forwards'

        document.getElementById("c").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(95, 10, 10))';
            document.getElementById("c").style.animation = 'none';
        });
    }

}









function colorChangePrev() {
    let elements = document.getElementsByClassName('carousel-item carousel-item-prev carousel-item-end')[0];
    // let elements = document.getElementsByClassName('carousel-item active')[0];
    console.log(elements.id);

    if (elements.id == 'purple') {


        document.getElementById('a').style.backgroundImage = 'linear-gradient(black, rgb(59, 25, 59))';
        document.getElementById('a').style.animation = '2s fadeIn ease-out forwards'

        document.getElementById("a").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(59, 25, 59))';
            document.getElementById("a").style.animation = 'none';
        });




    }
    else if (elements.id == 'blue') {


        document.getElementById('b').style.backgroundImage = 'linear-gradient(black, rgb(40, 113, 126))';
        document.getElementById('b').style.animation = '2s fadeIn ease-out forwards'

        document.getElementById("b").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(40, 113, 126))';
            document.getElementById("b").style.animation = 'none';
        });
    }

    else if (elements.id == 'red') {


        document.getElementById('c').style.backgroundImage = 'linear-gradient(black, rgb(95, 10, 10))';
        document.getElementById('c').style.animation = '2s fadeIn ease-out forwards'

        document.getElementById("c").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(95, 10, 10))';
            document.getElementById("c").style.animation = 'none';
        });
    }

}











document.getElementById('buttonCarousel1').addEventListener('click', function () {

    //   setTimeout(colorChangePrev,1000) 
    colorChangePrev()

})

document.getElementById('buttonCarousel2').addEventListener('click', function () {

    //  setTimeout(colorChangeNext,1000)
    colorChangeNext()


})

document.getElementById('offCanvasButton').addEventListener("click", function () {

    let element = document.getElementsByClassName("offcanvas-backdrop")[0];
    element.style.height = '100%';


})



