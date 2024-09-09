window.addEventListener("DOMContentLoaded", () => {
    // 스크롤 이벤트를 위한 요소찾기
    const pppp = document.querySelector("#pppp");
    // 헤더 이벤트 요소찾기
    const header = document.querySelector("header");

    // 스크롤이벤트
    window.addEventListener("scroll", () => {
        pppp.innerHTML = Math.floor(pageYOffset);

        // header scroll event
        if (pppp.innerHTML >= 100) {
            header.classList.add("action");
        } else {
            header.classList.remove("action");
        };
    });

    // sec4 tab 요소찾기
    const s4Btn0 = document.querySelectorAll("#s4-btn>li")[0];
    const s4Btn1 = document.querySelectorAll("#s4-btn>li")[1];
    const s4Btn2 = document.querySelectorAll("#s4-btn>li")[2];
    const s4Btn3 = document.querySelectorAll("#s4-btn>li")[3];
    const s4Btn4 = document.querySelectorAll("#s4-btn>li")[4];
    const s4Btn5 = document.querySelectorAll("#s4-btn>li")[5];
    const s4tab0 = document.querySelectorAll("#s4-main-tab>li")[0];
    const s4tab1 = document.querySelectorAll("#s4-main-tab>li")[1];
    const s4tab2 = document.querySelectorAll("#s4-main-tab>li")[2];
    const s4tab3 = document.querySelectorAll("#s4-main-tab>li")[3];
    const s4tab4 = document.querySelectorAll("#s4-main-tab>li")[4];
    const s4tab5 = document.querySelectorAll("#s4-main-tab>li")[5];

    // sec4 tab 이벤트
    function resetT() {
        // sec4 tab btn
        s4Btn0.classList.remove("on");
        s4Btn1.classList.remove("on");
        s4Btn2.classList.remove("on");
        s4Btn3.classList.remove("on");
        s4Btn4.classList.remove("on");
        s4Btn5.classList.remove("on");
        // sec4 tab
        s4tab0.classList.remove("on");
        s4tab1.classList.remove("on");
        s4tab2.classList.remove("on");
        s4tab3.classList.remove("on");
        s4tab4.classList.remove("on");
        s4tab5.classList.remove("on");
    };

    s4Btn0.onclick = () => {
        resetT();
        s4Btn0.classList.add("on");
        s4tab0.classList.add("on");
    };

    s4Btn1.onclick = () => {
        resetT();
        s4Btn1.classList.add("on");
        s4tab1.classList.add("on");
    };

    s4Btn2.onclick = () => {
        resetT();
        s4Btn2.classList.add("on");
        s4tab2.classList.add("on");
    };

    s4Btn3.onclick = () => {
        resetT();
        s4Btn3.classList.add("on");
        s4tab3.classList.add("on");
    };

    s4Btn4.onclick = () => {
        resetT();
        s4Btn4.classList.add("on");
        s4tab4.classList.add("on");
    };

    s4Btn5.onclick = () => {
        resetT();
        s4Btn5.classList.add("on");
        s4tab5.classList.add("on");
    };

    // modal popup
    const poOpen1 = document.querySelector("#tab1-ppt");
    const poOpen2 = document.querySelector("#tab2-ppt");
    const poOpen3 = document.querySelector("#tab3-ppt");
    const poOpen4 = document.querySelector("#tab4-ppt");
    const poOpen5 = document.querySelector("#tab5-ppt");
    const poOpen6 = document.querySelector("#tab6-ppt");

    // 팝업 컨텐츠 요소찾기
    const popcont = document.querySelector("#popcont");
    const modal = document.querySelector("#modal");
    const popup = document.querySelector("#popup");
    const popupBtn = document.querySelector("button#exit");

    popupBtn.onclick = () => {
        modal.classList.remove("on");
    };

    poOpen1.onclick = () => {
        popcont.innerHTML = '<img src="assets/index/sec4/jin_air_modal.png" alt="팝업1">';
        modal.classList.add("on");
    };

    poOpen2.onclick = () => {
        popcont.innerHTML = '<img src="assets/index/sec4/sulbing_modal.png" alt="팝업2">';
        modal.classList.add("on");
    };

    // 3,4 는 이미지 준비 X
    poOpen5.onclick = () => {
        popcont.innerHTML = '<img src="assets/index/sec4/tnj_modal.png" alt="팝업5">';
        modal.classList.add("on");
    };
    poOpen6.onclick = () => {
        popcont.innerHTML = '<img src="assets/index/sec4/Judymary_modal.png" alt="팝업5">';
        modal.classList.add("on");
    };

});