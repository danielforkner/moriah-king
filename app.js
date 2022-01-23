// ALL OF THE IMAGES ACCESSED WITH THIS OBJECT
const seriesObj = {
    '0': ['image1', 'image2', 'image3', 'image4', 'image5', 'image6'],
    '1': ['image1', 'image2', 'image3', 'image4']
}

const arrow = document.getElementById('arrowBtn');


// CHANGE THE PHOTOS
arrow.addEventListener('click', () => {
    let series = parseInt(document.querySelector('.main__image').id);
    let len = Object.keys(seriesObj).length;
    let newSeries = (series + 1) % len;
    console.log('series', series);
    console.log(newSeries);
    document.querySelector('.main__image').src = `./public/series${newSeries}/image1.jpg`;
    document.querySelector('.main__image').setAttribute('id', newSeries);    
})