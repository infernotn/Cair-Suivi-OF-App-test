import { Forms } from "./pages/forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
