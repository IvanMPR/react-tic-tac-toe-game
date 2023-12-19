function GameBoard({ children }) {
  return (
    <div className="m-auto grid w-max grid-cols-3 grid-rows-3 gap-px">
      {children}
    </div>
  );
}

export default GameBoard;
