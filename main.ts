import promptSync from "prompt-sync";

// Types
type Tile = "*" | "░" | "O" | "^";
type Board = Tile[][];

const prompt = promptSync({ sigint: true });
const vaildInput = ["w", "a", "s", "d"];
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

let isFalloff: boolean = false;
let isHole: boolean = false;
let isHat: boolean = false;

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
    if (vaildInput.includes(input)) return input;
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

function ruleCheck() : void {
  if (isFalloff || isHat || isHole) playing = false;
}

function gameEnd(): void {
  if (isHole) console.log(`Game Over! : You fall off the hole!`);
  if (isFalloff) console.log(`Game Over! : You Out of bound!`);
  if (isHat) console.log(`You found Hat, You Win!`);
}
// Game play loop
do {
  printBoard(board);
  movePlayer(getInput());
  ruleCheck();
} while (playing);
gameEnd();
