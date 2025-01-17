arrayImagesColor = [{
    id: "purple",
    idImg: "purpleImg",
    color: "linear-gradient(to left,#030328, #29033D)",
    color1: '#030328',
    color2: '#29033D',
    div: 'a',
    tint: "#4D13A4",
    src: "img/teste/maxresdefault (1).jpg",
    mix: "overlay",
    cover: "cover",
    linear: "to left"

},
{
    id: "blue",
    idImg: "blueImg",
    color: "linear-gradient(to right,#00FFF2, #000AFF)",
    color1: '#00FFF2',
    color2: '#000AFF',
    div: 'b',
    tint: "#FF0000",
    src: "img/teste/maxresdefault.jpg",
    mix: "exclusion",
    cover: "cover",
    linear: "to right"
},
{
    id: "red",
    idImg: "redImg",
    color: "linear-gradient(to bottom left,#FE8E01, #FF0000)",
    color1: '#FE8E01',
    color2: '#FF0000',
    div: 'c',
    tint: "#8E4304",
    src: "img/teste/Łaszewo.jpg",
    mix: "hue",
    cover: "cover",
    linear: "to bottom left"
},
{
    id: "green",
    idImg: "greenImg",
    color: "linear-gradient(to bottom right,#1AED3D, #35ED03)",
    color1: '#1AED3D',
    color2: '#35ED03',
    div: 'd',
    tint: "#9EF509",
    src: "img/teste/wallpaper.jpg",
    mix: "saturation",
    cover: "cover",
    linear: "to bottom right"
}
]

arraySong = [
    {
        nameSong: '1',
        wallPaper: 'img/teste/maxresdefault (1).jpg',
        songSrc: 'song/XYLØ - Blue Light [TubeRipper.com].mp3'
    },
    {
        nameSong: '2',
        wallPaper: 'img/teste/Łaszewo.jpg',
        songSrc: 'song/Łaszewo - Dont Walk Away (feat. KEEVΛ) [TubeRipper.com].mp3'

    },
    {
        nameSong: '3',
        wallPaper: 'img/teste/xKM-jgaOW2Y-HD.jpg',
        songSrc: 'song/Dabin - Alive (feat. RUNN) [TubeRipper.com].mp3'

    },
    {
        nameSong: '4',
        wallPaper: 'img/teste/jacek-babinski-img-8028-2afxxxxx.jpg',
        songSrc: 'song/Far Out - Lost With You (feat. Ruby Chase) [TubeRipper.com].mp3'

    },
    {
        nameSong: '5',
        wallPaper: 'img/teste/karmen-loh-clementine-withlogo-compressed.jpg',
        songSrc: 'song/Módl - Clementine [TubeRipper.com].mp3'

    },
    {
        nameSong: '6',
        wallPaper: 'img/teste/maxresdefault.jpg',
        songSrc: 'song/Said The Sky - Erase Me (feat. NÉONHÈART) [TubeRipper.com].mp3'

    }
];



//FOCUS VEM PRIMEIRO DO QUE O CLICK
document.getElementById('liveToastBtnClose').addEventListener('focus', function () {
    const divImage = document.getElementById('exampleModalImagens');
    divImage.style.scrollBehavior = 'smooth'
    divImage.scrollTop = 0;

    const divView = document.getElementById('exampleModalEdit');
    divView.style.scrollBehavior = 'smooth'
    divView.scrollTop = 0;
})


document.getElementById('liveToastBtnClose').addEventListener('click', function () {
    const divImage = document.getElementById('exampleModalImagens');
    divImage.style.scrollBehavior = 'smooth'
    divImage.scrollTop = 0; // 
    divImage.style.scrollBehavior = ''



    const divView = document.getElementById('exampleModalEdit');
    divView.style.scrollBehavior = 'smooth'
    divView.scrollTop = 0; // 
    divView.style.scrollBehavior = ''
})








document.getElementById('liveToastBtnNameClose').addEventListener('focus', function () {
    const divImage = document.getElementById('exampleModalImagens');
    divImage.style.scrollBehavior = 'smooth'
    divImage.scrollTop = 0;

    const divView = document.getElementById('exampleModalEdit');
    divView.style.scrollBehavior = 'smooth'
    divView.scrollTop = 0;
})


document.getElementById('liveToastBtnNameClose').addEventListener('click', function () {
    const divImage = document.getElementById('exampleModalImagens');
    divImage.style.scrollBehavior = 'smooth'
    divImage.scrollTop = 0; // 
    divImage.style.scrollBehavior = ''



    const divView = document.getElementById('exampleModalEdit');
    divView.style.scrollBehavior = 'smooth'
    divView.scrollTop = 0; // 
    divView.style.scrollBehavior = ''
})







