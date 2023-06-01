import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import SelectPage from "./pages/selectPage.jsx";
import LocList from "./pages/locList";
import LocDetail from "./pages/locDetail";
import CheezeList from "./pages/cheezeList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        {/* 동적라우팅 */}
        <Route path="/selectPage/:content" element={<SelectPage />} />
        <Route path="/locList/:content/:conloc" element={<LocList />} />
        <Route path="/locList/:connum/locDetail/:locnum" element={<LocDetail />} />
        <Route path="/cheezeList" element={<CheezeList />} />
      </Routes>
    </div>
  );
}

export default App;
