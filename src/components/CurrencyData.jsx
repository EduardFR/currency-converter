import { useEffect, useState } from "react";
import Currency from "./Currency";

function CurrencyData() {
  const [dataBase, setDataBase] = useState(null);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataBase(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="currency">
      {dataBase &&
        Object.entries(dataBase.Valute).map((data) => {
          return <Currency key={data[1].ID} data={data[1]} />;
        })}
    </div>
  );
}

export default CurrencyData;
