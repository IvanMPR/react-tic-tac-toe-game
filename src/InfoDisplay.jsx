function InfoDisplay({ player, isGameOver }) {
  return (
    <div className="m-auto mt-12 w-64 border px-1 py-2 font-bold">
      {isGameOver ? `${player} has won the match` : `${player} is on the move`}
    </div>
  );
}

export default InfoDisplay;
