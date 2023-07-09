// import { Controle } from "./pages/Controle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import { Provider } from "react-redux";
import store from "./store/Store";
// import Login from "./pages/Login";

import Of from "./pages/Of.tsx";
import Navbar from "./components/Navbar";
import Planning from "./pages/Planning.tsx";

function App() {
  return (
    <div className="bg-violet-100">
      <Provider store={store}>
        <BrowserRouter>
          <div className="  w-screen  h-screen overflow-y-scroll relative">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/planification" element={<Planning />} />
              {/* <Route path="/Controle" element={<Controle />} /> */}
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/atelier" element={<Atelier />} /> */}
              <Route path="/of/:id" element={<Of />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
