export const testWinner = (gamePiece, movesArray, winningIndexesArray) =>
  winningIndexesArray.some((subArr) =>
    subArr.every((index) => movesArray[index] === gamePiece)
  );

export const winningIndexes = [
  // horizontal win
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical win
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal win
  [0, 4, 8],
  [2, 4, 6],
];
