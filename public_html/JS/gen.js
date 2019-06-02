$(function(){
    $("#doc").click(function(){
        $("#new").css({"margin-left": "120%",  "opacity":"0"});
        setTimeout(function(){$("#new").css("display", "none");}, 450);
        setTimeout(function(){$("#ruls").css({"margin-left": "120%",  "opacity":"0"});}, 100);
        setTimeout(function(){$("#ruls").css("display", "none");}, 550);
        setTimeout(function(){$("#doc").css({"margin-left": "120%",  "opacity":"0"});}, 200);
        setTimeout(function(){$("#doc").css("display", "none");}, 650);

        $("#slide").css("margin-left", "15%");
    });
    $("#new").click(function(){
    	$("#new").css({"margin-left": "120%",  "opacity":"0"});
        setTimeout(function(){$("#new").css("display", "none");}, 450);
        setTimeout(function(){$("#ruls").css({"margin-left": "120%",  "opacity":"0"});}, 100);
        setTimeout(function(){$("#ruls").css("display", "none");}, 550);
        setTimeout(function(){$("#doc").css({"margin-left": "120%",  "opacity":"0"});}, 200);
        setTimeout(function(){$("#doc").css("display", "none");}, 650);
    	sessionStorage.rating = "0";
    	$("#lab").css("margin-left", "15%");
    	labirint(parseInt(sessionStorage.diff));
    });
    $("#ruls").click(function(){
    	$("#new").css({"margin-left": "120%",  "opacity":"0"});
        setTimeout(function(){$("#new").css("display", "none");}, 450);
        setTimeout(function(){$("#ruls").css({"margin-left": "120%",  "opacity":"0"});}, 100);
        setTimeout(function(){$("#ruls").css("display", "none");}, 550);
        setTimeout(function(){$("#doc").css({"margin-left": "120%",  "opacity":"0"});}, 200);
        setTimeout(function(){$("#doc").css("display", "none");}, 650);
        $("#options").css("margin-left", "20%");
    });
    $("#options select").click(function(){
    	sessionStorage.diff = "" +($("#options select").val() * 2 + 3);
    });
    $("#home").click(function(){location.reload();});
    if (sessionStorage.diff == undefined) sessionStorage.diff = "5";
    if (localStorage.record == undefined) localStorage.record = "0";
});





