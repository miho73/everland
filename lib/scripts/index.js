let isBurgerOpen = false;

function loaded() {
    $(function(){
        console.log(main_today);
        // 운영시간 세팅
        //$("#todayRt_dateMsg").html(main_today.todayRt[0].dateMsg);
        $("#today-open-time").html(main_today.todayRt[0].elStart + " - " + main_today.todayRt[0].elEnd);
        /*
        $("#nextPerformDiv").empty();
        var nextpermlength = main_today.nextPerform.length;
        var m = {};
        $.each(main_today.nextPerform, function(i,d){
            var key = d.artsubject + "_" + d.performSchedule;
            if(m[key] == null) {
            if(i == 0) {
                $("#nextPerformDiv").append("<li><i class='time'>" + d.performSchedule + "</i><span class='name'>" + d.artsubject + "</span></li>");
            } else if(nextpermlength == (i+1) ) {
                $("#nextPerformDiv").append("<li><i class='time'>" + d.performSchedule + "</i><span class='name'>" + d.artsubject + "</span></li>");
            } else {
                $("#nextPerformDiv").append("<li><i class='time'>" + d.performSchedule + "</i><span class='name'>" + d.artsubject + "</span></li>");
            }
            m[key] = true;
            }
        });
        */
    });
}

function hamburger() {
    if(isBurgerOpen) {
        document.getElementById('top-patty2').classList.remove('top-patty-active2');
        document.getElementById('bottom-patty2').classList.remove('bottom-patty-active2');
        setTimeout(function () {
            document.getElementById('top-patty1').classList.remove('top-patty-active1');
        document.getElementById('bottom-patty1').classList.remove('bottom-patty-active1');
        },100);
    }
    else {
        document.getElementById('top-patty1').classList.add('top-patty-active1');
        document.getElementById('bottom-patty1').classList.add('bottom-patty-active1');
        setTimeout(function() {
            document.getElementById('top-patty2').classList.add('top-patty-active2');
            document.getElementById('bottom-patty2').classList.add('bottom-patty-active2');
        },100);
    }
    isBurgerOpen = !isBurgerOpen;
}

let currentSlide = 1, numberOfImages = 4;
setInterval(function() {
    let past = currentSlide;
    currentSlide++;
    if(currentSlide == numberOfImages + 1) currentSlide = 1;
    displayCurrent(past, currentSlide);
}, 4000);
function displayCurrent(past, current) {
    let pst = document.getElementById('img-slide'+past);
    let cur = document.getElementById('img-slide'+current);
    cur.style.display = 'block';
    setTimeout(function() {
        pst.style.opacity = 0;
        cur.style.opacity = 1;
    }, 10);
    setTimeout(function() {
        pst.style.display = 'none';
    }, 500);
}
