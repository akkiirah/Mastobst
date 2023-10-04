let bannerImages;
let bannerStopButton;
let bannerCounter;
let bannerCounterNum = 1;
let bannerPlaying = true;
let activeImg = 0;
let divider;
let oldImage;

bannerInit();

function bannerInit() {
    bannerImages = document.querySelectorAll('.banner_image');
    bannerStopButton = document.getElementById("banner_stop");
    bannerCounter = document.getElementById('banner_counter');
    divider = bannerFade.length+1;

    bannerFade(activeImg);
}

function bannerTransition(banner, num) {
    banner.style.opacity = num;
}

function bannerFade(_activeImg) {
    if(bannerPlaying) {
        if(oldImage) { bannerTransition(oldImage, 0); }

        oldImage = bannerImages[activeImg];
        console.log(bannerImages[_activeImg]);
        bannerTransition(bannerImages[_activeImg], 1);
        setTimeout(bannerCounterChange, 500)
        activeImg++;
    }
    
    if(activeImg > bannerImages.length-1) {activeImg = 0}
        
    console.log(activeImg);
    window.setTimeout(function() {bannerFade(activeImg)}, 5000);
}

bannerStopButton.addEventListener("click", bannerPlayStop);

function bannerPlayStop() {
    switch (bannerPlaying) {
        case false:
            bannerPlaying = true;
            bannerStopButton.innerHTML = "II";
            bannerStopButton.classList.remove('banner_paused');
            break;
        case true:
            bannerPlaying = false;
            bannerStopButton.innerHTML = "▷";
            bannerStopButton.classList.add('banner_paused');
            break;
    }
}
function bannerCounterChange() {
    if(bannerCounterNum > bannerImages.length) {bannerCounterNum = 1}
    bannerCounter.innerHTML = bannerCounterNum  + ' / ' + bannerImages.length;
    bannerCounterNum++;
}

/*

let bannerImages;
let bannerImagesLength;
let bannerStopButton;
let bannerCounter;
let bannerPlaying = true;
let activeImg = 0;
let divider;
let oldImage;

bannerInit();

function bannerInit() {
    bannerImages = document.querySelectorAll('.banner_image');
    bannerStopButton = document.getElementById('banner_stop');
    bannerCounter = document.getElementById('banner_counter');
    bannerImagesLength = bannerImages.length;
    divider = bannerImages.length+1;

    bannerFade(activeImg);
}

function bannerTransition(banner, num) {
    banner.style.opacity = num;
}

function bannerFade(_activeImg) {
    if(bannerPlaying) {
        if(oldImage) { bannerTransition(oldImage, 0); }

        oldImage = bannerImages[activeImg%divider];
    
        bannerTransition(bannerImages[_activeImg], 1);
        setTimeout(function() {bannerCounterChange(activeImg%divider)}, 500);
        activeImg++;
    }

    window.setTimeout(function() {bannerFade(activeImg%divider)}, 1000);
}

bannerStopButton.addEventListener("click", bannerPlayStop);

function bannerPlayStop() {
    switch (bannerPlaying) {
        case false:
            bannerPlaying = true;
            bannerStopButton.innerHTML = "II";
            bannerStopButton.classList.remove('banner_paused');
            break;
        case true:
            bannerPlaying = false;
            bannerStopButton.innerHTML = "▷";
            bannerStopButton.classList.add('banner_paused');
            break;
    }
}

*/







