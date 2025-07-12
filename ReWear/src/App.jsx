import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Dashboard from "./Pages/Dashboard.jsx";  
import Add_items from "./Pages/Add_items.jsx";
import "./App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-items" element={<Add_items />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>

  );
}

export default App;
