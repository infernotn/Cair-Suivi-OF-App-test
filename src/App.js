import { Controle } from "./pages/Controle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store/Store";
import Login from "./pages/Login";
import Atelier from "./pages/Atelier";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-slate-200 h-fit min-h-max md:h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Controle" element={<Controle />} />
            <Route path="/login" element={<Login />} />
            <Route path="/atelier" element={<Atelier />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
