let bannerImages;
let bannerStopButton;
let bannerPlaying = true;
let activeImg = 0;
let divider;
let oldImage;

bannerInit();

function bannerInit() {
    bannerImages = document.querySelectorAll('.banner_image');
    bannerStopButton = document.getElementById("banner_stop");
    divider = bannerFade.length+1;

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
        
        activeImg++;
    }

    window.setTimeout(function() {bannerFade(activeImg%divider)}, 5000);
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



