// ALL OF THE IMAGES ACCESSED WITH THIS OBJECT
const seriesObj = {
    '0': ['image0,', 'image1', 'image2', 'image3', 'image4', 'image5'],
    '1': ['image0', 'image1', 'image2', 'image3']
}

const arrow = document.getElementById('arrowBtn');


// CHANGE THE PHOTOS
arrow.addEventListener('click', () => {
    let series = document.querySelector('.main__image').id;
    let len = Object.keys(seriesObj).length;
    let newSeries = (parseInt(series) + 1) % len;
    console.log('series', series);
    console.log('new series', newSeries);
    document.querySelector('.main__image').src = `./public/series${newSeries}/image0.jpg`;
    document.querySelector('.main__image').setAttribute('id', newSeries);    

    //call function to change the bottom row
    changeBottom(series, newSeries);
})

function changeBottom(series, newSeries) {
    for (obj in seriesObj[series]) {
        //remove all thumbnail__image divs
        document.querySelector('.thumbnail__image').remove();
    }

    const container = document.querySelector('.thumbnail__container');
    let count = 0;

    for (obj in seriesObj[newSeries]) {
        //create new img
        const newImg = document.createElement('img')
        newImg.src = `./public/series${newSeries}/image${count}.jpg`;
        newImg.className = 'thumbnail__image'

        //add all new thumbnail__image divs
        container.appendChild(newImg);
        count += 1;
        console.log(count);
    }
}