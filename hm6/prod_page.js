var carousel_img = document.querySelector('.carousel_item_img');
var images = ['single_page_main.png', 'single_page_main2.png','single_page_main3.png'];
var i = 0;

function prev() {
    if(i <= 0) {
        i = images.length;
    }
    i--;
    setImg();
}

function next() {
    if(i >= images.length - 1) {
        i = -1;
    }
    i++;
    setImg();
}

function setImg() {
    carousel_img.setAttribute('src', 'img/' + images[i]);
}

setImg();