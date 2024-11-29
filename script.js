


arrayImagesColor = [{ id: "purple", color: "linear-gradient(black, rgb(59, 25, 59))", div: 'a', tint: "none" },
{ id: "blue", color: "linear-gradient(black, rgb(40, 113, 126))", div: 'b', tint: "none" },
{ id: "red", color: "linear-gradient(black, rgb(95, 10, 10))", div: 'c', tint: "none" },
{ id: "teste", color: "linear-gradient(black, rgb(19, 250, 77))", div: 'd', tint: "rgb(19, 250, 77)" }
]



function colorChangeNext() {
    let elements = document.getElementsByClassName('carousel-item carousel-item-next carousel-item-start')[0];

    for (let i = 0; i < arrayImagesColor.length; i++) {

        if (elements.id == arrayImagesColor[i].id) {
            let divElement = document.getElementById(arrayImagesColor[i].div);

            divElement.style.backgroundImage = arrayImagesColor[i].color;
            divElement.style.animation = '2s fadeIn ease-out forwards';

            divElement.addEventListener("animationend", function () {
                document.body.style.backgroundImage = arrayImagesColor[i].color;
                divElement.style.animation = 'none';
            });

            // Create a <style> element to add custom CSS rules dynamically
            let style = document.createElement('style');

            // Add the CSS rules for the ::after pseudo-element
            style.innerHTML = `
            #${arrayImagesColor[i].id}::after {
            content: '';
            position: absolute;
            width: 1280px;
            height: 720px;
            background-color: ${arrayImagesColor[i].tint};
            mix-blend-mode: color;
            }
             `;

            // Append the style element to the document head
            document.head.appendChild(style);





        }
    }
}

function colorChangePrev() {
    let elements = document.getElementsByClassName('carousel-item carousel-item-prev carousel-item-end')[0];

    for (let i = 0; i < arrayImagesColor.length; i++) {

        if (elements.id == arrayImagesColor[i].id) {
            let divElement = document.getElementById(arrayImagesColor[i].div);

            divElement.style.backgroundImage = arrayImagesColor[i].color;
            divElement.style.animation = '2s fadeIn ease-out forwards';

            divElement.addEventListener("animationend", function () {
                document.body.style.backgroundImage = arrayImagesColor[i].color;
                divElement.style.animation = 'none';
            });

            // Create a <style> element to add custom CSS rules dynamically
            let style = document.createElement('style');

            // Add the CSS rules for the ::after pseudo-element
            style.innerHTML = `
            #${arrayImagesColor[i].id}::after {
            content: '';
            position: absolute;
            width: 1280px;
            height: 720px;
            background-color: ${arrayImagesColor[i].tint};
            mix-blend-mode: color;
            }
             `;

            // Append the style element to the document head
            document.head.appendChild(style);





        }
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



