import { BrowserRouter, Route, Routes } from "react-router-dom";
import Converter from "./components/Converter";
import MainLayout from "./Main/MainLayout";
import "./App.css";
import CurrencyData from "./components/CurrencyData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Converter />} />
            <Route path="currency" element={<CurrencyData />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
