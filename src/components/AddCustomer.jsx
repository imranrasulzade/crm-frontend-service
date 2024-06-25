import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
    birthdate: "",
    customerStatus: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  const saveCustomer = (e) => {
    e.preventDefault();
    CustomerService.saveCustomer(customer)
      .then((response) => {
        console.log(response);
        navigate("/customerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setCustomer({
      id: "",
    name: "",
    surname: "",
    email: "",
    birthdate: "",
    customerStatus: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Customer</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-green-900 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-green-900 text-sm font-normal">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            value={customer.surname}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-green-900 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-green-900 text-sm font-normal">
            Birthdate
          </label>
          <input
            type="date"
            name="birthdate"
            value={customer.birthdate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-green-900 text-sm font-normal">
            Status
          </label>
          <input
            type="text"
            name="customerStatus"
            value={customer.customerStatus}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveCustomer}
            className="rounded text-white font-semibold bg-green-900 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-gray-600 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;