function colorChangeNext() {
    let elements = document.getElementsByClassName('carousel-item carousel-item-next carousel-item-start')[0];

    console.log(arrayImagesColor);


    for (let i = 0; i < arrayImagesColor.length; i++) {

        if (elements.id == arrayImagesColor[i].id) {


            document.getElementById(arrayImagesColor[i].idImg).style.objectFit = arrayImagesColor[i].cover


            let divElement = document.getElementById(arrayImagesColor[i].div);

            divElement.style.backgroundImage = arrayImagesColor[i].color;
            divElement.style.animation = '1s fadeIn ease-out forwards';

            divElement.addEventListener("animationend", function () {
                document.body.style.backgroundImage = arrayImagesColor[i].color;
                divElement.style.animation = 'none';
            });


            try {
                let removeStyleLoop = document.getElementById('after')
                document.head.removeChild(removeStyleLoop)
            } catch (error) {

            }

            // Create a <style> element to add custom CSS rules dynamically
            let style = document.createElement('style');
            // style.id = `${arrayImagesColor[i].id}after`
            style.id = `after`

            style.innerHTML = `
             .imgGojo::after {
                 content: '';
                 position: absolute;
                 width: 100%;
                 height: 100%;
                 background-color: ${arrayImagesColor[i].tint};
                 mix-blend-mode: ${arrayImagesColor[i].mix};
                 border-radius: 20px;
                 animation: 1s fadeIn ease-out forwards;
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


            document.getElementById(arrayImagesColor[i].idImg).style.objectFit = arrayImagesColor[i].cover


            let divElement = document.getElementById(arrayImagesColor[i].div);

            divElement.style.backgroundImage = arrayImagesColor[i].color;
            divElement.style.animation = '1s fadeIn ease-out forwards';

            divElement.addEventListener("animationend", function () {
                document.body.style.backgroundImage = arrayImagesColor[i].color;
                divElement.style.animation = 'none';
            });



            try {
                let removeStyleLoop = document.getElementById('after')
                document.head.removeChild(removeStyleLoop)
            } catch (error) {

            }

            // Create a <style> element to add custom CSS rules dynamically
            let style = document.createElement('style');
            style.id = `after`




            // Add the CSS rules for the ::after pseudo-element
            style.innerHTML = `
                 .imgGojo::after {
                  content: '';
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  background-color: ${arrayImagesColor[i].tint};
                  mix-blend-mode: ${arrayImagesColor[i].mix};
                  border-radius: 20px;
                  animation: 1s fadeIn ease-out forwards;
                  }
                   `;




            // Append the style element to the document head
            document.head.appendChild(style);





        }
    }
}



// Get the carousel element (optional, for consistency)
const carousel = document.getElementById('carouselExampleFade'); // Replace with your carousel ID

// Variables to track touch positions
let touchStartX = 0;
let touchEndX = 0;

// Detect touchstart (when touch begins)
carousel.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX; // Store initial touch position
}, false);

// Detect touchend (when touch ends)
carousel.addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].clientX; // Store final touch position

    // Call the function to handle the swipe direction
    handleSwipe();
}, false);

// Function to determine swipe direction
function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Swipe left - trigger colorChangeNext()
        colorChangeNext();
        document.getElementsByClassName('carousel-control-next-icon')[0].style.transform = 'scale(1.3)';
        document.getElementsByClassName('carousel-control-prev-icon')[0].style.transform = 'scale(1)';
    }
    if (touchEndX - touchStartX > 50) {
        // Swipe right - trigger colorChangePrev()
        colorChangePrev();
        document.getElementsByClassName('carousel-control-prev-icon')[0].style.transform = 'scale(1.3)';
        document.getElementsByClassName('carousel-control-next-icon')[0].style.transform = 'scale(1)';
    }
}




document.getElementById('buttonCarousel1').addEventListener('click', function () {

    //   setTimeout(colorChangePrev,1000) 
    colorChangePrev()
    document.getElementsByClassName('carousel-control-next-icon')[0].style.transform = 'scale(1)'
    document.getElementsByClassName('carousel-control-prev-icon')[0].style.transform = 'scale(1.3)'

})

document.getElementById('buttonCarousel2').addEventListener('click', function () {

    //  setTimeout(colorChangeNext,1000)
    colorChangeNext()
    document.getElementsByClassName('carousel-control-prev-icon')[0].style.transform = 'scale(1)'
    document.getElementsByClassName('carousel-control-next-icon')[0].style.transform = 'scale(1.3)'


})



document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        document.getElementById('buttonCarousel2').click()
        document.getElementsByClassName('carousel-control-prev-icon')[0].style.transform = 'scale(1)'
        document.getElementsByClassName('carousel-control-next-icon')[0].style.transform = 'scale(1.3)'
    } else if (event.key === 'ArrowLeft') {
        document.getElementById('buttonCarousel1').click()
        document.getElementsByClassName('carousel-control-next-icon')[0].style.transform = 'scale(1)'
        document.getElementsByClassName('carousel-control-prev-icon')[0].style.transform = 'scale(1.3)'
    }
});

document.getElementById('offCanvasButton').addEventListener("click", function () {

    let element = document.getElementsByClassName("offcanvas-backdrop")[0];
    element.style.height = '100%';


})



// Initialize the Pickr color picker
const pickr = Pickr.create({
    el: '#color-picker', // Target the div where you want the color picker
    theme: 'classic', // You can also use 'monolith' or 'nano' themes
    default: '#ff0000', // Default color
    swatches: [ // Optional: Define a set of swatches
        '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'
    ],
    components: {
        preview: true, // Show preview of selected color
        opacity: true, // Show opacity slider
        hue: true, // Show hue slider
        interaction: {
            hex: true, // Allow hex input
            rgba: true, // Allow rgba input
            input: true // Allow direct input
        }
    }
});






// Initialize the Pickr color picker
const pickr2 = Pickr.create({
    el: '#color-picker2', // Target the div where you want the color picker
    theme: 'classic', // You can also use 'monolith' or 'nano' themes
    default: '#ff0000', // Default color
    swatches: [ // Optional: Define a set of swatches
        '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'
    ],
    components: {
        preview: true, // Show preview of selected color
        opacity: true, // Show opacity slider
        hue: true, // Show hue slider
        interaction: {
            hex: true, // Allow hex input
            rgba: true, // Allow rgba input
            input: true // Allow direct input
        }
    }
});







// Initialize the Pickr color picker
const pickr3 = Pickr.create({
    el: '#color-picker3', // Target the div where you want the color picker
    theme: 'classic', // You can also use 'monolith' or 'nano' themes
    default: '#ff0000', // Default color
    swatches: [ // Optional: Define a set of swatches
        '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'
    ],
    components: {
        preview: true, // Show preview of selected color
        opacity: true, // Show opacity slider
        hue: true, // Show hue slider
        interaction: {
            hex: true, // Allow hex input
            rgba: true, // Allow rgba input
            input: true // Allow direct input
        }
    }
});



document.getElementById('colorDisplay').addEventListener('click', function () {
    document.getElementsByClassName('pcr-app')[0].className = 'pcr-app visible'
    document.getElementsByClassName('pcr-app')[0].style.display = 'flex'
    document.getElementsByClassName('pcr-app')[1].style.display = 'none'
    document.getElementsByClassName('pcr-app')[2].style.display = 'none'
    // Event listener to update the color value and the display box when the color changes
    pickr.on('change', (color) => {
        const selectedColor = color.toHEXA().toString(); // Get HEX color
        document.getElementById('colorValue').textContent = selectedColor; // Update the text
        document.getElementById('colorDisplay').style.backgroundColor = selectedColor; // Update display
    });


})






document.getElementById('colorDisplay2').addEventListener('click', function () {
    document.getElementsByClassName('pcr-app')[1].className = 'pcr-app visible'
    document.getElementsByClassName('pcr-app')[1].style.display = 'flex'
    document.getElementsByClassName('pcr-app')[0].style.display = 'none'
    document.getElementsByClassName('pcr-app')[2].style.display = 'none'
    // Event listener to update the color value and the display box when the color changes
    pickr2.on('change', (color) => {
        const selectedColor = color.toHEXA().toString(); // Get HEX color
        document.getElementById('colorValue2').textContent = selectedColor; // Update the text
        document.getElementById('colorDisplay2').style.backgroundColor = selectedColor; // Update display
    });


})






document.getElementById('colorDisplay3').addEventListener('click', function () {
    document.getElementsByClassName('pcr-app')[2].className = 'pcr-app visible'
    document.getElementsByClassName('pcr-app')[2].style.display = 'flex'
    document.getElementsByClassName('pcr-app')[1].style.display = 'none'
    document.getElementsByClassName('pcr-app')[0].style.display = 'none'
    // Event listener to update the color value and the display box when the color changes
    pickr3.on('change', (color) => {
        const selectedColor = color.toHEXA().toString(); // Get HEX color
        document.getElementById('colorValue3').textContent = selectedColor; // Update the text
        document.getElementById('colorDisplay3').style.backgroundColor = selectedColor; // Update display
    });


})




document.getElementById('btnImagem').addEventListener('click', function () {
    document.body.style.paddingRight = '0'
    document.getElementById('colorDisplay').click()

})



let resultEffect = "color"
document.querySelectorAll('input[name="blendMode"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedRadio = document.querySelector('input[name="blendMode"]:checked');
        if (selectedRadio) {
            resultEffect = selectedRadio.value
        }
    });
});


let imageCoverEffect = "cover"
document.querySelectorAll('input[name="imageCover"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedCover = document.querySelector('input[name="imageCover"]:checked');
        if (selectedCover) {
            imageCoverEffect = selectedCover.value
        }
    });
});



let backgroundCoverEffect = "to bottom"
document.querySelectorAll('input[name="backgroundCover"]').forEach(radio => {
    radio.addEventListener('change', function () {
        const selectedCover = document.querySelector('input[name="backgroundCover"]:checked');
        if (selectedCover) {
            backgroundCoverEffect = selectedCover.value
        }
    });
});







document.getElementById('buttonAcceptimg').addEventListener('click', function () {


    let id = document.getElementById('name').value.trim();
    let colorA = document.getElementById('colorValue').innerHTML
    let colorB = document.getElementById('colorValue2').innerHTML
    let tint = document.getElementById('colorValue3').innerHTML
    let divBgName = `${id}Div`
    let idImg = `${id}Img`
    let imgSrc = document.getElementById('image-preview').src;
    let mixEffect = resultEffect
    let coverImg = imageCoverEffect
    let linearMove = backgroundCoverEffect

    if (id == "") {
        document.getElementById('liveToastBtn').click()
        return;
    }


    for (var i = 0; i < arrayImagesColor.length; i++) {
        if (id === arrayImagesColor[i].id) {
            document.getElementById('liveToastBtnName').click()
            return;
        }
    }


    function isValidId(id) {
        // Regular expression for a valid id
        const regex = /^[a-zA-Z][\w.-]*$/;

        // Check if the string matches the regular expression
        return regex.test(id);
    }


    if (isValidId(id) == false) {
        document.getElementById('liveToastBtnName').click()
        return;
    }


    let sourceImgDefault = document.getElementById('image-preview').src

    if (sourceImgDefault.toString().includes('img/notFound.jpg') == true) {
        document.getElementById('liveToastBtn').click()
        return;
    }



    arrayImagesColor.push({
        id: id,
        idImg: `${id}Img`,
        color: `linear-gradient(${linearMove},${colorA}, ${colorB})`,
        color1: colorA,
        color2: colorB,
        div: `${id}Div`,
        tint: `${tint}`,
        src: imgSrc,
        mix: mixEffect,
        cover: coverImg,
        linear: linearMove
    })



    // Create the <div> element with the id "coresBackgorund"
    const coresBackground = document.getElementById('coresBackgorund');


    // Create the <div> element with the class "padraoBackground" and id "a"
    const padraoBackground = document.createElement('div');
    padraoBackground.classList.add('padraoBackground');
    padraoBackground.id = divBgName;

    // Append the padraoBackground div to the coresBackground div
    coresBackground.appendChild(padraoBackground);



    // Create the <div> element with the class "carousel-item" and id "teste"
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item');
    carouselItem.id = id;

    // Create the inner <div> element with the class "container-fluid imgGojo" and id "teste"
    const containerFluid = document.createElement('div');
    containerFluid.classList.add('container-fluid');
    containerFluid.id = id;







    const containerImg = document.createElement('div');
    containerImg.classList.add('imgGojo');



    const blurStats = document.createElement("div")
    blurStats.classList.add('stats')







    const titleStats = document.createElement('h1')
    titleStats.classList.add('statsTitle')
    titleStats.id = `title${id}`
    titleStats.innerHTML = id




    // Create the <img> element with the source and id attributes
    const image = document.createElement('img');
    image.src = imgSrc;
    image.alt = '';
    image.id = idImg;




    containerImg.appendChild(blurStats)
    containerImg.appendChild(titleStats)
    containerImg.appendChild(image)



    containerImg.addEventListener("pointerover", function () {
        blurStats.style.display = 'flex'
        titleStats.style.display = 'flex'

    })


    containerImg.addEventListener("pointerout", function () {
        blurStats.style.display = 'none'
        titleStats.style.display = 'none'

    })






    // Append the image to the containerFluid div
    containerFluid.appendChild(containerImg);

    // Append the containerFluid to the carouselItem div
    carouselItem.appendChild(containerFluid);

    // Optionally, append the carouselItem to a parent element in the document
    // For example, assuming there's a container with id 'carouselContainer'
    const carouselContainer = document.getElementsByClassName('carousel-inner')[0];
    carouselContainer.appendChild(carouselItem);





    document.getElementById('btnCloseModalImagem').click()
    document.getElementById('name').value = ''

})






document.getElementById('btnView'), addEventListener('click', function () {


    document.body.style.paddingRight = '0'
    let div = document.getElementById('imageView'); // Get the div by its ID
    div.innerHTML = ''; // Set the content of the div to an empty string

    for (var i = 0; i < arrayImagesColor.length; i++) {

        let imgId = `${arrayImagesColor[i].id}View`
        let btnDelId = `${arrayImagesColor[i].id}Delete`
        let btnEditId = `${arrayImagesColor[i].id}Edit`
        let imgName = arrayImagesColor[i].id
        let imgSrc = arrayImagesColor[i].src
        let color1 = `${arrayImagesColor[i].color1}`
        let color2 = `${arrayImagesColor[i].color2}`
        let color3 = `${arrayImagesColor[i].tint}`
        let mixEffectCheck = `${arrayImagesColor[i].mix}`
        let coverEffectCheck = `${arrayImagesColor[i].cover}`
        let backgroundEffectCheck = `${arrayImagesColor[i].linear}`

        // Get the container where we want to append the music player
        const imgContainer = document.getElementById('imageView');

        // Create the main music player container
        const musicPlayerDiv = document.createElement('div');
        musicPlayerDiv.classList.add('music-player');
        musicPlayerDiv.id = 'music-player';

        // Create the image element for the album cover
        const albumImage = document.createElement('img');
        albumImage.src = imgSrc;
        albumImage.classList.add('musicImg');
        albumImage.alt = 'Album Cover';

        // Append the image to the music player div
        musicPlayerDiv.appendChild(albumImage);

        // Create the music info section with title
        const musicInfoDiv = document.createElement('div');
        musicInfoDiv.classList.add('music-info');
        musicInfoDiv.id = 'music-info';

        const musicTitle = document.createElement('h3');
        musicTitle.textContent = imgName;

        // Append the title to the music info div
        musicInfoDiv.appendChild(musicTitle);
        musicPlayerDiv.appendChild(musicInfoDiv);

        // Create the color options section
        const colorOptionDiv = document.createElement('div');
        colorOptionDiv.id = 'colorOption';

        // Create color 1
        const colorDiv1 = createColorDiv(1, color1);
        colorOptionDiv.appendChild(colorDiv1);

        // Create color 2
        const colorDiv2 = createColorDiv(2, color2);
        colorOptionDiv.appendChild(colorDiv2);

        // Create color 3
        const colorDiv3 = createColorDiv(3, color3);
        colorOptionDiv.appendChild(colorDiv3);

        // Append the color options to the music player
        musicPlayerDiv.appendChild(colorOptionDiv);

        // Create the option buttons (Delete and Edit)
        const optionButtonsDiv = document.createElement('div');
        optionButtonsDiv.id = 'optionButtons';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'itemAdd');
        deleteButton.innerHTML = '<img src="img/trash.png" alt="" srcset="" width="90px" height="90px">';
        deleteButton.id = btnDelId


        const clickCursor = document.getElementById('clickCursor');
        deleteButton.addEventListener('pointerover', () => {
            clickCursor.style.display = 'block';
        });

        deleteButton.addEventListener('pointerout', () => {
            clickCursor.style.display = 'none';
        });




        const editButton = document.createElement('button');
        editButton.classList.add('btn', 'btn-secondary', 'itemAdd');
        editButton.innerHTML = '<img src="img/pen.png" alt="" srcset="" width="90px" height="90px">';
        editButton.id = btnEditId
        editButton.setAttribute('data-bs-toggle', 'modal');
        editButton.setAttribute('data-bs-target', '#exampleModalEdit');

        editButton.addEventListener('pointerover', () => {
            clickCursor.style.display = 'block';
        });

        editButton.addEventListener('pointerout', () => {
            clickCursor.style.display = 'none';
        });




        editButton.addEventListener('click', function () {

            let pickr4 = null;
            let pickr5 = null;
            let pickr6 = null;


            document.body.style.paddingRight = '0'
            let div = document.getElementById('modal-body-edit'); // Get the div by its ID
            div.innerHTML = ''; // Set the content of the div to an empty string



            // Get the modal-body element
            const modalBody = document.getElementById('modal-body-edit');

            // Create the itemAdd div for the image upload
            const itemAddImage = document.createElement('div');
            itemAddImage.classList.add('itemAdd');

            // Create the form and input for file upload
            const form = document.createElement('form');
            form.id = 'upload-form';
            form.enctype = 'multipart/form-data';

            const label = document.createElement('label');
            label.textContent = 'Choose an image to upload:';
            label.setAttribute("for", "image-upload2");

            const input = document.createElement('input');
            input.type = 'file';
            input.style.fontSize = 'x-large';
            input.id = 'image-upload2';
            input.accept = 'image/*';
            input.setAttribute('onchange', '');
            input.style.display = 'none'

            const clickCursor = document.getElementById('clickCursor');
            input.addEventListener('pointerover', () => {
                clickCursor.style.display = 'block'; // Show the custom cursor
            });

            // Hide the custom cursor when mouse leaves the button
            input.addEventListener('pointerout', () => {
                clickCursor.style.display = 'none'; // Hide the custom cursor
            });

            // Append elements to the form
            form.appendChild(label);
            form.appendChild(input);

            // Append the form to the itemAddImage div
            itemAddImage.appendChild(form);

            // Append the itemAddImage div to modalBody
            modalBody.appendChild(itemAddImage);

            // Create the preview container for the image
            const previewContainer = document.createElement('div');
            previewContainer.classList.add('preview-container');
            previewContainer.id = 'preview-containerEdit';
            previewContainer.style.width = '100%'
            previewContainer.style.height = '500px'

            const imagePreview = document.createElement('img');
            imagePreview.id = 'image-previewEdit';
            imagePreview.class = 'rounded'
            imagePreview.style.padding = '0.5rem';
            imagePreview.style.borderRadius = '5px';
            imagePreview.style.objectFit = 'scale-down';
            imagePreview.src = imgSrc;
            imagePreview.alt = 'Image Preview';

            // Append the image to the previewContainer
            previewContainer.appendChild(imagePreview);

            // Append the previewContainer to modalBody
            modalBody.appendChild(previewContainer);

            // Create the itemAdd div for the name input
            const itemAddName = document.createElement('div');
            itemAddName.classList.add('itemAdd');
            itemAddName.style.justifyContent = 'center'

            const nameText = document.createElement('p');
            nameText.style.padding = '1rem';
            nameText.style.margin = '0';
            nameText.style.textAlign = 'justify';
            nameText.textContent = 'Name:';
            nameText.style.display = 'none'

            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.id = 'nameEdit';
            nameInput.placeholder = 'Name:'
            nameInput.className = 'form-control'
            nameInput.style.fontSize = 'unset'
            nameInput.style.padding = '1rem';
            nameInput.value = imgName


            const penCursor = document.getElementById('penCursor');
            // Show the custom cursor when hovering over the button
            nameInput.addEventListener('pointerover', () => {
                penCursor.style.display = 'block'; // Show the custom cursor
            });

            // Hide the custom cursor when mouse leaves the button
            nameInput.addEventListener('pointerout', () => {
                penCursor.style.display = 'none'; // Hide the custom cursor
            });


            // Append name text and input to itemAddName
            itemAddName.appendChild(nameText);
            itemAddName.appendChild(nameInput);

            // Append itemAddName to modalBody
            modalBody.appendChild(itemAddName);

            // Create the hidden divs for the color pickers
            const hiddenDivs = document.createElement('div');
            hiddenDivs.style.display = 'none';

            const colorPicker1 = document.createElement('div');
            colorPicker1.id = 'color-picker4';
            const colorPicker2 = document.createElement('div');
            colorPicker2.id = 'color-picker5';
            const colorPicker3 = document.createElement('div');
            colorPicker3.id = 'color-picker6';

            // Append color pickers to hiddenDivs
            hiddenDivs.appendChild(colorPicker1);
            hiddenDivs.appendChild(colorPicker2);
            hiddenDivs.appendChild(colorPicker3);

            // Append hiddenDivs to modalBody
            modalBody.appendChild(hiddenDivs);

            // Create the div for color options
            const colorOption = document.createElement('div');
            colorOption.id = 'colorOption';



            // Function to create color display blocks
            function createColorDisplay(idColor, colorId, numberText) {
                const itemAddColor = document.createElement('div');
                itemAddColor.classList.add('itemAdd');
                itemAddColor.style.flexDirection = 'column';
                itemAddColor.style.textAlign = 'center';
                itemAddColor.style.justifyContent = 'center';
                itemAddColor.style.alignItems = 'center';

                const colorText = document.createElement('p');
                colorText.textContent = `Color ${numberText}: `;
                const colorValue = document.createElement('span');
                colorValue.id = `colorValue${idColor}`;
                colorValue.style.display = 'none';
                colorValue.innerHTML = colorId

                const colorDisplay = document.createElement('div');
                colorDisplay.classList.add('color-display');
                colorDisplay.id = `colorDisplay${idColor}`;
                colorDisplay.style.backgroundColor = colorId;


                colorDisplay.addEventListener('pointerover', () => {
                    clickCursor.style.display = 'block';
                });

                colorDisplay.addEventListener('pointerout', () => {
                    clickCursor.style.display = 'none';
                });



                // Append elements to itemAddColor
                itemAddColor.appendChild(colorText);
                itemAddColor.appendChild(colorValue);
                itemAddColor.appendChild(colorDisplay);

                // Append itemAddColor to colorOption
                colorOption.appendChild(itemAddColor);
            }

            // Create three color displays
            createColorDisplay(4, color1, 1);
            createColorDisplay(5, color2, 2);
            createColorDisplay(6, color3, 3);

            // Append colorOption to modalBody
            modalBody.appendChild(colorOption);




            const radioContainer = document.createElement('div');
            // Set the ID for the div
            radioContainer.id = 'radio-container';
            // Apply the styles
            radioContainer.style.display = 'flex';
            radioContainer.style.justifyContent = 'center';
            radioContainer.style.alignItems = 'center';
            radioContainer.style.flexWrap = 'wrap';
            radioContainer.style.flexDirection = 'row';
            radioContainer.style.fontSize = 'x-large';

            modalBody.appendChild(radioContainer)















            // Define an array of blend modes
            const blendModes = [
                "normal", "multiply", "screen", "overlay", "darken", "lighten",
                "color-dodge", "color-burn", "hard-light", "soft-light", "difference",
                "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"
            ];

            // Get the parent container to append radio buttons
            const container = document.getElementById('radio-container');

            // Loop through the blend modes array and create radio buttons dynamically
            blendModes.forEach((mode, index) => {
                // Create the div for the form-check
                const formCheckDiv = document.createElement('div');
                formCheckDiv.classList.add('form-check');

                // Create the input (radio button)
                const input = document.createElement('input');
                input.type = 'radio';
                input.classList.add('form-check-input');
                input.name = 'blendMode2';
                input.id = `blendMode${index + 19}`;
                input.value = mode;

                // If it's the "color" mode, make it checked by default
                if (mode === mixEffectCheck) {
                    input.checked = true;
                }

                // Create the label
                const label = document.createElement('label');
                label.classList.add('form-check-label');
                label.setAttribute('for', `blendMode${index + 19}`);
                label.textContent = mode;

                // Append the input and label to the form-check div
                formCheckDiv.appendChild(input);
                formCheckDiv.appendChild(label);

                // Append the form-check div to the container
                container.appendChild(formCheckDiv);
            });










            var br = document.createElement("br");
            modalBody.appendChild(br);












            const coverContainer = document.createElement('div');
            // Set the ID for the div
            coverContainer.id = 'cover-container';
            // Apply the styles
            coverContainer.style.display = 'flex';
            coverContainer.style.justifyContent = 'center';
            coverContainer.style.alignItems = 'center';
            coverContainer.style.flexWrap = 'wrap';
            coverContainer.style.flexDirection = 'row';
            coverContainer.style.fontSize = 'x-large';

            modalBody.appendChild(coverContainer)






            // Define an array of blend modes
            const coverModes = [
                "fill", "contain", "cover", "scale-down", "none",
            ];

            // Get the parent container to append radio buttons
            const containerCover = document.getElementById('cover-container');

            // Loop through the blend modes array and create radio buttons dynamically
            coverModes.forEach((mode, index) => {
                // Create the div for the form-check
                const formCheckDiv = document.createElement('div');
                formCheckDiv.classList.add('form-check');

                // Create the input (radio button)
                const input = document.createElement('input');
                input.type = 'radio';
                input.classList.add('form-check-input');
                input.name = 'imageCover2';
                input.id = `imageCover${index + 6}`;
                input.value = mode;

                // If it's the "color" mode, make it checked by default
                if (mode === coverEffectCheck) {
                    input.checked = true;
                }

                // Create the label
                const label = document.createElement('label');
                label.classList.add('form-check-label');
                label.setAttribute('for', `imageCover${index + 6}`);
                label.textContent = mode;

                // Append the input and label to the form-check div
                formCheckDiv.appendChild(input);
                formCheckDiv.appendChild(label);

                // Append the form-check div to the container
                containerCover.appendChild(formCheckDiv);
            });




            var br = document.createElement("br");
            modalBody.appendChild(br);





            const backgroundLinearContainer = document.createElement('div');
            // Set the ID for the div
            backgroundLinearContainer.id = 'backgroundLinearContainer';
            // Apply the styles
            backgroundLinearContainer.style.display = 'flex';
            backgroundLinearContainer.style.justifyContent = 'center';
            backgroundLinearContainer.style.alignItems = 'center';
            backgroundLinearContainer.style.flexWrap = 'wrap';
            backgroundLinearContainer.style.flexDirection = 'row';
            backgroundLinearContainer.style.fontSize = 'x-large';

            modalBody.appendChild(backgroundLinearContainer)



            // Define an array of blend modes
            const backModes = [
                "to left", "to top", "to bottom", "to right", "to top right", "to top left", "to bottom right", "to bottom left"
            ];

            // Get the parent container to append radio buttons
            const backLinearCover = document.getElementById('backgroundLinearContainer');

            // Loop through the blend modes array and create radio buttons dynamically
            backModes.forEach((mode, index) => {
                // Create the div for the form-check
                const formCheckDiv = document.createElement('div');
                formCheckDiv.classList.add('form-check');

                // Create the input (radio button)
                const input = document.createElement('input');
                input.type = 'radio';
                input.classList.add('form-check-input');
                input.name = 'backgroundCover2';
                input.id = `backgroundCover${index + 20}`;
                input.value = mode;

                // If it's the "color" mode, make it checked by default
                if (mode === backgroundEffectCheck) {
                    input.checked = true;
                }

                // Create the label
                const label = document.createElement('label');
                label.classList.add('form-check-label');
                label.setAttribute('for', `backgroundCover${index + 20}`);
                label.textContent = mode;

                // Append the input and label to the form-check div
                formCheckDiv.appendChild(input);
                formCheckDiv.appendChild(label);

                // Append the form-check div to the container
                backLinearCover.appendChild(formCheckDiv);
            });


























            // Create the Save button
            const saveButtonContainer = document.createElement('div');
            saveButtonContainer.style.display = 'flex';
            saveButtonContainer.style.width = '100%';
            saveButtonContainer.style.padding = '8px';
            saveButtonContainer.style.justifyContent = 'center';
            saveButtonContainer.style.alignItems = 'center';

            const saveButton = document.createElement('button');
            saveButton.className = 'btn btn-secondary'
            saveButton.style.fontSize = '32px'
            saveButton.id = 'buttonAcceptEdit';
            saveButton.innerHTML = `<img src="img/save.png" alt="" srcset="" width="90px" height="90px">`




            let resultEffect2 = mixEffectCheck
            document.querySelectorAll('input[name="blendMode2"]').forEach(radio => {
                radio.addEventListener('change', function () {
                    const selectedRadio2 = document.querySelector('input[name="blendMode2"]:checked');
                    if (selectedRadio2) {
                        resultEffect2 = selectedRadio2.value
                    }
                });
            });




            let imageCoverEffect2 = coverEffectCheck
            document.querySelectorAll('input[name="imageCover2"]').forEach(radio => {
                radio.addEventListener('change', function () {
                    const selectedCover2 = document.querySelector('input[name="imageCover2"]:checked');
                    if (selectedCover2) {
                        imageCoverEffect2 = selectedCover2.value
                    }
                });
            });




            let backgroundCoverEffect2 = backgroundEffectCheck
            document.querySelectorAll('input[name="backgroundCover2"]').forEach(radio => {
                radio.addEventListener('change', function () {
                    const selectedCover2 = document.querySelector('input[name="backgroundCover2"]:checked');
                    if (selectedCover2) {
                        backgroundCoverEffect2 = selectedCover2.value
                    }
                });
            });









            saveButton.addEventListener('pointerover', () => {
                clickCursor.style.display = 'block'; // Show the custom cursor
            });

            // Hide the custom cursor when mouse leaves the button
            saveButton.addEventListener('pointerout', () => {
                clickCursor.style.display = 'none'; // Hide the custom cursor
            });





            saveButton.addEventListener('click', function () {




                let ref = document.getElementById('idRef').innerText
                let id = document.getElementById('nameEdit').value
                let colorA = document.getElementById('colorValue4').innerHTML
                let colorB = document.getElementById('colorValue5').innerHTML
                let tint = document.getElementById('colorValue6').innerHTML
                let imgSrc = document.getElementById('image-previewEdit').src
                let mixEffect = resultEffect2
                let coverImg2 = imageCoverEffect2
                let linearMove2 = backgroundCoverEffect2


                if (nameInput.value.trim() == "") {
                    document.getElementById('liveToastBtn').click()
                    return;
                }



                for (var i = 0; i < arrayImagesColor.length; i++) {
                    if (id === arrayImagesColor[i].id && id !== ref) {
                        document.getElementById('liveToastBtnName').click()
                        return;
                    }
                }



                function isValidId(id) {
                    // Regular expression for a valid id
                    const regex = /^[a-zA-Z][\w.-]*$/;

                    // Check if the string matches the regular expression
                    return regex.test(id);
                }


                if (isValidId(id) == false) {
                    document.getElementById('liveToastBtnName').click()
                    return;
                }


                for (var i = 0; i < arrayImagesColor.length; i++) {

                    if (ref.includes(arrayImagesColor[i].id)) {


                        document.getElementById(`title${arrayImagesColor[i].id}`).innerHTML = id
                        document.getElementById(`title${arrayImagesColor[i].id}`).id = `title${id}`



                        let idChangeOnce = document.getElementById(arrayImagesColor[i].id)
                        idChangeOnce.id = id

                        let idChangeTwice = document.getElementById(arrayImagesColor[i].id)
                        idChangeTwice.id = id

                        let idChangeImg = document.getElementById(arrayImagesColor[i].idImg)
                        idChangeImg.id = `${id}Img`
                        idChangeImg.src = imgSrc

                        arrayImagesColor[i].id = id
                        arrayImagesColor[i].idImg = `${id}Img`
                        arrayImagesColor[i].color = `linear-gradient(${linearMove2},${colorA}, ${colorB})`
                        arrayImagesColor[i].color1 = colorA
                        arrayImagesColor[i].color2 = colorB

                        let oldDiv = document.getElementById(arrayImagesColor[i].div)
                        oldDiv.id = `${id}Div`
                        arrayImagesColor[i].div = `${id}Div`

                        arrayImagesColor[i].tint = `${tint}`
                        arrayImagesColor[i].src = imgSrc
                        arrayImagesColor[i].mix = mixEffect
                        arrayImagesColor[i].cover = coverImg2
                        arrayImagesColor[i].linear = linearMove2





                        console.log(arrayImagesColor);


                    }

                }



                let elements = document.getElementsByClassName('carousel-item active')[0];


                for (let i = 0; i < arrayImagesColor.length; i++) {

                    if (elements.id == arrayImagesColor[i].id) {


                        document.getElementById(arrayImagesColor[i].idImg).style.objectFit = arrayImagesColor[i].cover


                        let divElement = document.getElementById(arrayImagesColor[i].div);

                        divElement.style.backgroundImage = arrayImagesColor[i].color;
                        divElement.style.animation = '1s fadeIn ease-out forwards';

                        divElement.addEventListener("animationend", function () {
                            document.body.style.backgroundImage = arrayImagesColor[i].color;
                            divElement.style.animation = 'none';
                        });



                        try {
                            let removeStyleLoop = document.getElementById('after')
                            document.head.removeChild(removeStyleLoop)
                        } catch (error) {

                        }


                        // Create a <style> element to add custom CSS rules dynamically
                        let style = document.createElement('style');
                        style.id = `after`

                        style.innerHTML = `
                         .imgGojo::after {
                             content: '';
                             position: absolute;
                             width: 100%;
                             height: 100%;
                             background-color: ${arrayImagesColor[i].tint};
                             mix-blend-mode: ${arrayImagesColor[i].mix};
                             border-radius: 20px;
                             animation: 1s fadeIn ease-out forwards;
                             }
                              `;



                        // Append the style element to the document head
                        document.head.appendChild(style);





                    }
                }

                document.getElementById('btnCloseModalEdit').click()

            })




            // Append saveButton to saveButtonContainer
            saveButtonContainer.appendChild(saveButton);

            // Append saveButtonContainer to modalBody
            modalBody.appendChild(saveButtonContainer);



            //Ref ID Image
            const idRef = document.createElement('p')
            idRef.id = 'idRef'
            idRef.innerHTML = imgName
            idRef.style.display = 'none'

            modalBody.appendChild(idRef);





            // Initialize the Pickr color picker
            pickr4 = Pickr.create({
                el: '#color-picker4', // Target the div where you want the color picker
                theme: 'classic', // You can also use 'monolith' or 'nano' themes
                default: color1, // Default color
                swatches: [ // Optional: Define a set of swatches
                    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'
                ],
                components: {
                    preview: true, // Show preview of selected color
                    opacity: true, // Show opacity slider
                    hue: true, // Show hue slider
                    interaction: {
                        hex: true, // Allow hex input
                        rgba: true, // Allow rgba input
                        input: true // Allow direct input
                    }
                }
            });









            // Initialize the Pickr color picker
            pickr5 = Pickr.create({
                el: '#color-picker5', // Target the div where you want the color picker
                theme: 'classic', // You can also use 'monolith' or 'nano' themes
                default: color2, // Default color
                swatches: [ // Optional: Define a set of swatches
                    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'
                ],
                components: {
                    preview: true, // Show preview of selected color
                    opacity: true, // Show opacity slider
                    hue: true, // Show hue slider
                    interaction: {
                        hex: true, // Allow hex input
                        rgba: true, // Allow rgba input
                        input: true // Allow direct input
                    }
                }
            });










            // Initialize the Pickr color picker
            pickr6 = Pickr.create({
                el: '#color-picker6', // Target the div where you want the color picker
                theme: 'classic', // You can also use 'monolith' or 'nano' themes
                default: color3, // Default color
                swatches: [ // Optional: Define a set of swatches
                    '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'
                ],
                components: {
                    preview: true, // Show preview of selected color
                    opacity: true, // Show opacity slider
                    hue: true, // Show hue slider
                    interaction: {
                        hex: true, // Allow hex input
                        rgba: true, // Allow rgba input
                        input: true // Allow direct input
                    }
                }
            });







            let picker4 = document.getElementsByClassName('pcr-app')[3]
            let picker5 = document.getElementsByClassName('pcr-app')[4]
            let picker6 = document.getElementsByClassName('pcr-app')[5]


            let parentDiv2 = document.getElementById('modal-body-edit')

            parentDiv2.appendChild(picker4)
            parentDiv2.appendChild(picker5)
            parentDiv2.appendChild(picker6)






            document.getElementById('colorDisplay4').addEventListener('click', function () {
                document.getElementsByClassName('pcr-app')[3].className = 'pcr-app visible'
                document.getElementsByClassName('pcr-app')[3].style.display = 'flex'
                document.getElementsByClassName('pcr-app')[4].style.display = 'none'
                document.getElementsByClassName('pcr-app')[5].style.display = 'none'
                // Event listener to update the color value and the display box when the color changes
                pickr4.on('change', (color) => {
                    const selectedColor = color.toHEXA().toString(); // Get HEX color
                    document.getElementById('colorValue4').textContent = selectedColor; // Update the text
                    document.getElementById('colorDisplay4').style.backgroundColor = selectedColor; // Update display
                });


            })






            document.getElementById('colorDisplay5').addEventListener('click', function () {
                document.getElementsByClassName('pcr-app')[4].className = 'pcr-app visible'
                document.getElementsByClassName('pcr-app')[4].style.display = 'flex'
                document.getElementsByClassName('pcr-app')[3].style.display = 'none'
                document.getElementsByClassName('pcr-app')[5].style.display = 'none'
                // Event listener to update the color value and the display box when the color changes
                pickr5.on('change', (color) => {
                    const selectedColor = color.toHEXA().toString(); // Get HEX color
                    document.getElementById('colorValue5').textContent = selectedColor; // Update the text
                    document.getElementById('colorDisplay5').style.backgroundColor = selectedColor; // Update display
                });


            })






            document.getElementById('colorDisplay6').addEventListener('click', function () {
                document.getElementsByClassName('pcr-app')[5].className = 'pcr-app visible'
                document.getElementsByClassName('pcr-app')[5].style.display = 'flex'
                document.getElementsByClassName('pcr-app')[3].style.display = 'none'
                document.getElementsByClassName('pcr-app')[4].style.display = 'none'
                // Event listener to update the color value and the display box when the color changes
                pickr6.on('change', (color) => {
                    const selectedColor = color.toHEXA().toString(); // Get HEX color
                    document.getElementById('colorValue6').textContent = selectedColor; // Update the text
                    document.getElementById('colorDisplay6').style.backgroundColor = selectedColor; // Update display
                });


            })





            let cropper2; // Reference to the cropper instance

            // Handle image upload
            document.getElementById('image-upload2').addEventListener('change', function (event) {
                let file = event.target.files[0];
                if (file) {
                    let reader = new FileReader();
                    reader.onload = function (e) {
                        // Set the uploaded image to the <img> element
                        let imageElement = document.getElementById('image-previewEdit');
                        imageElement.src = e.target.result;
                        imageElement.style.display = 'block'; // Show image element

                        // Reset the cropper instance if one exists
                        if (cropper2) {
                            cropper2.destroy(); // Destroy the previous cropper instance if it exists  
                        }

                        // Initialize the Cropper.js instance with the new image
                        cropper2 = new Cropper(imageElement, {
                            aspectRatio: 0 / 0,
                            viewMode: 2, // Ensure the crop area is restricted to the image size
                            autoCropArea: 1, // Automatically fill the entire image with the crop area
                            responsive: true, // Ensure responsive resizing of the cropper
                            cropBoxResizable: true, // Allow resizing of the crop box
                            background: true, // Allow background dimming
                            ready: function () {
                                // Automatically zoom in to fill the crop area to the image size
                                cropper2.zoomTo(0);
                            },


                            cropstart() {
                                // Hide the custom cursor when cropping starts (dragging or resizing)
                                document.getElementsByClassName('cursor')[0].style.display = 'block';

                            },
                            cropmove(event) {
                                document.getElementsByClassName('cursor')[0].style.display = 'block';
                            },
                            cropend() {
                                // Hide the custom cursor when cropping ends (dragging or resizing)
                                document.getElementsByClassName('cursor')[0].style.display = 'block';
                            },

                        });




                    };
                    reader.readAsDataURL(file);

                    // Reset the file input value so the same file can be selected again
                    event.target.value = ''; // Clear the input field value
                }
            });

            // Handle the cropping process
            saveButton.addEventListener('focus', function () {
                if (cropper2) {
                    // Get the cropped image data as a Data URL
                    const canvas = cropper2.getCroppedCanvas();
                    const croppedImageURL = canvas.toDataURL('image/png');

                    // Apply border-radius to the cropped image using a temporary canvas
                    const radius = 20; // Set the border-radius here

                    // Create a temporary canvas to apply the border-radius effect
                    let tempCanvas = document.createElement('canvas');
                    let tempCtx = tempCanvas.getContext('2d');

                    // Set canvas dimensions to match the cropped canvas
                    tempCanvas.width = canvas.width;
                    tempCanvas.height = canvas.height;

                    // Draw a rounded rectangle on the temporary canvas
                    tempCtx.beginPath();
                    tempCtx.moveTo(radius, 0);
                    tempCtx.lineTo(tempCanvas.width - radius, 0);
                    tempCtx.quadraticCurveTo(tempCanvas.width, 0, tempCanvas.width, radius);
                    tempCtx.lineTo(tempCanvas.width, tempCanvas.height - radius);
                    tempCtx.quadraticCurveTo(tempCanvas.width, tempCanvas.height, tempCanvas.width - radius, tempCanvas.height);
                    tempCtx.lineTo(radius, tempCanvas.height);
                    tempCtx.quadraticCurveTo(0, tempCanvas.height, 0, tempCanvas.height - radius);
                    tempCtx.lineTo(0, radius);
                    tempCtx.quadraticCurveTo(0, 0, radius, 0);
                    tempCtx.closePath();
                    tempCtx.clip();

                    // Draw the cropped image onto the temporary canvas with rounded corners
                    tempCtx.drawImage(canvas, 0, 0);

                    // Convert the temporary canvas to a data URL
                    const roundedCroppedImageURL = tempCanvas.toDataURL('image/png');
                    document.getElementById('image-previewEdit').src = roundedCroppedImageURL

                    // Set the cropped and rounded image to the result <img> element
                } else {

                }
            });


            document.getElementById('colorDisplay4').click()



        })


        optionButtonsDiv.appendChild(deleteButton);
        optionButtonsDiv.appendChild(editButton);

        // Append the buttons to the music player
        musicPlayerDiv.appendChild(optionButtonsDiv);

        // Finally, append the whole music player div to the imgId container
        imgContainer.appendChild(musicPlayerDiv);

        // Function to create color divs
        function createColorDiv(colorNumber, colorValue) {
            const itemAddDiv = document.createElement('div');
            itemAddDiv.classList.add('itemAdd');
            itemAddDiv.style = 'flex-direction: column; text-align: center; justify-content: center; align-items: center;';

            const colorText = document.createElement('p');
            colorText.textContent = `Color ${colorNumber}:`;
            itemAddDiv.appendChild(colorText);

            const colorDisplayDiv = document.createElement('div');
            colorDisplayDiv.classList.add('color-display');
            colorDisplayDiv.style.backgroundColor = colorValue;

            itemAddDiv.appendChild(colorDisplayDiv);

            return itemAddDiv;
        }

    }


    const clickCursor = document.getElementById('clickCursor');
    const buttons = document.querySelectorAll(`button,.color-display,#image-upload,label,.pcr-type`);



    // Move the custom cursor based on mouse movement
    document.addEventListener('mousemove', (e) => {
        clickCursor.style.left = `${e.pageX + 20}px`;
        clickCursor.style.top = `${e.pageY + 20}px`;
    });

    // Loop through all the buttons and add the event listeners
    buttons.forEach(button => {
        // Show the custom cursor when hovering over the button
        button.addEventListener('pointerover', () => {
            clickCursor.style.display = 'block'; // Show the custom cursor
        });

        // Hide the custom cursor when mouse leaves the button
        button.addEventListener('pointerout', () => {
            clickCursor.style.display = 'none'; // Hide the custom cursor
        });
    });



    const inputPicker = document.querySelectorAll(`.pcr-result`);

    // Loop through all the buttons and add the event listeners
    inputPicker.forEach(button => {
        // Show the custom cursor when hovering over the button
        button.addEventListener('pointerover', () => {
            penCursor.style.display = 'block'; // Show the custom cursor
        });

        // Hide the custom cursor when mouse leaves the button
        button.addEventListener('pointerout', () => {
            penCursor.style.display = 'none'; // Hide the custom cursor
        });
    });





})






let thumb = document.getElementsByClassName('imgGojo');
let statsClass = document.getElementsByClassName('stats')
let statsTitleClass = document.getElementsByClassName('statsTitle')

for (const element of thumb) {
    element.addEventListener('pointerover', function () {
        for (const element1 of statsClass) {
            element1.style.display = "flex"
        }


        for (const element2 of statsTitleClass) {
            element2.style.display = "flex"
        }


    });

    element.addEventListener('pointerout', function () {
        for (const element1 of statsClass) {
            element1.style.display = "none"
        }


        for (const element2 of statsTitleClass) {
            element2.style.display = "none"
        }

    });
}




// Track mouse movement and update the position of the custom cursor
//e.page são as cordenadas do ponteiro do mouse
//mas a div cursor não fica exatamente no click do ponteiro
//então temos que subtrair metade para que a div fique centralizada no meio
//conseguimos isso ao pegar o widht e height da div e dividir por 2
const cursor = document.querySelector('.cursor');


document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;


});







