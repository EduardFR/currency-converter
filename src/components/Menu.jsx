import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Converter
      </NavLink>
      <NavLink to="currency">Currency valute</NavLink>
    </nav>
  );
};

export default Menu;
