import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Converter from "./Converter";

function ConverterData() {
  const Valute = useOutletContext();
  const [selectedCurrency, setselectedCurrency] = useState("USD");

  const toggleList = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  const test = (currencyCode) => {
    setselectedCurrency(currencyCode);
  };

  return (
    <div className="converterBlock">
      <h1>Converter</h1>
      <div className="dropdown">
        <p>asddsaddaadasas</p>
        <div className="dropDownBlock">
          <button onClick={toggleList} className="dropbtn">
            {selectedCurrency}
          </button>
          <div id="myDropdown" className="dropdown-content">
            {Object.entries(Valute).map((data) => {
              return (
                <Converter key={data[1].ID} data={data[1]} onClick={test} />
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ConverterData;
