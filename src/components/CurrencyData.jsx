import Currency from "./Currency";
import { useOutletContext } from "react-router-dom";

function CurrencyData() {
  const Valute = useOutletContext();

  return (
    <>
      <h1>Currency</h1>
      <div className="currency">
        {Object.entries(Valute).map((data) => {
          return <Currency key={data[1].ID} data={data[1]} />;
        })}
      </div>
    </>
  );
}

export default CurrencyData;