document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0]; // Get the first touch point

    // Move the cursor to the touch position
    cursor.style.left = `${touch.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${touch.pageY - cursor.offsetHeight / 2}px`;

    // Optionally, you can add a class or style to show the cursor when touched.
    cursor.style.display = 'block';  // Make sure it's visible when touched
});







document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0]; // Get the first touch point

    // Move the cursor to the touch position
    cursor.style.left = `${touch.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${touch.pageY - cursor.offsetHeight / 2}px`;

    // Optionally, you can add a class or style to show the cursor when touched.
    cursor.style.display = 'block';  // Make sure it's visible when touched
});



document.addEventListener('drag', (e) => {
    const touch = e.touches[0]; // Get the first touch point

    // Move the cursor to the touch position
    cursor.style.left = `${touch.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${touch.pageY - cursor.offsetHeight / 2}px`;

    // Optionally, you can add a class or style to show the cursor when touched.
    cursor.style.display = 'block';  // Make sure it's visible when touched
});




document.addEventListener('drag', (e) => {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
    cursor.style.display = 'block';
});







const clickCursor = document.getElementById('clickCursor');
const buttons = document.querySelectorAll(`button,.color-display,#image-upload,.pcr-type`);


// Move the custom cursor based on mouse movement
document.addEventListener('mousemove', (e) => {
    clickCursor.style.left = `${e.pageX + 20}px`;
    clickCursor.style.top = `${e.pageY + 20}px`;
});



