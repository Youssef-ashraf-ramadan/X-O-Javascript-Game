
let turn = true; //x turn

function reset(A,b,c){
document.getElementById('A' + A).style.color="#111"
document.getElementById('A' + b).style.color="#111"
document.getElementById('A' + c).style.color="#111"
}





squares=[];
function checkwinner(){ //////checkwinner
 for (let i=1; i<=9; i++){
    squares[i]=document.getElementById('A' + i).innerText;
 }
 if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1] !="" && squares[2] !="" && squares[3] !="" ){
   reset(1,2,3);
   alert( 'player'+ squares[1] + 'win');
     location.reload(); 
 }else if (squares[4]==squares[5] && squares[5]==squares[6] && squares[4] !="" && squares[5] !="" && squares[6] !=""){
   reset(4,5,6);
    alert( 'player'+ squares[4] + 'win');
    location.reload(); 
 }else if (squares[7]==squares[8] && squares[8]==squares[9] && squares[7] !="" && squares[8] !="" && squares[9] !=""){
   reset(7,8,9);
    alert( 'player'+ squares[7] + 'win');
    location.reload(); 
 }else if (squares[1]==squares[4] && squares[4]==squares[7] && squares[1] !="" && squares[4] !="" && squares[7] !=""){
   reset(1,4,7);
    alert( 'player'+ squares[1] + 'win');
    location.reload(); 
 }else if (squares[2]==squares[5] && squares[5]==squares[8] && squares[2] !="" && squares[5] !="" && squares[8] !=""){
   reset(2,5,8);
    alert( 'player'+ squares[2] + 'win');
    location.reload(); 
 }else if (squares[3]==squares[6] && squares[6]==squares[9] && squares[3] !="" && squares[6] !="" && squares[9] !=""){
   reset(3,6,9);
    alert( 'player'+ squares[3] + 'win');
    location.reload(); 
 }else if (squares[3]==squares[5] && squares[5]==squares[7] && squares[3] !="" && squares[5] !="" && squares[7] !=""){
   reset(3,5,7);
    alert( 'player'+ squares[3] + 'win');
    location.reload(); 
 }else if (squares[1]==squares[5] && squares[5]==squares[9] && squares[1] !="" && squares[5] !="" && squares[9] !=""){
   reset(1,5,9);
    alert( 'player'+ squares[1] + 'win');
    location.reload(); 
 }else if (squares[1] !=  squares[2]  != squares[3]  != squares[4]  != squares[5]  !=squares[6]  != squares[7]  !=squares[8]  !=squares[9] &&   squares[1] !="" && squares[2] !="" && squares[3] !="" && squares[4] !="" && squares[5] !="" && squares[6] !="" && squares[7] !="" && squares[8] !="" && squares[9] !="" ){
   alert('no winner');
   location.reload(); 
 }
}

function insert(id){  /// this function take id from the square that i clicked on then innerText="X" if the turn was x and innerText="o" if the turn is o
    X=document.getElementById(id);
if(turn && X.innerHTML==""){

 X.innerText="X";
    turn = !turn;
}else if (!turn && X.innerHTML=="" ){
   X.innerText="O";
    turn = !turn;
}
checkwinner();

}
