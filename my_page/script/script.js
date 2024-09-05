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
    };
    // tabs
    // tab 버튼 찾기
    const btn0 = document.querySelectorAll("#sec4 ul.btn>li")[0];
    const btn1 = document.querySelectorAll("#sec4 ul.btn>li")[1];
    const btn2 = document.querySelectorAll("#sec4 ul.btn>li")[2];
    const btn3 = document.querySelectorAll("#sec4 ul.btn>li")[3];
    const btn4 = document.querySelectorAll("#sec4 ul.btn>li")[4];
    const btn5 = document.querySelectorAll("#sec4 ul.btn>li")[5];
    const btn6 = document.querySelectorAll("#sec4 ul.btn>li")[6];
    const btn7 = document.querySelectorAll("#sec4 ul.btn>li")[7];
    // tab 부분

    const tab1 = document.querySelector("#tab1");
    const tab2 = document.querySelector("#tab2");
    const tab3 = document.querySelector("#tab3");
    const tab4 = document.querySelector("#tab4");
    const tab5 = document.querySelector("#tab5");
    const tab6 = document.querySelector("#tab6");
    const tab7 = document.querySelector("#tab7");
    const tab8 = document.querySelector("#tab8");

    // click 할 때 마다 리셋!
    function resetT() {
        // 버튼 효과 리셋
        btn0.classList.remove("on");
        btn1.classList.remove("on");
        btn2.classList.remove("on");
        btn3.classList.remove("on");
        btn4.classList.remove("on");
        btn5.classList.remove("on");
        btn6.classList.remove("on");
        btn7.classList.remove("on");
        // 탭 리셋
        tab1.classList.remove("on");
        tab2.classList.remove("on");
        tab3.classList.remove("on");
        tab4.classList.remove("on");
        tab5.classList.remove("on");
        tab6.classList.remove("on");
        tab7.classList.remove("on");
        tab8.classList.remove("on");
    };

    btn0.onclick = () => {
        resetT();
        btn0.classList.add("on");
        tab1.classList.add("on");
    };

    btn1.onclick = () => {
        resetT();
        btn1.classList.add("on");
        tab2.classList.add("on");
    };

    btn2.onclick = () => {
        resetT();
        btn2.classList.add("on");
        tab3.classList.add("on");
    };

    btn3.onclick = () => {
        resetT();
        btn3.classList.add("on");
        tab4.classList.add("on");
    };

    btn4.onclick = () => {
        resetT();
        btn4.classList.add("on");
        tab5.classList.add("on");
    };

    btn5.onclick = () => {
        resetT();
        btn5.classList.add("on");
        tab6.classList.add("on");
    };

    btn6.onclick = () => {
        resetT();
        btn6.classList.add("on");
        tab7.classList.add("on");
    };

    btn7.onclick = () => {
        resetT();
        btn7.classList.add("on");
        tab8.classList.add("on");
    };



});