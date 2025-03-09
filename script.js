let Winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]


board_arr = new Array(9).fill("E");
//  [ 0   1   2   3   4   5   6   7   8]
//  ["E","E","E","E","E","E","E","E","E"]

/* function checkWinner()   
//  {
//     for(let i of winner)
//         console.log(i);

 it will return all  the 1D  array one by one as   [0,1,2]
,[3,4,5]
,[6,7,8,],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]  */
//  }

function checkWinner() {

    for (let [index0, index1, index2] of Winner) {
        if (board_arr[index0] != "E" && board_arr[index0] === board_arr[index1] && board_arr[index1] === board_arr[index2])
            return 1;
    }
    return 0;
}

// print x and o z
let turn = 'X';
let total_turn=0;

const printer= (event) => {
    

    const element = event.target;
    if (board_arr[event.target.id] === "E") {
        total_turn++;
        if (turn === 'X') {
            element.innerHTML = "X";
            board_arr[event.target.id] = "X"
            if (checkWinner()) {
                document.getElementById("winningmessage").innerHTML = "Winner is X🎊🎊";
                board.removeEventListener("click",printer)
                return;
            }
            turn = "O";
        }
        else {
            element.innerHTML = "O";
            board_arr[event.target.id] = "O";
            if (checkWinner()) {
                document.getElementById("winningmessage").innerHTML = "Winner is O 🎊🎊 ";
                board.removeEventListener("click",printer)
                return;
            }
            turn = "X";
        }
        if(total_turn==9)
            document.getElementById("winningmessage").innerHTML=  "Match is Draw 🤦‍♂️🤦‍♂️ ";
            
    }
}
const board = document.querySelector('.board');
board.addEventListener("click",printer)



const Re_start=document.getElementById("restart_button");
// Re_start.addEventListener("click",()=>{
//     location.reload();
// })

Re_start.addEventListener("click",()=>{
    const cell=document.getElementsByClassName("cell");
    Array.from(cell).forEach((value)=>{
        value.innerHTML="";
    })  
    turn="X";
    total_turn=0;
    board_arr=new Array(9).fill("E");
    document.getElementById("winningmessage").innerHTML=  "";
    board.addEventListener("click",printer);
})
