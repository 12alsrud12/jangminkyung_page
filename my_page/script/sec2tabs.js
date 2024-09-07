window.addEventListener("DOMContentLoaded", () => {
    // 요소찾기
    const btn1 = document.querySelectorAll("#sec2-btn>li a")[0];
    const btn2 = document.querySelectorAll("#sec2-btn>li a")[1];
    const tab1 = document.querySelector("tab1");
    const tab2 = document.querySelector("tab2");

    function resetT2() {
        btn1.classList.remove("on");
        btn2.classList.remove("on");
        tab1.classList.remove("on");
        tab2.classList.remove("on");
    };

    btn1.onclick(() => {
        resetT2();
        btn1.classList.add("on");
        tab1.classList.add("on");
    });

    btn2.onclick(() => {
        resetT2();
        btn2.classList.add("on");
        tab2.classList.add("on");
    });
});