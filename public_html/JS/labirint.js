
function labirint(gen) {
    if (gen > 29) gen =33;
    gen += 4;
    timer(flag);
    var stack = [];
    var arrWays = [];
    for (var i = 0; i < gen; i++)
        arrWays[i] = [];
    var x;
    var y;
    for (y = gen - 1; y > gen - 3; y--){
        for (x = 0; x < gen; x++){
            arrWays[y][x] = new Cell(y,x,"border");
        }
    }
    for (y = 2; y > -1; y--){
        for (x = 0; x < gen; x++){
            arrWays[y][x] = new Cell(y,x,"border");
        }
    }
    for (y = gen - 3; y > 1; y--){
        for (x = 0; x < 3; x++){
            arrWays[y][x] = new Cell(y,x,"border");
        }
    }
    for (y = gen - 3; y > 1; y--){
        for (x = gen-2; x < gen; x++){
            arrWays[y][x] = new Cell(y,x,"border");
        }
    }
    
    
    
    
    for (y = gen - 3; y > 1; y--) {
        if (y % 2 == 0) {
            for (x = 2; x < gen-2; x++) {
                if (x % 2 == 0)
                    arrWays[y][x] = new Cell(y,x,"empty");
                else
                    arrWays[y][x] = new Cell(y,x,"wall");
            }
        }
        else {
            for (x = 2; x < gen-2; x++)
                arrWays[y][x] = new Cell(y,x,"wall");
        }
    }

    x = 2;
    y = gen - 3;
    arrWays[y][x] = new Cell(y, x, "track");

    function Cell(y,x,state){
       this.x = x;
       this.y = y;
       this.state = state;
    }
    
    //-----------Generate--------//)
    var flag = true;
        generalTurn(y,x, arrWays);
       function generalTurn(y,x, arrWays) {
           while (x > 1 && x < gen - 2 && y > 1 && y < gen - 2){
    	if (arrWays[y-2][x].state != "empty" && arrWays[y+2][x].state != "empty" && arrWays[y][x-2].state != "empty" && arrWays[y][x+2].state != "empty")
        {
            if (flag){
                cell1.state = "end";
                flag = false;
            }
            while(stack.length > 0){
                cellPop = stack.pop();
                    if (checkEmpty(cellPop.y, cellPop.x, arrWays) == 4) continue;
                    else {
                        x = cellPop.x; y = cellPop.y;
                        generalTurn(y, x, arrWays);
                    }
            }break;
        }
        
        else {
            var cell1 = checkNeighbor(y, x, arrWays);
        arrWays[cell1.y][cell1.x] = cell1;
        var cell = removeWall(arrWays[y][x], cell1);
    	x = cell1.x;
    	y = cell1.y;
    	arrWays[cell.y][cell.x] = cell;
        stack.push(cell1);
        
                 }
    }}
    /*-----------------------------DRAWING-----------------------------*/
    var wH = 1000 / gen + "px";
    var colorWall = "#4B47FF";
    var colorWay = "#FFC621";
    var colorBorder = "black";
    /*-------------------------------------------*/
    function drawFull() {
        var wrap = $("<div>");
        wrap.addClass("blocks").css({"width": wH, "height": wH, "backgroundColor": colorWay});
        $("#lab").append(wrap);
    }

    function drawNull() {
        var wrap = $("<div>");
        wrap.addClass("blocks").css({"width": wH, "height": wH, "backgroundColor": "white"});
        $("#lab").append(wrap);
    }

    function drawEmpty() {
        var wrap = $("<div>");
        wrap.addClass("blocks").css({"width": wH, "height": wH, "backgroundColor": colorWall});
        $("#lab").append(wrap);
    }
    
    function drawEnd() {
        var wrap = $("<div>");
        wrap.addClass("blocks").css({"width": wH, "height": wH, "backgroundColor": "#ff0000"});
        $("#lab").append(wrap);
    }

    function drawBorder(){
    	var wrap = $("<div>");
        wrap.addClass("blocks").css({"width": wH, "height": wH, "backgroundColor": colorBorder});
        $("#lab").append(wrap);
    }


    function checkEmpty(y, x, arrWays){
        var turn = Math.floor(Math.random()*4);
            if (arrWays[y-2][x].state == "empty" && arrWays[y+2][x].state == "empty" && arrWays[y][x+2].state == "empty") {turn = Math.floor(Math.random()*3);
                                                                                                        return turn;}
            if (arrWays[y-2][x].state == "empty" && arrWays[y+2][x].state == "empty" && arrWays[y][x-2].state == "empty") {turn = Math.floor(Math.random()*3); if (turn == 1) turn = 2;
                                                                                                         return turn;}
            if (arrWays[y][x-2].state == "empty" && arrWays[y+2][x].state == "empty" && arrWays[y][x+2].state == "empty") {turn = Math.floor(Math.random()*3)+1;
                                                                                                        return turn;}
            if (arrWays[y][x-2].state == "empty" && arrWays[y-2][x].state == "empty" && arrWays[y][x+2].state == "empty") {turn = Math.floor(Math.random()*3); if (turn == 2) turn = 3;
                                                                                                        return turn;} 
            if (arrWays[y-2][x].state == "empty" && arrWays[y+2][x].state == "empty") {turn = Math.floor(Math.random()*2); if (turn == 1) turn = 2;
                                                                            return turn;}
            if (arrWays[y][x-2].state == "empty" && arrWays[y][x+2].state == "empty") {turn = Math.floor(Math.random()*2); if (turn == 0) turn = 3;
                                                                            return turn;}      
            if (arrWays[y+2][x].state == "empty" && arrWays[y][x+2].state == "empty") {turn = Math.floor(Math.random()*2); if (turn == 0) turn = 2;
                                                                            return turn;}
            if (arrWays[y-2][x].state == "empty" && arrWays[y][x+2].state == "empty") {turn = Math.floor(Math.random()*2);
                                                                            return turn;}  
            if (arrWays[y-2][x].state == "empty" && arrWays[y][x-2].state == "empty") {turn = Math.floor(Math.random()*2); if (turn == 1) turn = 3;
                                                                           return turn;}
            if (arrWays[y+2][x].state == "empty" && arrWays[y][x-2].state == "empty") {turn = Math.floor(Math.random()*2); if (turn == 0) turn = 3;
                                                                                                      else turn = 2;
                                                                            return turn;}
            if (arrWays[y-2][x].state == "empty") {turn = 0;
                  return turn;}
            if (arrWays[y][x+2].state == "empty") {turn = 1;
              return turn;}
            if (arrWays[y+2][x].state == "empty") {turn = 2;
        return turn;}
            if (arrWays[y][x-2].state == "empty") {turn = 3;}
     return turn;
            if (arrWays[y-2][x].state != "empty" && arrWays[y+2][x].state != "empty" && arrWays[y][x-2].state != "empty" && arrWays[y][x+2].state != "empty") return 4;
    }
    function checkNeighbor(y, x, arrWays){
        var turn = checkEmpty(y, x, arrWays);
        switch(turn){
    		case 0: 
    		                    var cell1 = new Cell(y-2, x, "track");
                                return cell1;
    		    				
    		case 1: 
    		    				var cell1 = new Cell(y, x+2, "track");
                                return cell1;
    		    				
    		case 2: 
    		    				var cell1 = new Cell(y+2, x, "track");
                                return cell1;
    		    					
            case 3: 
    		    				var cell1 = new Cell(y, x-2, "track");
                                return cell1;
    	}
    }

    function removeWall(cell1, cell2){
    	if (cell2.x - cell1.x > 0) return new Cell(cell1.y, cell2.x - 1, "track");
    	if (cell2.y - cell1.y > 0) return new Cell(cell1.y + 1, cell2.x, "track");
    	if (cell2.x - cell1.x < 0) return new Cell(cell1.y, cell2.x + 1, "track");
    	if (cell2.y - cell1.y < 0) return new Cell(cell1.y - 1, cell2.x, "track");
    }
    
    for (var y = gen - 1; y > -1; y--) {
        for (var x = 0; x < gen; x++) {
            if (arrWays[y][x].state == "track") {
                drawFull();
                continue;
            }
            if (arrWays[y][x].state == "empty") {
                drawNull();
                continue;
            }
            if (arrWays[y][x].state == "end") {
                drawEnd();
                continue;
            }
            if (arrWays[y][x].state == "wall") {
                drawEmpty();
                continue;
            }
            if (arrWays[y][x].state == "border") {
                drawBorder();
                continue;
            }
        }
    }
        
        var lvl = $("<div>").append("Уровень: " + (sessionStorage.diff-3)/2);
        lvl.addClass("lvl");
    $("#lab").append(lvl);
        
        var rating = $("<div>").append("Рейтинг за игру: " + sessionStorage.rating);
        rating.addClass("rating");
    $("#lab").append(rating);
    
        var record = $("<div>").append("Ваш рекорд: " + localStorage.record);
        record.addClass("record");
    $("#lab").append(record);

        /*------------------------Move Person------------------------------*/  
        x = 2;
        y = gen - 3;
        
        window.onkeydown = movePerson;
        var str;
        var key;
        var countTurns = 0;
        var flag = true;
        var num = gen * 2 + 3;
        var diff = parseInt(sessionStorage.diff);
        var rait = parseInt(sessionStorage.rating);
        var move = $(".blocks:nth-child("+num+")").css("background-color", "black");
        
    function movePerson(event){
            if((countTurns+6) % 12 == 0)giveCoin();
            key = event.keyCode;
            str = ".blocks:nth-child(";
            event.stopPropagation();
            event.preventDefault();
            switch(key){
                case 37:
                    if(arrWays[y][x-1].state == "end") {win();flag = false;}
                    if(arrWays[y][x-1].state == "track" || arrWays[y][x-1].state == "coin")
                    {x--;
                    num--;
                    countTurns++;
                    }
                    if(arrWays[y][x].state == "coin"){
                        rait += 5;
                        sessionStorage.rating = "" + rait;
                    }
                    break;
                case 38:
                    if(arrWays[y+1][x].state == "end") {win();flag = false;}
                    if(arrWays[y+1][x].state == "track" || arrWays[y+1][x].state == "coin")
                    {y++;
                    num -= gen;
                    countTurns++;
                    }
                    if(arrWays[y][x].state == "coin"){
                        rait += 5;
                        sessionStorage.rating = "" + rait;
                    }
                    break;
                case 39:
                    if(arrWays[y][x+1].state == "end") {win();flag = false;}
                    if(arrWays[y][x+1].state == "track" || arrWays[y][x+1].state == "coin")
                    {x++;
                    num++;
                    countTurns++;
                    }
                    if(arrWays[y][x].state == "coin"){
                        rait += 5;
                        sessionStorage.rating = "" + rait;
                    }
                    break;
                case 40:
                    if(arrWays[y-1][x].state == "end") {win();flag = false;}
                    if(arrWays[y-1][x].state == "track" || arrWays[y-1][x].state == "coin")
                    {y--;
                    num += gen;
                    countTurns++;
                    }
                    if(arrWays[y][x].state == "coin"){
                        rait += 5;
                        sessionStorage.rating = "" + rait;
                    }
               
            }
        move.css("background-color", colorWay);
        if (flag) {
                        
                        move = $(str+num+")");
        		arrWays[y][x].state = "track";
                        move.css({"background-color": "black", "background-image" : "none"});//STYLE person
                        
        }

    function win(){
        rait += diff;
        sessionStorage.rating = "" + rait;
        var record = parseInt(localStorage.record);
        if (record < rait) localStorage.record = rait;
        diff+=2;
        sessionStorage.diff = "" + diff;
        $("#lab").empty();
        labirint(diff);
    }
       
       function giveCoin(){
       	while(true){var posX = Math.floor(Math.random()*(gen-4) + 2);
       	       		var posY = Math.floor(Math.random()*(gen-4) + 2);
       	       		
       	       	if (arrWays[posY][posX].state == "track"){
       	       		arrWays[posY][posX].state = "coin";
       	       		break;
       	       		
       	       	}}
       	       	var num = posX + 1 + ((gen - 1) - posY) * gen;
       	       	var placeCoin = $(".blocks:nth-child("+num+")");
                placeCoin.css({"background-image": "url(../img/coin.png)", "background-size": "cover"});
       }
        
        }};
    

     

        
        
        
        