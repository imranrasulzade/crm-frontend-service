import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

const UpdateCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    id: id,
    name: "",
    surname: "",
    email: "",
    birthdate: "",
    customerStatus: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setCustomer({ ...customer, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CustomerService.getCustomerById(customer.id);
        setCustomer(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateCustomer = (e) => {
    e.preventDefault();
    console.log(customer);
    CustomerService.updateCustomer(customer, id)
      .then((response) => {
        navigate("/customerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Customer</h1>
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
            onClick={updateCustomer}
            className="rounded text-white font-semibold bg-green-900 hover:bg-green-700 py-2 px-6">
            Update
          </button>
          <button
            onClick={() => navigate("/customerList")}
            className="rounded text-white font-semibold bg-gray-600 hover:bg-red-700 py-2 px-6">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomer;