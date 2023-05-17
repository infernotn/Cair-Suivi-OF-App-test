import { Controle } from "./pages/Controle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Controle" element={<Controle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
