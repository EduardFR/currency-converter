import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

function MainLayout() {
  const [Valute, setDataBase] = useState(null);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((data) => {
        setDataBase(data.Valute);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Menu />
      {Valute && <Outlet context={Valute} />}
    </>
  );
}

export default MainLayout;
