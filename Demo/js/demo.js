'use strict';

let scores = [];

function newPlayer() {
  scores.push({
    name: localStorage.getItem('userName'),
    score: Number(localStorage.getItem('score')),
    id: 'playerx'
  });
  storeTable();
};

function storeTable() {
  // Convert scores to string, then save to localStorage
  let tempString = JSON.stringify(scores);
  localStorage.setItem('highScoreTable', tempString);
}

function getTable() {
  // if highScoreTable doesn't exist, create a temp one
  if (localStorage.getItem('highScoreTable') === null) {
    scores = [
      { name: "Player1", score: 430, id: "player1" },
      { name: "Player2", score: 580, id: "player2" },
      { name: "Player3", score: 410, id: "player3" },
      { name: "Player4", score: 640, id: "player4" },
      { name: "Player5", score: 495, id: "player5" },
    ];
    storeTable();
  }

  // Get table from localStorage, then parse into array
  let tempArray = [];
  let tempString = localStorage.getItem('highScoreTable');
  tempArray = JSON.parse(tempString);
  
  for (let i = 0; i < tempArray.length; i++) {
    tempArray[i].score = Number(tempArray[i].score);
  }
  return tempArray;
}

function clearTable (){
  localStorage.clear();
  scores = getTable();
}

// *********** Executable Code *********
scores = getTable();
newPlayer();



function createTable (table, data){
  // ***** Table generator
  // requires table element with ID
  // requires data in form of an array
  // let tempArray = [
  //   ['header 1', 'header 2', 'header 3'],
  //   [1,2,3],
  //   [4,5,6],
  //   [7,8,9],
  // ]
  let tableDOM = document.getElementById(table);
  tableDOM.innerHTML=""; // clears table
  let numColumns = data[0].length;
  let numRows = data.length;
  let rowElem;
  let headerElem;
  let cellElem;
  console.log(numRows);

  // Create header row
  rowElem = document.createElement('tr');
  tableDOM.appendChild(rowElem);

  // Create header cells
  for(let i=0; i< numColumns; i++){
    headerElem = document.createElement('th');
    headerElem.textContent = data[0][i];
    rowElem.appendChild(headerElem);
  }

  // Create data rows
  // i = row, j = column
  for (let i=1; i<numRows;i++ ){
    rowElem = document.createElement('tr');
    tableDOM.appendChild(rowElem);
    // create data cells
    for (let j=0;j<numColumns;j++){
      cellElem = document.createElement('td');
      cellElem.textContent = data[i][j];
      rowElem.appendChild(cellElem);
    }
  }
}


let tempArray = [
  ['header 1', 'header 2', 'header 3', 'header 4'],
  [4,5,6,5],
  [1,2,3,5],
  [4,5,6,5],
  [7,8,9,5],
  [4,5,6,5]
]

createTable('table',tempArray);
