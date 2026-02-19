let box = document.querySelector(".box");
window.addEventListener("mousemove", (dets) => {
    // console.log(dets);
    // console.log(dets.clientY, dets.clientX);
    box.style.top = dets.clientY + "px";
    box.style.left = dets.clientX + "px"; 
});