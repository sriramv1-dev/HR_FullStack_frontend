import React, { Component } from "react";
import api from "../api";
import { EmployeeInformationComponent } from "../components";
import {
  calculateFederalTax,
  calculateSocialSecurityTax,
  calculateMedicare,
  calculateFICA,
  calculateTakeHome
} from "../utils/functions";

class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        firstName: "",
        lastName: "",
        salary: "",
        takeHome: "",
        deductions: {
          federalTax: "",
          socialSecurityTax: "",
          medicareTax: "",
          medicareTax: "",
          ficaTax: ""
        },
        isDeleted: false
      }
    };
  }

  inputChanged = event => {
    var employee = this.state.employee;
    if (event.target.name === "salary") {
      const salary = event.target.validity.valid
        ? event.target.value
        : employee.salary;

      const federalTax = calculateFederalTax(salary);
      const socialSecurityTax = calculateSocialSecurityTax(salary);
      const medicareTax = calculateMedicare(salary);
      const ficaTax = calculateFICA(salary);
      const takeHome = calculateTakeHome(salary, {
        federalTax: federalTax,
        socialSecurityTax: socialSecurityTax,
        medicareTax: medicareTax,
        ficaTax: ficaTax
      });

      employee[event.target.name] = salary;

      employee.deductions["federalTax"] = federalTax;
      employee.deductions["socialSecurityTax"] = socialSecurityTax;
      employee.deductions["medicareTax"] = medicareTax;
      employee.deductions["ficaTax"] = ficaTax;
      employee["takeHome"] = takeHome;
    } else {
      employee[event.target.name] = event.target.value;
    }
    console.log(employee);
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
