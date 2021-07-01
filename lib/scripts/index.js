function loaded() {
    $(function(){
        console.log(main_today);
        // 운영시간 세팅
        $("#today-day").html(main_today.todayRt[0].dateMsg);
        $("#today-open-time").html(main_today.todayRt[0].elStart + " - " + main_today.todayRt[0].elEnd);
        $("#ev-open").html(main_today.everlandFinish ? "CLOSED" : "OPEN");
        $("#ev-open").addClass(main_today.everlandFinish ? "closed-ev" : "open-ev");
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

function todayEv(code) {
    $('.today-cont-sel-div').removeClass("inf-btn-sel");
    $('button[name="inf-div-'+code+'"]').addClass("inf-btn-sel");
    window.location.href="/attractions";
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
