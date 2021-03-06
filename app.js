/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// });

var scores,activePlayer,round,gamePlaying;
init();
document.querySelector('.dice').style.display = 'none';

document.getElementById('dice-1').style.display='none';
document.getElementById('dice-2').style.display='none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random()* 6)+1;
        var dice2 = Math.floor(Math.random()* 6)+1;
	document.getElementById('dice-1').style.display='block';
     document.getElementById('dice-2').style.display='block';   
        document.getElementById('dice-1').src='dice-'+dice+'.png';
	 document.getElementById('dice-2').src='dice-'+dice+'.png';
	
	if(dice > 1){
		round += dice;
		document.querySelector('#current-' +activePlayer).textContent = round;
                }else{
		          nextPlayer();
                        }
                    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
scores[activePlayer] += round;
document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
if(scores[activePlayer] >= 10){
    gamePlaying = false;
	document.querySelector('#name-'+activePlayer).textContent = 'WINNER!!!';
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
}
else{
	nextPlayer();
}
});

document.querySelector('.btn-new').addEventListener('click',init);//init ka method ka nay takhr tl hlan khw lo parathesis malo
function init(){
    gamePlaying = true; 
    scores = [0,0];
	round = 0;
	activePlayer = 0;
    document.getElementById('dice-1').src='dice-'+dice+'.png';
	 document.getElementById('dice-2').src='dice-'+dice+'.png';
    document.getElementById('score-0').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add("active");
}

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		round = 0;
		
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.getElementById('dice-1').src='dice-'+dice+'.png';
	   document.getElementById('dice-2').src='dice-'+dice+'.png';
		
}




