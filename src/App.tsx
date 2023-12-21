import { BrowserRouter, Routes, Route } from "react-router-dom";
import Complete from "./pages/Complete";
import FinancialInfo from "./pages/FinancialInfo";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/financialinfo" element={<FinancialInfo />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
