import React, { Suspense } from "react";
import {
  Dashboard,
} from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (

    <Suspense fallback={"Loading..."}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} exact={true} />
          <Route path="/dashboard" element={<Dashboard />} exact={true} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
