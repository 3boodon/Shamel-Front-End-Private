/*
Template Name: Hybrix - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: search-result init js
*/

// Images Slider menu
var swiper = new Swiper(".images-menu", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

function _toConsumableArray(arr) { 
    if (Array.isArray(arr)) { 
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { 
            arr2[i] = arr[i]; 
        } return arr2; 
    } else { 
        return Array.from(arr); 
    } 
}

//  gallery-card
var galleryCardElm = document.querySelectorAll('#gallery-element > .col-lg-4 .gallery-card');
var nextBtn = document.querySelector('#next-btn');
var prevBtn = document.querySelector('#prev-btn');
galleryCardElm.refIndex = [].concat(_toConsumableArray(galleryCardElm)).findIndex(function (li) {
    return li.classList.contains('bg-light');
});

btnClickEvent();

// galleryCardElm
galleryCardElm.forEach(function (li, indx, arr) {
    li.onclick = function () {
        galleryCardElm.refIndex = indx;
        arr.forEach(function (z) {
            return z.classList.toggle('bg-light', z === li);
        });

        btnClickEvent();

        var overviewElem = document.getElementById("overview-cardelem");

        if(overviewElem.classList.contains("d-none")){
            overviewElem.classList.remove("d-none");
        }
    };
});

document.querySelector("#gallerycard-overview .btn-close").addEventListener("click", function(){
    document.getElementById("overview-cardelem").classList.add("d-none")
});

nextBtn.onclick = function () {
    return btnClickEvent(+1);
};
prevBtn.onclick = function () {
    return btnClickEvent(-1);
};
// btnClickEvent
function btnClickEvent() {
    var moving = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

    var newPosition = galleryCardElm.refIndex + moving;

    if (moving !== 0) {
        galleryCardElm[galleryCardElm.refIndex].classList.remove('bg-light');
        galleryCardElm[newPosition].classList.add('bg-light');
        galleryCardElm.refIndex = newPosition;
    }

    nextBtn.disabled = newPosition == galleryCardElm.length - 1;
    prevBtn.disabled = newPosition == 0;

    var activeElem = document.querySelector('#gallery-element > .col-lg-4 .gallery-card.bg-light');

    var galleryImg = activeElem.querySelector(".gallery-img").src;
    var captionTitle = activeElem.querySelector(".card-caption-title").innerHTML;
    var overviewDesc = activeElem.querySelector(".card-caption-desc").innerHTML;

    document.getElementById("current").src = galleryImg;
    document.querySelector("#gallerycard-overview .overview-title").innerHTML = captionTitle;
    document.querySelector("#gallerycard-overview .overview-desc").innerHTML = overviewDesc;
}