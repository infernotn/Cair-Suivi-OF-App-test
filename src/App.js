import { Controle } from "./pages/Controle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./store/Store";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="bg-slate-200 min-h-screen">
          <Routes>
            <Route path="/Controle" element={<Controle />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
