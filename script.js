const cellelements = document.querySelectorAll(".game-board .cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const result = document.querySelector(".result");
const result_text = document.querySelector(".result h1");
const restart_btn = document.querySelector(".resetbtn");

const winner_condition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const textO = "O";
const textX = "X";
let toggleTurn = true;

cellelements.forEach(cell => {
    cell.onclick = () =>{
       let currentplayer = toggleTurn ? textO : textX;
        cell.classList.add("disable");
        celladd(cell , currentplayer);
        if(winnercheck(currentplayer)){
            // console.log(currentplayer + " winner");
            addinactive(result);
            result_text.innerHTML = currentplayer + " Win the Game";
        }else if(isdrwa()){
            // console.log("Drwa the game !");
             addinactive(result);
            result_text.innerHTML = " Drwa the game!";
        }else{
            swapplayer();
        }
    }
});
// swepping function for header 
function swapplayer(){
    toggleTurn = !toggleTurn;
    if(toggleTurn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }

}

// adding the X/O in cell
function celladd(cell , currentplayer){
    cell.innerHTML = currentplayer;
    if(toggleTurn){
        cell.classList.add("O");
       
    }else{
        cell.classList.add("X");
        
    }

}

// { true/false } check the winner
function winnercheck(currentplayer){
    return winner_condition.some(condition =>{
        console.log(condition);
        return condition.every(index =>{
            console.log(index);
            console.log(cellelements[index].classList.contains(currentplayer));
            return cellelements[index].classList.contains(currentplayer);
        });
    })
}
// drwa function ..................................
 function isdrwa(){
        return [...cellelements].every(cell =>{
            return cell.classList.contains(textO) || cell.classList.contains(textX);
        })
}

//  activate the result page..............................
function addinactive(result){

    result.classList.remove("inactive");

}
//  restart button function................................
restart_btn.onclick = () =>{
      location.reload();
}