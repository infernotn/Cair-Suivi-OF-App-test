import { Controle } from "./pages/Controle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store/Store";
import Login from "./pages/Login";
import Atelier from "./pages/Atelier";
import Of from "./pages/Of";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-slate-200  h-fit md:h-screen ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Controle" element={<Controle />} />
            <Route path="/login" element={<Login />} />
            <Route path="/atelier" element={<Atelier />} />
            <Route path="/of" element={<Of />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
