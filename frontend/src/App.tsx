import React from "react";
import Level2_2 from "./components/Level2_2";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Main from "./pages/Game/Main";
import "./index.css";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Level2_2" element={<Level2_2 />} />
      </Routes>
    </Router>
  );
};

export default App;
