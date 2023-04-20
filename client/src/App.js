import axios from "axios";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import SelectPage from "./pages/selectPage.jsx";

function App() {
  const callApi = async () => {
    axios.get("/api").then((res) => console.log(res.data.test));
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/selectPage" element={<SelectPage />} />
      </Routes>
    </div>
  );
}

export default App;
