import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerService from "../services/CustomerService";
import Customer from "./Customer";

const CustomerList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CustomerService.getCustomers();
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCustomer = (e, id) => {
    e.preventDefault();
    CustomerService.deleteCustomer(id).then((res) => {
      if (customers) {
        setCustomers((prevElement) => {
          return prevElement.filter((customer) => customer.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addCustomer")}
          className="rounded bg-green-600 text-white px-6 py-2 font-semibold">
          Add New Customer
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-green-700">
            <tr>
            <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                #
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Surname
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Email
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Birthdate
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Status
              </th>
              <th className="text-right font-medium text-white uppercase tracking-wider py-3 px-6">
                Operations
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white text-black font-bold">
              {customers.map((customer) => (
                <Customer
                  customer={customer}
                  deleteCustomer={deleteCustomer}
                  key={customer.id}></Customer>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CustomerList;