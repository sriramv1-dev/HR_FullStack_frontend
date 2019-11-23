import React, { Component } from "react";
import api from "../api";
import { EmployeeInformationComponent } from "../components";

class EmployeeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        id: this.props.match.params.id,
        firstName: "",
        lastName: "",
        salary: "",
        isDeleted: false
      }
    };
  }

  componentDidMount = async () => {
    const retVal = await api.getEmployeeById(this.props.match.params.id);

    var employee = this.state.employee;
    employee.firstName = retVal.data.data.firstName;
    employee.lastName = retVal.data.data.lastName;
    employee.salary = retVal.data.data.salary;
    employee.isDeleted =
      retVal.data.data.isDeleted === undefined
        ? false
        : retVal.data.data.isDeleted;
    this.setState({ employee });
  };

  inputChanged = event => {
    var employee = this.state.employee;
    if (event.target.name === "salary") {
      const salary = event.target.validity.valid
        ? event.target.value
        : employee.salary;
      employee[event.target.name] = salary;
    } else {
      employee[event.target.name] = event.target.value;
    }
    this.setState({ employee });
  };

  handleUpdateEmployee = async () => {
    const { id, firstName, lastName, salary, isDeleted } = this.state.employee;
    const payload = { firstName, lastName, salary, isDeleted };

    await api.updateEmployeeById(id, payload).then(res => {
      window.alert(`Employee updated successfully`);
    });
    window.location.href = `/employees`;
  };

  render() {
    return (
      <EmployeeInformationComponent
        isCreate={false}
        inputChanged={this.inputChanged}
        handleSubmit={this.handleUpdateEmployee}
        {...this.state.employee}
      />
    );
  }
}

export default EmployeeUpdate;
