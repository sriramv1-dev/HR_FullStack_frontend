import React, { Component } from "react";
import api from "../api";
import { EmployeeInformationComponent } from "../components";

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: { firstName: "", lastName: "", salary: "", isDeleted: false }
    };
  }

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

  handleCreateEmployee = async () => {
    const payload = this.state.employee;
    await api.insertEmployee(payload).then(res => {
      window.alert(`Employee inserted successfully`);
    });
    window.location.href = `/employees`;
  };

  render() {
    return (
      <EmployeeInformationComponent
        isCreate={true}
        inputChanged={this.inputChanged}
        handleSubmit={this.handleCreateEmployee}
        {...this.state.employee}
      />
    );
  }
}

export default EmployeeCreate;