document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0]; // Get the first touch point

    // Move the cursor to the touch position
    clickCursor.style.left = `${touch.pageX + 20}px`;
    clickCursor.style.top = `${touch.pageY + 20}px`;


});


// Loop through all the buttons and add the event listeners
buttons.forEach(button => {
    // Show the custom cursor when hovering over the button
    button.addEventListener('pointerover', () => {
        clickCursor.style.display = 'block'; // Show the custom cursor
    });

    // Hide the custom cursor when mouse leaves the button
    button.addEventListener('pointerout', () => {
        clickCursor.style.display = 'none'; // Hide the custom cursor
    });


});








const penCursor = document.getElementById('penCursor');
const input = document.getElementById(`name`);


// Move the custom cursor based on mouse movement
document.addEventListener('mousemove', (e) => {
    penCursor.style.left = `${e.pageX + 20}px`;
    penCursor.style.top = `${e.pageY + 20}px`;
});




document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0]; // Get the first touch point

    // Move the cursor to the touch position
    penCursor.style.left = `${touch.pageX + 20}px`;
    penCursor.style.top = `${touch.pageY + 20}px`;


});

// Loop through all the buttons and add the event listeners

// Show the custom cursor when hovering over the button
input.addEventListener('pointerover', () => {
    penCursor.style.display = 'block'; // Show the custom cursor
});

