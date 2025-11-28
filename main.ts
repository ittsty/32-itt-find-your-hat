import promptSync from "prompt-sync";

// Types
type Tile = "*" | "░" | "O" | "^";
type Board = Tile[][];

const prompt = promptSync({ sigint: true });
const VALID_INPUT = ["w", "a", "s", "d"];
// Board tiles
const PLAYER: Tile = "*";
const EMPTY: Tile = "░";
const HOLE: Tile = "O";
const HAT: Tile = "^";

// Hardcoded board
let board: Board = [
  [PLAYER, EMPTY, HOLE],
  [EMPTY, HOLE, EMPTY],
  [EMPTY, HAT, EMPTY],
];

//  Game state
let playerRow: number = 0;
let playerCol: number = 0;
let playing: boolean = true;
let hatRow: number = 0;
let hatCol: number = 0;

let isFalloff: boolean = false;
let isHole: boolean = false;
let isHat: boolean = false;

function generateBoard(row: number, col: number, d: number) {
  for (let i = 0; i < row; i++) {
    board[i] = new Array(col).fill(EMPTY);
  }
  generateHole(row, col, d);
  generatePlayer(row, col);
  generateHat(row,col);
}
function generateHole(row: number, col: number, d: number) {
  let countHole = 0;
  while (countHole < Math.floor(d * (row * col))) {
    const rendRow = Math.floor(Math.random() * row);
    const rendCol = Math.floor(Math.random() * col);
    if (board[rendRow][rendCol] === EMPTY) {
      board[rendRow][rendCol] = HOLE;
      countHole++;
    }
  }
}
function generatePlayer(row: number, col: number) {
  while (true) {
    const rendRow = Math.floor(Math.random() * row);
    const rendCol = Math.floor(Math.random() * col);
    if (board[rendRow][rendCol] === EMPTY) {
      board[rendRow][rendCol] = PLAYER;
      playerRow = rendRow;
      playerCol = rendCol;
      return
    }
  }
}
function generateHat(row: number, col: number) {
  while (true) {
    const rendRow = Math.floor(Math.random() * row);
    const rendCol = Math.floor(Math.random() * col);
    if (board[rendRow][rendCol] === EMPTY) {
      board[rendRow][rendCol] = HAT;
      hatRow = rendRow;
      hatCol = rendCol;
      return
    }
  }
}

// Print board
function printBoard(board: Board): void {
  console.clear();
  board.forEach((row) => {
    console.log(row.join(""));
  });
}

function getInput(): string {
  while (true) {
    const input: string = prompt("Which way? (w/a/s/d): ").toLowerCase();
    if (VALID_INPUT.includes(input)) return input;
    console.log(`invalid movement`);
  }
}
function moveUp(): void {
  playerRow--;
  handleTile();
}
function moveDown(): void {
  playerRow++;
  handleTile();
}
function moveLeft(): void {
  playerCol--;
  handleTile();
}
function moveRight(): void {
  playerCol++;
  handleTile();
}
function movePlayer(input: string): void {
  switch (input) {
    case "w":
      if (playerRow > 0) {
        moveUp();
      } else isFalloff = true;
      break;
    case "s":
      if (playerRow < board.length - 1) {
        moveDown();
      } else isFalloff = true;
      break;
    case "a":
      if (playerCol > 0) {
        moveLeft();
      } else isFalloff = true;
      break;
    case "d":
      if (playerCol < board[0].length - 1) {
        moveRight();
      } else isFalloff = true;
      break;
  }
}

function handleTile(): void {
  if (board[playerRow][playerCol] === HAT) isHat = true;
  if (board[playerRow][playerCol] === HOLE) isHole = true;
  board[playerRow][playerCol] = PLAYER;
}

function ruleCheck(): void {
  if (isFalloff || isHat || isHole) playing = false;
}

function gameEnd(): void {
  if (isHole) console.log(`Game Over! : You fall off the hole!`);
  if (isFalloff) console.log(`Game Over! : You Out of bound!`);
  if (isHat) console.log(`You found Hat, You Win!`);
}

// Game play loop
generateBoard(7, 7, 0.5);
do {
  printBoard(board);
  movePlayer(getInput());
  ruleCheck();
} while (playing);
gameEnd();
