import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddCustomer from "./components/AddCustomer";
import CustomerList from "./components/CustomerList";
import Navbar from "./components/Navbar";
import UpdateCustomer from "./components/UpdateCustomer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<CustomerList />} />
          <Route path="/" element={<CustomerList />}></Route>
          <Route path="/customerList" element={<CustomerList />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/editCustomer/:id" element={<UpdateCustomer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;