// Hide the custom cursor when mouse leaves the button
input.addEventListener('pointerout', () => {
    penCursor.style.display = 'none'; // Hide the custom cursor
});











const inputPicker = document.querySelectorAll(`.pcr-result`);

// Loop through all the buttons and add the event listeners
inputPicker.forEach(button => {
    // Show the custom cursor when hovering over the button
    button.addEventListener('pointerover', () => {
        penCursor.style.display = 'block'; // Show the custom cursor
    });

    // Hide the custom cursor when mouse leaves the button
    button.addEventListener('pointerout', () => {
        penCursor.style.display = 'none'; // Hide the custom cursor
    });
});




const divs = document.querySelectorAll(`#song`);

// Loop through all the buttons and add the event listeners
divs.forEach(div => {

    div.style.setProperty('cursor', 'crosshair', 'important');
    // Show the custom cursor when hovering over the button
    div.addEventListener('scroll', () => {
        document.getElementsByClassName('cursor')[0].style.display = 'block'; // Show the custom cursor
    });

});






let currentAudioPlaying;
let currentBtnPlay;
let currentBtnPause;
let currentId;

arraySong.forEach((song) => {




    document.getElementById(`audioPlay${song.nameSong}`).addEventListener('click', function () {





        const imageAudioBar = document.getElementById('audioVolumeMusicBarImg')
        const audioSong = document.getElementById(`audio${song.nameSong}`)



        const audioTeste = document.getElementById(`audio${song.nameSong}`)
        currentAudioPlaying = audioTeste.id
        currentBtnPlay = `audioPlay${song.nameSong}`
        currentBtnPause = `audioPause${song.nameSong}`
        currentId = song.nameSong
        console.log(currentAudioPlaying);

        const imgMusicBar = document.getElementById('musicBarImg')
        const musicBarAudioTrackMinus30 = divMusicBarLenght - 30
        imgMusicBar.src = song.wallPaper



        audioTeste.addEventListener('timeupdate', function () {
            if (!isManualUpdate) {  // Only update if not manually dragging
                audioTrack(audioTeste.duration, audioTeste.currentTime, musicBarAudioTrackMinus30);
            }
        });





        document.getElementById(`audio${song.nameSong}`).play();

        if (audioSong.volume >= 0 && audioSong.volume <= 0.2 && `audio${song.nameSong}` == `audio${currentId}`) {
            imageAudioBar.src = 'img/volumeLow.png'
        }

        else if (audioSong.volume >= 0.3 && audioSong.volume <= 0.5 && `audio${song.nameSong}` == `audio${currentId}`) {
            imageAudioBar.src = 'img/volumeMedium.png'
        }

        else if (audioSong.volume >= 0.6 && audioSong.volume <= 1 && `audio${song.nameSong}` == `audio${currentId}`) {
            imageAudioBar.src = 'img/volume.png'
        }


        document.getElementById(`audioPause${song.nameSong}`).style.display = 'flex'
        document.getElementById(`audioPlay${song.nameSong}`).style.display = 'none'



        document.getElementById(`audioPauseMusicBar`).style.display = 'flex'
        document.getElementById(`audioPlayMusicBar`).style.display = 'none'



        for (var i = 0; i < arraySong.length; i++) {

            if ((arraySong[i].nameSong).includes(song.nameSong)) {
                document.getElementById(`audio${song.nameSong}`).play();
            }

            else {
                document.getElementById(`audio${arraySong[i].nameSong}`).pause()
                document.getElementById(`audioPlay${arraySong[i].nameSong}`).style.display = 'flex'
                document.getElementById(`audioPause${arraySong[i].nameSong}`).style.display = 'none'
            }

        }

    })

    document.getElementById(`audioPause${song.nameSong}`).addEventListener('click', function () {
        document.getElementById(`audio${song.nameSong}`).pause();

        document.getElementById(`audioPlay${song.nameSong}`).style.display = 'flex'
        document.getElementById(`audioPause${song.nameSong}`).style.display = 'none'



        document.getElementById(`audioPlayMusicBar`).style.display = 'flex'
        document.getElementById(`audioPauseMusicBar`).style.display = 'none'


    })







    document.getElementById(`audioVolume${song.nameSong}`).addEventListener('click', function () {
        document.getElementById(`audio${song.nameSong}`).muted = true

        document.getElementById(`audioVolume${song.nameSong}`).style.display = 'none'
        document.getElementById(`audioMutado${song.nameSong}`).style.display = 'flex'

    })


    document.getElementById(`audioMutado${song.nameSong}`).addEventListener('click', function () {
        document.getElementById(`audio${song.nameSong}`).muted = false

        document.getElementById(`audioMutado${song.nameSong}`).style.display = 'none'
        document.getElementById(`audioVolume${song.nameSong}`).style.display = 'flex'


    })


})









