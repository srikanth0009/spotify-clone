import { useState } from "react";
import "./App.css";
import Login from "./Login";
import Callback from "./Callback";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const [code, setCode] = useState("");


  http: return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
