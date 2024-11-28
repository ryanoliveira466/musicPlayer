

function colorChange() {
    let elements = document.getElementsByClassName('active')[0];
    console.log(elements.id);

    if (elements.id == 'purple') {


        document.getElementById('a').style.backgroundImage = 'linear-gradient(black, rgb(59, 25, 59))';
        document.getElementById('a').style.animation = '1s fadeIn ease-out forwards'

        document.getElementById("a").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(59, 25, 59))';
            document.getElementById("a").style.animation = 'none';
        });




    }
    else if (elements.id == 'blue') {


        document.getElementById('a').style.backgroundImage = 'linear-gradient(black, rgb(40, 113, 126))';
        document.getElementById('a').style.animation = '1s fadeIn ease-out forwards'

        document.getElementById("a").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(40, 113, 126))';
            document.getElementById("a").style.animation = 'none';
        });
    }

    else if (elements.id == 'red') {


        document.getElementById('a').style.backgroundImage = 'linear-gradient(black, rgb(95, 10, 10))';
        document.getElementById('a').style.animation = '1s fadeIn ease-out forwards'

        document.getElementById("a").addEventListener("animationend", function () {
            document.body.style.backgroundImage = 'linear-gradient(black, rgb(95, 10, 10))';
            document.getElementById("a").style.animation = 'none';
        });
    }

}

document.getElementById('buttonCarousel1').addEventListener('click', function () {

    setTimeout(colorChange, 2500)
})

document.getElementById('buttonCarousel2').addEventListener('click', function () {

    setTimeout(colorChange, 2500)

})

document.getElementById('offCanvasButton').addEventListener("click", function () {

    let element = document.getElementsByClassName("offcanvas-backdrop")[0];
    element.style.height = '100%';


})



