import React from "react";
import { useNavigate } from "react-router-dom";

const Customer = ({ customer, deleteCustomer }) => {
  const navigate = useNavigate();
  const editCustomer = (e, id) => {
    e.preventDefault();
    navigate(`/editCustomer/${id}`);
  };

  return (
    <tr key={customer.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{customer.id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{customer.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{customer.surname}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{customer.email}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{customer.birthdate}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{customer.customerStatus}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editCustomer(e, customer.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteCustomer(e, customer.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Customer;