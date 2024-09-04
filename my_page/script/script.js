window.addEventListener("DOMContentLoaded", () => {

    const docEle = document.documentElement;
    const header = document.querySelector("header");
    const sec = document.querySelectorAll('.fullscreen');
    const wh = window.innerHeight;

    for (let i = 0; i < sec.length; i++) {
        sec[i].onwheel = (e) => {
            // 기본 이벤트 방지
            e.preventDefault();
            if (e.deltaY > 0) {
                // 마우스휠 내림
                // e.currentTarget는 이벤트가 발생한 요소
                if (docEle.scrollTop > wh * (sec.length - 2) + 100) return;
                let next = e.currentTarget.nextElementSibling.offsetTop;
                console.log('앗!', wh * (sec.length - 1) - 100, next);
                docEle.scrollTop = next;
                if (next >= 500) {
                    header.classList.add("action");
                }
            } else if (e.deltaY < 0) {
                // 마우스휠 올림
                if (docEle.scrollTop < wh) return;
                let prev = e.currentTarget.previousElementSibling.offsetTop;
                console.log(prev);
                docEle.scrollTop = prev;
                if (prev <= 0) {
                    header.classList.remove("action");
                }
            }
        };
    }

});