let picker = document.getElementsByClassName('pcr-app')[0]
let picker2 = document.getElementsByClassName('pcr-app')[1]
let picker3 = document.getElementsByClassName('pcr-app')[2]
let parentDiv = document.getElementById('modal-body-img')
parentDiv.appendChild(picker)
parentDiv.appendChild(picker2)
parentDiv.appendChild(picker3)











arraySong.forEach((song) => {

    const volumeCircle = document.getElementById(`volumeCircle${song.nameSong}`);
    const imageAudioBar = document.getElementById('audioVolumeMusicBarImg')
    const audioSong = document.getElementById(`audio${song.nameSong}`)

    let isDragging1 = false;
    let offsetX;

    // Mouse down event to start dragging
    volumeCircle.addEventListener("mousedown", function (event) {
        isDragging1 = true;
        offsetX = event.clientX - volumeCircle.offsetLeft;
        console.log('oi');

    });

    // Mouse move event to move the element
    document.addEventListener("mousemove", function (event) {
        if (isDragging1) {

            if ((event.clientX - offsetX) < 0) {
                volumeCircle.style.left = '0px'
                audioSong.volume = 0

            }

            else if ((event.clientX - offsetX) > 20) {
                volumeCircle.style.left = '20px'
                audioSong.volume = 1
            }

            else {
                volumeCircle.style.left = event.clientX - offsetX + "px";
                audioSong.volume = (event.clientX - offsetX) / 20
            }






            if (audioSong.volume >= 0 && audioSong.volume <= 0.2 && `audio${song.nameSong}` == `audio${currentId}`) {
                imageAudioBar.src = 'img/volumeLow.png'
            }

            else if (audioSong.volume >= 0.3 && audioSong.volume <= 0.5 && `audio${song.nameSong}` == `audio${currentId}`) {
                imageAudioBar.src = 'img/volumeMedium.png'
            }

            else if (audioSong.volume >= 0.6 && audioSong.volume <= 1 && `audio${song.nameSong}` == `audio${currentId}`) {
                imageAudioBar.src = 'img/volume.png'
            }






        }
    });

    // Mouse up event to stop dragging
    document.addEventListener("mouseup", function () {
        isDragging1 = false;
    });










    let isDragging2
    // Mouse down event to start dragging
    volumeCircle.addEventListener("touchstart", function (event) {
        isDragging2 = true;
        offsetX = event.touches[0].clientX; - volumeCircle.offsetLeft;
        console.log('oi');

    });

    // Mouse move event to move the element
    document.addEventListener("touchmove", function (event) {
        if (isDragging2) {

            document.getElementById('song').style.overflowX = 'hidden'


            if ((event.touches[0].clientX - offsetX) < 0) {
                volumeCircle.style.left = '0px'
                audioSong.volume = 0

            }

            else if ((event.touches[0].clientX - offsetX) > 20) {
                volumeCircle.style.left = '20px'
                audioSong.volume = 1
            }

            else {
                volumeCircle.style.left = event.touches[0].clientX - offsetX + "px";
                audioSong.volume = (event.touches[0].clientX - offsetX) / 20
            }




            if (audioSong.volume >= 0 && audioSong.volume <= 0.2 && `audio${song.nameSong}` == `audio${currentId}`) {
                imageAudioBar.src = 'img/volumeLow.png'
            }

            else if (audioSong.volume >= 0.3 && audioSong.volume <= 0.5 && `audio${song.nameSong}` == `audio${currentId}`) {
                imageAudioBar.src = 'img/volumeMedium.png'
            }

            else if (audioSong.volume >= 0.6 && audioSong.volume <= 1 && `audio${song.nameSong}` == `audio${currentId}`) {
                imageAudioBar.src = 'img/volume.png'
            }







        }
    });

    // Mouse up event to stop dragging
    document.addEventListener("touchend", function () {
        isDragging2 = false;
        document.getElementById('song').style.overflowX = 'scroll'
    });




})












