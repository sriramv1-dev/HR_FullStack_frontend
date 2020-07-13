import data from "./employeesData";
import _ from "lodash";

var employees = data;
export const getAllEmployees = () => {
  return employees.filter((employee) => employee.isDeleted === false);
};

export const softDeleteEmployeeById = (id, payload) => {
  try {
    // Find item index using _.findIndex
    var index = _.findIndex(employees, { id });
    var updatedEmployee = employees[index];
    updatedEmployee.isDeleted = true;

    // Replace item at index using native splice
    employees.splice(index, 1, updatedEmployee);
    return true;
  } catch (error) {
    return false;
  }
};

const dummyApi = {
  getAllEmployees,
  softDeleteEmployeeById,
};

export default dummyApi;
