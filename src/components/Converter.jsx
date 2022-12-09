function Converter({ data, onClick }) {
  const { Name, Value, CharCode } = data;

  return (
    <option
      className="dropdown-content-item"
      value={CharCode}
      onClick={() => onClick(CharCode)}
    >
      {CharCode}
    </option>
  );
}

export default Converter;
