import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Dropdown from "./Dropdown";

function ConverterData() {
  const Valute = useOutletContext();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setValue(result);
  };

  const listOfValutes = (valutes) => {
    return Object.entries(valutes).map((valute) => {
      return { name: valute[0], value: valute[0] };
    });
  };

  const selectCurrency = (value) => {
    setSelectedCurrency(value);
  };

  return (
    <div className="converterBlock">
      <h1>Converter</h1>
      <div className="dropdown">
        <input type="text" onChange={handleChange} value={value} />
        <div className="dropDownBlock">
          <Dropdown
            options={Valute && listOfValutes(Valute)}
            selectedValue={selectedCurrency}
            onClick={selectCurrency}
          ></Dropdown>
        </div>
        <p>
          in RUB:
          {Object.entries(Valute).map((data) => {
            return (
              selectedCurrency === data[1].CharCode && (
                <span key={data[1].ID}>
                  {(value * data[1].Value).toFixed(2)}
                </span>
              )
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default ConverterData;