// const volumeCircleMusicBar = document.getElementById(`musicBarCircle`);
// const divMusicBarLenght = document.getElementById(`musicBarAudioTrack`).offsetWidth;

// let isDragging3 = false;
// let isManualUpdate = false;
// let offsetX;
// let animationFrameRequested = false; // To throttle the requests

// // Mouse down event to start dragging
// volumeCircleMusicBar.addEventListener("mousedown", function (event) {
//     isDragging3 = true;
//     offsetX = event.clientX - volumeCircleMusicBar.offsetLeft;
//     isManualUpdate = true;  // Mark as manual update
// });

// // Function to handle the drag logic
// function moveCircle(event) {
//     if (isDragging3) {
//         let newLeft = event.clientX - offsetX;

//         // Constrain the circle's movement within the music bar's width
//         if (newLeft < 0) {
//             volumeCircleMusicBar.style.left = '0px';
//         } else if (newLeft > divMusicBarLenght - 30) {
//             volumeCircleMusicBar.style.left = `${divMusicBarLenght - 30}px`;
//         } else {
//             volumeCircleMusicBar.style.left = `${newLeft}px`;
//         }

//         // Sync the current time with the circle's position
//         const currentAudio = document.getElementById(currentAudioPlaying);
//         const musicBarAudioTrackMinus30 = divMusicBarLenght - 30;
//         circleTrack(currentAudio.duration, musicBarAudioTrackMinus30, currentAudio.id);
//     }
// }

// // Mouse move event to move the element (optimized with requestAnimationFrame)
// document.addEventListener("mousemove", function (event) {
//     if (isDragging3 && !animationFrameRequested) {
//         // Throttle the movement to only update on the next available frame
//         animationFrameRequested = true;
//         requestAnimationFrame(function () {
//             moveCircle(event);  // Call the function to update the circle position
//             animationFrameRequested = false;  // Allow the next frame to update
//         });
//     }
// });

