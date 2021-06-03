

var scores,activePlayer,round,gamePlaying,lastDice;
init();

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random()* 6)+1;
        var dice2 = Math.floor(Math.random()* 6)+1;
	document.getElementById('dice-1').style.display =  'block';
    document.getElementById('dice-2').style.display =  'block';
    document.getElementById('dice-1').src ='dice-'+dice1+'.png';
    document.getElementById('dice-2').src ='dice-'+dice2+'.png'; 
	
	if(dice1 !== 6 && dice2 !== 6){
		round += dice1 + dice2;
		document.querySelector('#current-' +activePlayer).textContent = round;
                }
        else{
		          nextPlayer();
                        }
        
                    } 
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += round;
document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    var input  = document.querySelector('.final-score').value;
    var winnerValue;
    if(input){
        winnerValue = input;
    }else{
        winnerValue = 100;
    }
    }

if(scores[activePlayer] >= winnerValue){
    gamePlaying = false;
	document.querySelector('#name-'+activePlayer).textContent = 'WINNER!!!';
	document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
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
  
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
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
    document.querySelector('.final-score').value ='';
}

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		round = 0;
		
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
		
}




