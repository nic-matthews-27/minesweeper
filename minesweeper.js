document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = { 
cells: [
    { col: 0,
    row:0, 
    isMine: false,
    hidden: true
   },
    
    { col: 0,
      row:1,
      isMine: true,
      hidden: true
        },
        
    { col: 0,
      row:2,
      isMine: false,
      hidden: true
        },
    { col:0,
      row:3,
      isMine: true,
      hidden:true
    },
    { col:1,
      row:0,
      isMine: false,
      hidden:true
        },
    { col:1,
      row:1,
      isMine: true,
      hidden:true
        },
    { col: 1,
      row:2,
      isMine: false,
      hidden:true
        },
    { col:1,
      row:3,
      isMine: false,
      hidden:true
        },
    { col:2,
      row:0,
      isMine: true,
      hidden:true
        },
    { col:2,
      row:1,
      isMine: false,
      hidden:true
        },
    { col:2,
      row:2,
      isMine: false,
      hidden:true
        },
    { col:2,
      row:3,
      isMine: true,
      hidden:true
        },
    { col:3,
      row:0,
      isMine: false,
      hidden:true
        },
    { col:3,
      row:1,
      isMine: false,
      hidden:true
        },
    { col:3,
      row:2,
      isMine: true,
      hidden:true
        },
    { col:3,
      row:3,
      isMine: false,
      hidden: true
        },
      ]
 }

function startGame () {
  // Don't remove this function call: it makes the game work!
  for(var i =0; i <  board.cells.length; i++) {
   console.log(board.cells[i])
   board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }

  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
    var count = 0
    var surrounding = lib.getSurroundingCells(cell.row, cell.col)
    for( var i =0; i <surrounding.length; i++){
      if(surrounding[i].isMine){
        count += 1
      }
    }
    return count
   }
  


