import React, { Component } from "react";
import api from "../api";
import dummyApi from "../api/DummyData/dummyApi";
import { Pagination } from "../components";
import { paginate } from "../utils/paginate";
import EmployeeTable from "../components/EmployeeTable";
import _ from "lodash";
import { baseDivStyle } from "../utils/styles";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      columns: [],
      pageSize: 5,
      currentPage: 1,
      sortBy: { order: "desc", column: "createdAt" },
    };
  }

  // componentDidMount = async () => {
  //   this.setState({ isLoading: true });
  //   await api.getAllEmployees().then(employees => {
  //     this.setState({
  //       employees: employees.data.data,
  //       isLoading: false
  //     });
  //   });
  // };

  componentDidMount() {
    this.setState({ isLoading: true });
    const employees = dummyApi.getAllEmployees();
    this.setState({ employees, isLoading: false });
  }

  handleUpdateEmployee = (employee) => {
    var id = employee._id;
    window.location.href = `/employees/update/${id}`;
  };

  handleDeleteEmployee = (employee) => {
    var id = employee._id;
    if (
      window.confirm(
        `Do tou want to delete the employee ${employee.firstName} permanently?`
      )
    ) {
      var payload = { id: id };
      payload.firstName = employee.firstName;
      payload.lastName = employee.lastName;
      payload.salary = employee.salary;
      payload.takeHome = employee.takeHome;
      payload.deductions = employee.deductions;
      payload.isDeleted = true;
      const success = dummyApi.softDeleteEmployeeById(id, payload);
      if (success) {
        const employees = dummyApi.getAllEmployees();
        this.setState({ employees });
      }
    }
  };

  // handleDeleteEmployee = async (employee) => {
  //   var id = employee._id;
  //   if (
  //     window.confirm(
  //       `Do tou want to delete the employee ${employee.firstName} permanently?`
  //     )
  //   ) {
  //     var payload = { id: id };
  //     payload.firstName = employee.firstName;
  //     payload.lastName = employee.lastName;
  //     payload.salary = employee.salary;
  //     payload.takeHome = employee.takeHome;
  //     payload.deductions = employee.deductions;
  //     payload.isDeleted = true;

  //     api.softDeleteEmployeeById(id, payload);

  //     window.location.reload();
  //   }
  // };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortBy) => {
    this.setState({ sortBy });
  };

  render() {
    const { employees } = this.state;
    console.log(this.state.employees);
    let showTable = true;
    if (!employees.length) {
      showTable = false;
    }

    const { currentPage, pageSize, sortBy } = this.state;
    const employeesSorted = _.orderBy(
      employees,
      [sortBy.column],
      [sortBy.order]
    );
    const employeesPaginated = paginate(employeesSorted, currentPage, pageSize);
    return (
      <div style={baseDivStyle}>
        <div>
          <p>
            {showTable
              ? `Showing ${employees.length} employees`
              : "There are no employees"}
          </p>
          {showTable && (
            <EmployeeTable
              employees={employeesPaginated}
              sortBy={sortBy}
              onUpdate={this.handleUpdateEmployee}
              onDelete={this.handleDeleteEmployee}
              onSort={this.handleSort}
            />
          )}

          {showTable && (
            <Pagination
              itemCount={employees.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default EmployeeList;
