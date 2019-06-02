function timer(flag){
    var divTime = $("<div>");
    divTime.addClass("btn");
    divTime.attr("id", "timer");
    var diff = parseInt(sessionStorage.diff);
    var rait = parseInt(sessionStorage.rating);
    var time = diff * 800;
    var flagTime = true;
    divTime.html(time);
    $("body").append(divTime);
    $("body").keydown(goTime)
    
   // window.onkeydown = goTime;
    function goTime(event){    
        var key =  event.keyCode;
        if (key < 41 && key > 36 && flagTime) {
            var setInt = setInterval(showTime, 10);
                var setTime = setTimeout(showTime, time);
                flagTime = false;
    
    
    function showTime(){
    divTime.html(time);
        if(flag) console.log("the end");
        if (time > 0)
        {
            time -= 10;}
        else {
            clearInterval(setInt);
        }
}}
}
}


