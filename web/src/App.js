import { Routes, Route } from "react-router-dom";

import './App.css';
import { SideCard } from "./pages/SideCard";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { UseAvoid, UseProtection } from "./lib/middleware";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";


function App() {
  return (
    <div className="App">

      <div className="side">
        <SideCard />
      </div>

      <div className="centered-element">
          <Routes>
            <Route index element={UseProtection(<Home />)} />
            <Route path="/settings" element={UseProtection(<Settings />)} />
            <Route path="/login" element={UseAvoid(<Login />)} />
            <Route path="/register" element={UseAvoid(<Register />)} />
          </Routes>
      </div>

    </div>
  );
}

export default App;
