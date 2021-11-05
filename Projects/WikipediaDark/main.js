
const startupContainer = window.document.querySelector('.startup__container');
const enableCustom = window.document.querySelector('#enable_custom');
let clicks = 0;

enableCustom.addEventListener("click", () => {
    if (clicks == 0) {
        clicks++;
        startupContainer.style.backgroundImage = "url(https://www.butlerbranding.com/wp-content/uploads/2018/04/Mountain-and-Clouds-BG.jpg)";
    }
    else if (clicks == 1)
    {
        clicks++;
        startupContainer.style.backgroundImage = "url(https://www.protrekadventure.com/assets/image/trekimg/banner_5e81a13eab60a_1585553726.jpg)"
    }
    else if (clicks == 2)
    {
        clicks++;
        startupContainer.style.backgroundImage = "url(https://www.teahub.io/photos/full/27-275005_iphone-wallpaper-ocean-quotes.jpg)";
    }
    else {
        clicks = 0;
        startupContainer.style.backgroundImage = "url(https://images.wallpaperscraft.com/image/single/mountains_clouds_dusk_154131_1920x1080.jpg)";
    }
})
