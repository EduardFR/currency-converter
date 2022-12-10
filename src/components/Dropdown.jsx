function Dropdown({ options, selectedValue, onClick }) {
  const toggleList = () => {
    document.getElementById("dropdown").classList.toggle("show");
  };

  return (
    <div className="dropdown">
      <button onClick={toggleList} className="dropbtn">
        {selectedValue}
      </button>
      <div id="dropdown" className="dropdown-content">
        {options &&
          options.map((option) => {
            return (
              <option
                key={option.value}
                className="dropdown-content-item"
                value={option.value}
                onClick={() => onClick(option.value)}
              >
                {option.name}
              </option>
            );
          })}
      </div>
    </div>
  );
}

export default Dropdown;
