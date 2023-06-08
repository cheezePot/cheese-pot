import axios from "axios";
import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main.jsx";
import SelectPage from "./pages/selectPage.jsx";
import LocList from "./pages/locList";
import LocDetail from "./pages/locDetail";
import CheezeList from "./pages/cheezeList";

export const AppContext = createContext();

function App() {
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || []);

  // const [isOn, setisOn] = useState(bookmarks.includes(props.locnum));
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks])

  
  return (
    <AppContext.Provider value={{bookmarks, setBookmarks}}>
      <Routes>
        <Route path="/" exact element={<Main />} />
        {/* 동적라우팅 */}
        <Route path="/selectPage/:content" element={<SelectPage />} />
        <Route path="/locList/:conloc" element={<LocList />} />
        <Route path="/locDetail/:locnum" element={<LocDetail />} />
        <Route path="/cheezeList" element={<CheezeList />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
