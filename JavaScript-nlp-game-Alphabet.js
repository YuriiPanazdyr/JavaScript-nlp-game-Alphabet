/*
Neural Language Program game "Alphabet"

Task: Make a game for the browser. Description of the game:
	1) On the screen appear and disappear two Cyrillic or Latin letters (optional).
		a) The top letter is anyone from the Cyrillic or Latin alphabet (optional).
		b) The bottom letter is R - Right (П - Правая), L - Left (Л - Левая), B - Together both letterHands (В - Вместе Обе руки).
	2) Display letters in random order (optional).
	3) Change the arrangement of letters on the screen (optional).
	4) Change the size of letters (optional).
	5) Change the color of letters (top and bottom also must have different colors) (optional).
	6) Display speed (optional).

	The game must have two screens:
		1) First screen - game menu with a choice of complexity.
		2) Second screen - game screen where the letters will be displayed.
*/

function startGame() {

	document.getElementById('gameMainTable').style.visibility="hidden";
	document.getElementById('buttonStopGame').style.visibility="visible";

	if (document.getElementById('choiceLanguage').value == 1) {
        var arr = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'],
        letterletterHand = new Array();
        letterletterHand[1] = "Л";
        letterletterHand[2] = "П";
        letterletterHand[3] = "В";
    }
    else {
	    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
	    letterletterHand = new Array();
	    letterletterHand[1] = "L";
	    letterletterHand[2] = "R";
	    letterletterHand[3] = "B";
    }
	letter = document.getElementById( 'letter' ), i = -1;
    letterHand = document.getElementById('letterHand');
    container = document.getElementById('containerAlphabet');
    container.style.marginTop = "-200px";
    choosesDisplaySpeed = document.getElementById('choosesDisplaySpeed').value;
	
	return function gameSettings() {
		if ( ++i < arr.length ) {
            if (document.getElementById('changeColorLetters').checked){
	            colorLetter = new Array();                                
	            colorLetter[1] = "black";
				colorLetter[2] = "red";
				colorLetter[3] = "green";
				colorLetter[4] = "blue";
				colorLetter[5] = "purple";
				colorLetter[6] = "fuchsia";
				colorLetter[7] = "maroon";
				colorLetter[8] = "navy";
				colorLetter[9] = "olive";
				colorLetter[10] = "teal";
                letterHand.style.color = colorLetter[Math.floor((Math.random() * 11) + 1)];                                
                letter.style.color = colorLetter[Math.floor((Math.random() * 11) + 1)];
            }
            if (document.getElementById('changeSizeLetters').checked){
                sizeLetter = new Array();
                sizeLetter[1] = "10px";
                sizeLetter[2] = "12px";
                sizeLetter[3] = "14px";
				sizeLetter[4] = "16px";
				sizeLetter[5] = "18px";
				sizeLetter[6] = "20px";
				sizeLetter[7] = "24px";
                sizeLetter[8] = "26px";
                sizeLetter[9] = "28px";
                sizeLetter[10] = "30px";
				sizeLetter[11] = "32px";
				sizeLetter[12] = "34px";
				sizeLetter[13] = "36px";
				sizeLetter[14] = "38px";
				sizeLetter[15] = "40px";
				sizeLetter[16] = "42px";
				sizeLetter[17] = "44px";
                letterHand.style.fontSize = sizeLetter[Math.floor((Math.random() * 17) + 1)];
                letter.style.fontSize = sizeLetter[Math.floor((Math.random() * 17) + 1)];
            }
            if (document.getElementById('changePosition').checked){
                container.style.marginLeft = Math.floor(Math.random() * (620 - (-620) + 1)) + (-620) +"px";
                container.style.marginTop = Math.floor(Math.random() * (10 - (-330) + 1)) + (-330) + "px";
            }
            letterHand.innerHTML = letterletterHand[Math.floor((Math.random() * 3) + 1)];   
            if (document.getElementById('changeLetter').checked){ 
                letter.innerHTML = arr [ Math.floor(Math.random() * ((arr.length-1) - 0 + 1)) + 0 ];                            
            }
            else {
                letter.innerHTML = arr [ i ];
            }
			timer = setTimeout(arguments.callee, choosesDisplaySpeed);
		}
        else if ( i >= arr.length ) {
            i=0;
			letter.innerHTML = arr[ i ];
			timer = setTimeout(arguments.callee, choosesDisplaySpeed);
        } 
	}();
}   

function stopGame() {               
	clearTimeout(timer);
    letter.innerHTML = "";
    letterHand.innerHTML = "";
    letter.style.color = "black";
    letterHand.style.color = "black";
    letter.style.fontSize = "44px";
    letterHand.style.fontSize = "44px";
    container.style.marginLeft = "0px";
    container.style.marginTop = "0px";
	document.getElementById('gameMainTable').style.visibility="visible";
	document.getElementById('buttonStopGame').style.visibility="hidden";                      
}
