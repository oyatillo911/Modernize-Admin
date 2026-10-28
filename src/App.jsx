import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Orders from "./pages/orders/Orders";

// Sahifalaringizni shu yerga import qilasiz (misol uchun):
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<RootLayout />}>
          {/* <Route index element={<Dashboard />} /> */}
          <Route index element={<Dashboard/>} />
          <Route path="orders" element={<Orders/>} />
          {/* <Route path="orders" element={<Orders />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;