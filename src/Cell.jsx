function Cell(props) {
  const { handleClick, id, value } = props;

  return (
    <div
      onClick={() => handleClick(id)}
      className="flex h-16 w-16 cursor-pointer items-center justify-center border border-solid border-gray-700 bg-slate-200 text-xl font-bold"
    >
      {value === null ? "" : value}
    </div>
  );
}

export default Cell;
