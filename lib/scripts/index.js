function loader() {
    
}

let isBurgerOpen = false;
function hamburger() {
    if(isBurgerOpen) {
        document.getElementById('top-patty2').classList.remove('top-patty-active2');
        document.getElementById('bottom-patty2').classList.remove('bottom-patty-active2');
        setTimeout(()=>{
            document.getElementById('top-patty1').classList.remove('top-patty-active1');
        document.getElementById('bottom-patty1').classList.remove('bottom-patty-active1');
        },100);
    }
    else {
        document.getElementById('top-patty1').classList.add('top-patty-active1');
        document.getElementById('bottom-patty1').classList.add('bottom-patty-active1');
        setTimeout(()=>{
            document.getElementById('top-patty2').classList.add('top-patty-active2');
            document.getElementById('bottom-patty2').classList.add('bottom-patty-active2');
        },100);
    }
    isBurgerOpen = !isBurgerOpen;
}

let currentSlide = 1, numberOfImages = 4;
setInterval(()=>{
    let past = currentSlide;
    currentSlide++;
    if(currentSlide == numberOfImages + 1) currentSlide = 1;
    displayCurrent(past, currentSlide);
}, 4000);
function displayCurrent(past, current) {
    let pst = document.getElementById(`img-slide${past}`);
    let cur = document.getElementById(`img-slide${current}`);
    cur.style.display = 'block';
    setTimeout(()=>{
        pst.style.opacity = 0;
        cur.style.opacity = 1;
    }, 10);
    setTimeout(()=>{
        pst.style.display = 'none';
    }, 500);
}
