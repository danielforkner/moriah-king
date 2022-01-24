// All of the image names stored here, with their corresponding series
const seriesImg = {
    '0': ['image0,', 'image1', 'image2', 'image3', 'image4', 'image5'],
    '1': ['image0', 'image1', 'image2', 'image3']
}

// Property corresponds to series
const seriesTitles = {
    '0': 'Exploring China',
    '1': 'SpongeBob'
}

addClick()

const arrow = document.getElementById('arrowBtn');


// Hero Slider
arrow.addEventListener('click', () => {
    let series = document.querySelector('.hero__image').id.slice(-1);// gets the last char of the series name
    let len = Object.keys(seriesImg).length;
    let newSeries = (parseInt(series) + 1) % len; // conver the last char to int and compare to the length of the obj

    document.querySelector('.hero__image').src = `./public/series${newSeries}/image0.jpg`;
    document.querySelector('.hero__image').setAttribute('id', newSeries);    

    //change the bottom rows and the titles
    changeThumbnails(series, newSeries);
    changeTitle(newSeries);
    addClick(); // click has to be re-added

    //reset the main image
    resetMain();

});

function changeThumbnails(series, newSeries) {
    for (obj in seriesImg[series]) {
        //remove all thumbnail__image divs
        document.querySelector('.thumbnail__image').remove();
    }

    const newContainer = document.querySelector('.thumbnail__container');
    let count = 0;

    for (obj in seriesImg[newSeries]) {
        //create new img
        const newImg = document.createElement('img')
        newImg.src = `./public/series${newSeries}/image${count}.jpg`;
        newImg.className = 'thumbnail__image'

        //add all new thumbnail__image divs
        newContainer.appendChild(newImg);
        count += 1;
        console.log(count);
    }
}

function changeTitle(newSeries) {
        document.querySelector('.seriesTitle--text').innerText = `${seriesTitles[newSeries]}`
}

function resetMain() {
    document.querySelector('.main__image').src = "";
}

// Scroll effect
const fadeOut = () => {
    const heroContainer = document.querySelector('.hero__container');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if (scrollPos > 306 && scrollPos < 760) {
        heroContainer.classList.add('halfTransparent');
        heroContainer.classList.remove('fullTransparent')
        heroContainer.classList.remove('noTransparent');
    } else if (scrollPos > 760) {
        heroContainer.classList.remove('halfTransparent');
        heroContainer.classList.add('fullTransparent');
    } else if (scrollPos < 306) {
        heroContainer.classList.remove('halfTransparent');
        heroContainer.classList.remove('fullTransparent');
        heroContainer.classList.add('noTransparent')
    }
}

window.addEventListener('scroll', fadeOut);



// Add click function to the bottom row images
function addClick() {
    let images = document.getElementsByClassName('thumbnail__image');
    Array.from(images).forEach(function(img) {
        img.addEventListener('click', function() {
            let newImg = img.src;
            let oldImg = document.querySelector('.main__image').src;
            document.querySelector('.main__image').setAttribute('src', newImg);
            });
        });
};





