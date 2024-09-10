window.addEventListener("DOMContentLoaded", () => {
    // team1 index.html의 sec1의 탭 부분
    // 요소찾기
    const tab0 = document.querySelectorAll(".tab-cont1")[0];
    const tab1 = document.querySelectorAll(".tab-cont1")[1];
    const tab2 = document.querySelectorAll(".tab-cont1")[2];

    const tabBtn0 = document.querySelectorAll(".tab-cont1 li")[0];
    const tabBtn1 = document.querySelectorAll(".tab-cont1 li")[1];
    const tabBtn2 = document.querySelectorAll(".tab-cont1 li")[2];

    console.log(tabBtn0);
    console.log(tabBtn1);
    console.log(tabBtn2);

    function resetT() {
        tabBtn0.classList.remove("on");
        tabBtn1.classList.remove("on");
        tabBtn2.classList.remove("on");
    };

    tabBtn0.onclick = () => {
        resetT();
        tabBtn0.classList.add("on");
    };

    tabBtn1.onclick = () => {
        resetT();
        tabBtn1.classList.add("on");
    };

    tabBtn2.onclick = () => {
        resetT();
        tabBtn2.classList.add("on");
    };
});