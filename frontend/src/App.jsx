import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import LeadDetails from "./pages/LeadDetails";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/leads"
        element={<Leads />}
      />

      <Route
        path="/lead/:id"
        element={<LeadDetails />}
      />

    </Routes>
  );
}

export default App;