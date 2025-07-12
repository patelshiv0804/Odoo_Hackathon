import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage.jsx";
import Dashboard from "./Pages/Dashboard.jsx";  
import Add_items from "./Pages/AddNewItemPage.jsx";
import AdminPanel from "./Pages/Admin_panel.jsx";
import "./App.css";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-items" element={<Add_items />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>

  );
}

export default App;