// // Mouse up event to stop dragging
// document.addEventListener("mouseup", function () {
//     isDragging3 = false;
//     isManualUpdate = false;
// });












const volumeCircleMusicBar = document.getElementById('musicBarCircle');
const divMusicBarLenght = document.getElementById('musicBarAudioTrack').offsetWidth;
let isDragging3 = false;
let isManualUpdate = false;
let offsetX;
let animationFrameRequested = false; // To throttle the requests

// Mouse down event to start dragging
volumeCircleMusicBar.addEventListener('mousedown', function (event) {
    isDragging3 = true;
    offsetX = event.clientX - volumeCircleMusicBar.offsetLeft;
    isManualUpdate = true;  // Mark as manual update
});

// Function to handle the drag logic
function moveCircle(event) {
    if (isDragging3) {
        let newLeft = event.clientX - offsetX;

        // Constrain the circle's movement within the music bar's width
        if (newLeft < 0) {
            volumeCircleMusicBar.style.left = '0px';
        } else if (newLeft > divMusicBarLenght - 30) {
            volumeCircleMusicBar.style.left = `${divMusicBarLenght - 30}px`;
        } else {
            volumeCircleMusicBar.style.left = `${newLeft}px`;
        }
    }
}

// Mouse move event to move the element (optimized with requestAnimationFrame)
document.addEventListener('mousemove', function (event) {
    if (isDragging3 && !animationFrameRequested) {
        // Throttle the movement to only update on the next available frame
        animationFrameRequested = true;
        requestAnimationFrame(function () {
            moveCircle(event);  // Call the function to update the circle position
            animationFrameRequested = false;  // Allow the next frame to update
        });
    }
});

// Mouse up event to stop dragging and update audio
document.addEventListener('mouseup', function () {
    if (isDragging3) {
        isDragging3 = false;
        isManualUpdate = false;

        // When dragging ends, update the audio position to the circle's final location
        const currentAudio = document.getElementById(currentAudioPlaying);
        const musicBarAudioTrackMinus30 = divMusicBarLenght - 30;

        // Sync the current time with the circle's final position
        const finalPosition = volumeCircleMusicBar.offsetLeft;
        const reason = musicBarAudioTrackMinus30 / currentAudio.duration;
        currentAudio.currentTime = finalPosition / reason;

        // Optionally, trigger the audio to continue playing after sync
        currentAudio.play();

        // Optional: Update other UI elements here (e.g., pause/play buttons)
    }
});










// const volumeCircleMusicBar = document.getElementById(`musicBarCircle`);
// const divMusicBarLenght = document.getElementById(`musicBarAudioTrack`).offsetWidth;





// let isDragging3 = false;
// let isManualUpdate = false;
// let offsetX;





// // Mouse down event to start dragging
// volumeCircleMusicBar.addEventListener("mousedown", function (event) {
//     isDragging3 = true;
//     offsetX = event.clientX - volumeCircleMusicBar.offsetLeft;
//     isManualUpdate = true;  // Mark as manual update



// });




// // Mouse move event to move the element
// document.addEventListener("mousemove", function (event) {




//     if (isDragging3) {



//         if ((event.clientX - offsetX) < 0) {
//             volumeCircleMusicBar.style.left = '0px'

//         }

//         else if ((event.clientX - offsetX) > divMusicBarLenght - 30) {
//             volumeCircleMusicBar.style.left = `${divMusicBarLenght - 30}px`


//         }

//         else {
//             volumeCircleMusicBar.style.left = event.clientX - offsetX + "px";


//         }

//         const currentAudio = document.getElementById(currentAudioPlaying)
//         const musicBarAudioTrackMinus30 = divMusicBarLenght - 30


//         circleTrack(currentAudio.duration,musicBarAudioTrackMinus30,currentAudio.id)




//     }


// });

// // Mouse up event to stop dragging
// document.addEventListener("mouseup", function () {
//     isDragging3 = false;
//     isManualUpdate = false;

// });















// Mouse down event to start dragging
volumeCircleMusicBar.addEventListener('touchstart', function (event) {
    isDragging3 = true;
    offsetX = event.touches[0].clientX - volumeCircleMusicBar.offsetLeft;
    isManualUpdate = true;  // Mark as manual update
});

// Function to handle the drag logic
function moveCircleTouch(event) {
    if (isDragging3) {
        let newLeft = event.touches[0].clientX - offsetX;

        // Constrain the circle's movement within the music bar's width
        if (newLeft < 0) {
            volumeCircleMusicBar.style.left = '0px';
        } else if (newLeft > divMusicBarLenght - 30) {
            volumeCircleMusicBar.style.left = `${divMusicBarLenght - 30}px`;
        } else {
            volumeCircleMusicBar.style.left = `${newLeft}px`;
        }
    }
}

// Mouse move event to move the element (optimized with requestAnimationFrame)
document.addEventListener('touchmove', function (event) {
    if (isDragging3 && !animationFrameRequested) {
        // Throttle the movement to only update on the next available frame
        animationFrameRequested = true;
        requestAnimationFrame(function () {
            moveCircleTouch(event);  // Call the function to update the circle position
            animationFrameRequested = false;  // Allow the next frame to update
        });
    }
});

// Mouse up event to stop dragging and update audio
document.addEventListener('touchend', function () {
    if (isDragging3) {
        isDragging3 = false;
        isManualUpdate = false;

        // When dragging ends, update the audio position to the circle's final location
        const currentAudio = document.getElementById(currentAudioPlaying);
        const musicBarAudioTrackMinus30 = divMusicBarLenght - 30;

        // Sync the current time with the circle's final position
        const finalPosition = volumeCircleMusicBar.offsetLeft;
        const reason = musicBarAudioTrackMinus30 / currentAudio.duration;
        currentAudio.currentTime = finalPosition / reason;

        // Optionally, trigger the audio to continue playing after sync
        currentAudio.play();

        // Optional: Update other UI elements here (e.g., pause/play buttons)
    }
});





// const audioTeste = document.getElementById('audioTeste')
// const musicBarAudioTrackMinus30 = divMusicBarLenght - 30

// audioTeste.addEventListener('timeupdate', () => {
//     audioTrack(audioTeste.duration, audioTeste.currentTime, musicBarAudioTrackMinus30)
// });




// function audioTrack(duration, currentTimeTrack, divLenght) {

//     let reason = divLenght / duration

//     let reasonMovingCircle = currentTimeTrack * reason
//     volumeCircleMusicBar.style.left = `${reasonMovingCircle}px`



// }


function circleTrack(duration, divLenght, audio) {

    let reason = divLenght / duration
    let reasonMovingAudioTrack = volumeCircleMusicBar.offsetLeft / reason
    document.getElementById(audio).currentTime = reasonMovingAudioTrack
    document.getElementById(audio).play()


    console.log(reason);
    console.log(divLenght);
    console.log(duration);
    console.log(volumeCircleMusicBar.offsetLeft);

}


function audioTrack(duration, currentTimeTrack, divLenght) {
    let reason = divLenght / duration
    let reasonMovingCircle = currentTimeTrack * reason
    volumeCircleMusicBar.style.left = `${reasonMovingCircle}px`
}


console.log(currentAudioPlaying);


document.getElementById('audioPlayMusicBar').addEventListener('click', function () {


    document.getElementById(`${currentAudioPlaying}`).play();

    document.getElementById(`audioPauseMusicBar`).style.display = 'flex'
    document.getElementById(`audioPlayMusicBar`).style.display = 'none'

    document.getElementById(`${currentBtnPause}`).style.display = 'flex'
    document.getElementById(`${currentBtnPlay}`).style.display = 'none'


})




document.getElementById(`audioPauseMusicBar`).addEventListener('click', function () {
    document.getElementById(`${currentAudioPlaying}`).pause();

    document.getElementById(`audioPlayMusicBar`).style.display = 'flex'
    document.getElementById(`audioPauseMusicBar`).style.display = 'none'

    document.getElementById(`${currentBtnPlay}`).style.display = 'flex'
    document.getElementById(`${currentBtnPause}`).style.display = 'none'



})



document.getElementById('audioVolumeMusicBar').addEventListener('click', function () {


    const volumeCircle = document.getElementById(`volumeCircle${currentId}`);
    const audioSong = document.getElementById(`audio${currentId}`)
    const imageAudioBar = document.getElementById('audioVolumeMusicBarImg')
    let currentVolume = audioSong.volume
    let currentVolumeCirclePosition = volumeCircle.offsetLeft

    if ((currentVolume + 0.1) > 1) {
        audioSong.volume = 0
        volumeCircle.style.left = `${0}px`
    }
    else {
        audioSong.volume = currentVolume + 0.1
        volumeCircle.style.left = `${currentVolumeCirclePosition + 2}px`
    }


    if (audioSong.volume >= 0 && audioSong.volume <= 0.2) {
        imageAudioBar.src = 'img/volumeLow.png'
    }

    else if (audioSong.volume >= 0.3 && audioSong.volume <= 0.5) {
        imageAudioBar.src = 'img/volumeMedium.png'
    }

    else if (audioSong.volume >= 0.6 && audioSong.volume <= 1) {
        imageAudioBar.src = 'img/volume.png'
    }



})




