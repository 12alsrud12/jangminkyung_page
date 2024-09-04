window.addEventListener("DOMContentLoaded", () => {
    const pScroll = document.querySelector("p#scroll");
    const header = document.querySelector("header");

    pScroll.window.addEventListener(scroll, () => {
        pScroll.innerHTML = Math.floor(pageYOffset);
    });
});