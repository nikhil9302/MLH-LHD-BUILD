var startTime, endTime,score1=0,score2=0,game=0;

function game_result() 
{    
    var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
    b1 = document.getElementById("b1").value; 
    b2 = document.getElementById("b2").value; 
    b3 = document.getElementById("b3").value; 
    b4 = document.getElementById("b4").value; 
    b5 = document.getElementById("b5").value; 
    b6 = document.getElementById("b6").value; 
    b7 = document.getElementById("b7").value; 
    b8 = document.getElementById("b8").value; 
    b9 = document.getElementById("b9").value;   
    
    if ( b1 == 'X' && b2 == 'X' && b3 == 'X')
    { 
        score1++;
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player X won";         
        document.getElementById('time').innerHTML =parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player X won'); 
    } 
    else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
        score1++;
        endTime = new Date();
        game++;         
        document.getElementById('print').innerHTML = "Player X won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000); 
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true;  
        alert('Player X won'); 
    } 
    else if ( b7 == 'X' && b8 == 'X' &&  b9 == 'X') {
        score1++;
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player X won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000); 
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        alert('Player X won'); 
    } 
    else if ( b3 == 'X'&& b6 == 'X' &&  b9 == 'X') {
        score1++;
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player X won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1; 
        document.getElementById('score2').innerHTML=score2;
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        alert('Player X won'); 
    } 
    else if ( b1 == 'X' && b5 == 'X' && b9 == 'X') {
        score1++; 
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player X won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000); 
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        alert('Player X won'); 
    } 
    else if ( b3 == 'X' && b5 == 'X' &&  b7 == 'X') { 
        score1++;
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player X won";
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1; 
        document.getElementById('score2').innerHTML=score2; 
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player X won'); 
    } 
    else if ( b2 == 'X' && b5 == 'X' && b8 == 'X'){
        score1++; 
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player X won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2; 
        document.getElementById("b1").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player X won'); 
    } 
    else if (b4 == 'X' && b5 == 'X' && b6 == 'X'){ 
        score1++;
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player X won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000); 
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player X won'); 
    }  

    else if ( b1 == 'O' && b2 == 'O' && b3 == 'O') {
        score2++;
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player O won'); 
    } 
    else if ( b1 == 'O' && b4 == 'O' && b7 == 'O') {
        score2++; 
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1; 
        document.getElementById('score2').innerHTML=score2; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player O won'); 
    } 
    else if (b7 == 'O' && b8 == 'O' &&  b9 == 'O') {
        score2++;
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;   
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b6").disabled = true; 
        alert('Player O won'); 
    } 
    else if (b3 == 'O' && b6 == 'O' &&  b9 == 'O') {
        score2++; 
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1; 
        document.getElementById('score2').innerHTML=score2;  
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b5").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        alert('Player O won'); 
    } 
    else if ( b1 == 'O' && b5 == 'O' &&  b9 == 'O') {
        score2++; 
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player O won";        
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;  
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        alert('Player O won'); 
    } 
    else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
        score2++; 
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player O won"; 
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;  
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player O won'); 
    } 
    else if (b2 =='O' && b5 == 'O' && b8 == 'O') {
        score2++; 
        endTime = new Date();
        game++; 
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;   
        document.getElementById("b1").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b4").disabled = true; 
        document.getElementById("b6").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player O won'); 
    } 
    else if (b4 =='O' && b5 == 'O' &&  b6 == 'O') {
        score2++;  
        endTime = new Date();
        game++;
        document.getElementById('print').innerHTML = "Player O won";
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2;   
        document.getElementById("b1").disabled = true; 
        document.getElementById("b2").disabled = true; 
        document.getElementById("b3").disabled = true; 
        document.getElementById("b7").disabled = true; 
        document.getElementById("b8").disabled = true; 
        document.getElementById("b9").disabled = true; 
        alert('Player O won'); 
    } 
    else if ((b1 == 'X'|| b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O')&&(b4 == 'X' ||b4 == 'O') && (b5 == 'X' ||b5 == 'O') && (b6 == 'X' ||b6 == 'O')&& (b7 == 'X' ||b7 == 'O') &&(b8 == 'X' ||b8 == 'O') &&(b9 == 'X' ||b9 == 'O'))
    {
        endTime = new Date();
        game++;        
        document.getElementById('print').innerHTML = "Match Tie";
        document.getElementById('time').innerHTML = parseInt((endTime - startTime)/1000);
        document.getElementById('score1').innerHTML=score1;
        document.getElementById('score2').innerHTML=score2; 
        alert('Match Tie'); 
    } 
    else { 
          if (player == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player O Turn"; 
        } 
    }
    if(score1>score2)
    {
        document.getElementById('overall').innerHTML='Player X is leading';
    }
    else if(score1<score2)
    {
        document.getElementById('overall').innerHTML='Player O is leading';
    }
    else{
        document.getElementById('overall').innerHTML='No player is leading';
    } 
}
function color(a)
{
    document.getElementById(a).style.backgroundColor='aqua';
}
function uncolor(b)
{
    document.getElementById(b).style.backgroundColor=null;
}
var player = 1,c=0; 
function play_1() {
    if(c==0)
    {
        startTime=new Date();
        c++;
    } 
    if (player == 1) { 
        document.getElementById("b1").value = "X";        
        document.getElementById("b1").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b1").value = "O";        
        document.getElementById("b1").disabled = true; 
        player = 1; 
    } 
} 
  
function play_2() { 
    if(c==0)
    {
        startTime=new Date();
        c++;
    } 
    if (player == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        player = 1; 
    } 
} 
  
function play_3() {
    if(c==0)
    {
        startTime=new Date();
        c++;
    }  
    if (player == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        player = 1; 
    } 
} 
  
function play_4() { 
    if(c==0)
    {
        startTime=new Date();
        c++;
    } 
    if (player == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        player = 1; 
    } 
} 
  
function play_5() {
    if(c==0)
    {
        startTime=new Date();
        c++;
    }  
    if (player == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        player = 1; 
    } 
} 
  
function play_6() {
    if(c==0)
    {
        startTime=new Date();
        c++;
    }  
    if (player == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        player = 1; 
    } 
} 
  
function play_7() { 
    if(c==0)
    {
        startTime=new Date();
        c++;
    } 
    if (player == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        player = 1; 
    } 
} 
  
function play_8() {
    if(c==0)
    {
        startTime=new Date();
        c++;
    }  
    if (player == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        player = 1; 
    } 
} 
  
function play_9() { 
    if(c==0)
    {
        startTime=new Date();
        c++;
    } 
    if (player == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        player = 2; 
    } 
    else { 
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        player = 1; 
    } 
}  
function newgame() {
    startTime= new Date();
    if(game%2==0)
    { 
        player=1;
        document.getElementById('print').innerHTML='Player X Turn';
    }
    else{
        player=2;
        document.getElementById('print').innerHTML='Player O Turn';
    }    
    var id=['b1','b2','b3','b4','b5','b6','b7','b8','b9'];
    for(var i=0;i<9;i++)
    {
    document.getElementById(id[i]).value=' ';        
    document.getElementById(id[i]).disabled=false;
    document.getElementById(id[i]).style.backgroundColor=null;
    }
    
} 
function restart()
{
    document.location.reload();
}
function endgame()
{
    if(score1>score2)
    {
        alert('Player X has won overall');
    }
    else if(score1<score2)
    {
        alert('Player O has won overall');
    }
    else if(game==0)
    {
        alert('Atleast play a game');
    }       
    else{
        alert('It was a tie overall');
    }
    document.location.reload();
}
