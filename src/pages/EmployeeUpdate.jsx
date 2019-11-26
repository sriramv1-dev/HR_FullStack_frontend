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

class EmployeeUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {
        id: this.props.match.params.id,
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

  componentDidMount = async () => {
    const retVal = await api.getEmployeeById(this.props.match.params.id);
    var employee = this.state.employee;
    const {
      firstName,
      lastName,
      salary,
      takeHome,
      deductions,
      isDeleted
    } = retVal.data.data;

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.salary = salary;
    employee.takeHome = takeHome;
    employee.deductions = deductions;
    employee.isDeleted = isDeleted === undefined ? false : isDeleted;
    this.setState({ employee });
  };

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

  handleUpdateEmployee = async () => {
    const {
      id,
      firstName,
      lastName,
      salary,
      takeHome,
      deductions,
      isDeleted
    } = this.state.employee;
    const payload = {
      firstName,
      lastName,
      salary,
      takeHome,
      deductions,
      isDeleted
    };

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
