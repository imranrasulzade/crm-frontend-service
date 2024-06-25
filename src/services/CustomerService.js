import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8083/api/v1/customer";

class CustomerService {
  saveCustomer(customer) {
    return axios.post(CUSTOMER_API_BASE_URL + "/new", customer);
  }

  getCustomers() {
    return axios.get(CUSTOMER_API_BASE_URL + "/all");
  }

  deleteCustomer(id) {
    return axios.delete(CUSTOMER_API_BASE_URL + "/delete/" + id);
  }

  getCustomerById(id) {
    return axios.get(CUSTOMER_API_BASE_URL + "/view/" + id);
  }

  updateCustomer(customer, id) {
    return axios.put(CUSTOMER_API_BASE_URL + "/edit/" + id, customer);
  }
}

export default new CustomerService();