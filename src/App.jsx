import { useEffect, useState } from "react";

import Cell from "./Cell";
import InfoDisplay from "./InfoDisplay";
import GameBoard from "./GameBoard";

import { testWinner, winningIndexes } from "./utils";

function App() {
  const [isGameOver, setIsGameOver] = useState(false);
  const [cells, setCells] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(() => (Math.random() > 0.5 ? "X" : "O"));

  function handleClick(id) {
    if (isGameOver) return;

    setCells((prev) => prev.map((cell, i) => (i === id ? player : cell)));
    setPlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  function reset() {
    setIsGameOver(false);
    setCells(Array(9).fill(null));
    setPlayer("X");
  }

  useEffect(() => {
    function draw() {
      return cells.every((cell) => cell !== null);
    }

    const isWinnerX = testWinner("X", cells, winningIndexes);
    const isWinnerO = testWinner("O", cells, winningIndexes);
    const drawMatch = draw();

    setIsGameOver(isWinnerX || isWinnerO || drawMatch);
    setPlayer(
      isWinnerX ? "X" : isWinnerO ? "O" : drawMatch ? "Nobody" : player
    );
  }, [cells, player, isGameOver]);

  return (
    <div className="container m-auto h-screen bg-red-50 text-center">
      <h1 className="mb-20 pt-5 text-4xl font-bold">Tic Tac Toe - React</h1>
      <GameBoard>
        {cells.map((cell, i) => (
          <Cell key={i} id={i} handleClick={handleClick} value={cell} />
        ))}
      </GameBoard>
      <InfoDisplay player={player} isGameOver={isGameOver} />
      {isGameOver && (
        <button
          onClick={reset}
          className="mt-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default App;
