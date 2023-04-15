import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewYears from "./components/NewYears";
import Summer from "./components/Summer";
import Christmas from "./components/Christmas";
import SelectCount from "./components/SelectCount";

import React from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <SelectCount />
        <Routes>
          <Route>
            <Route path="/" element={<Christmas />} />
            <Route path="/NewYears" element={<NewYears />} />
            <Route path="/Summer" element={<Summer />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
