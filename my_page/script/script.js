window.addEventListener("DOMContentLoaded", () => {
    // 스크롤 이벤트를 위한 요소찾기
    const pppp = document.querySelector("#pppp");
    // 헤더 이벤트 요소찾기
    const header = document.querySelector("header");

    // 스크롤이벤트
    window.addEventListener("scroll", () => {
        pppp.innerHTML = Math.floor(pageYOffset);

        // header scroll event
        if (pppp.innerHTML >= 900) {
            header.classList.add("action");
        } else {
            header.classList.remove("action");
        };
    });
});