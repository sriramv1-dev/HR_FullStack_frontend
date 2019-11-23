import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3456/api"
});

export const insertEmployee = payload => api.post(`/employee`, payload);
export const getAllEmployees = () => api.get(`/employees`);
export const updateEmployeeById = (id, payload) =>
  api.put(`/employee/${id}`, payload);
export const hardDeleteEmployeeById = id => api.delete(`/employee/${id}`);
export const softDeleteEmployeeById = (id, payload) =>
  api.put(`/employee/${id}`, payload);
export const getEmployeeById = id => api.get(`/employee/${id}`);

const apis = {
  insertEmployee,
  getAllEmployees,
  updateEmployeeById,
  // deleteEmployeeById,
  hardDeleteEmployeeById,
  softDeleteEmployeeById,
  getEmployeeById
};

export default apis;
