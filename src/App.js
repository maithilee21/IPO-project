import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IPOListPage from "./Components/IPOListPage";
import IPODetailsPage from "./Components/IPODetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPOListPage />} />
        <Route path="/ipo-details/:ipoId" element={<IPODetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
