import React, { Component } from "react";
import FormInputComponent from "./shared/FormInputComponent";
import { cancelStyle, baseDivStyle } from "../utils/styles";
import { salaryPattern, namePattern } from "../utils/patterns";
import FormLabelInputRuleComponent from "./shared/FormLabelInputRuleComponent";
import { wageOptions } from "../utils/options";
import FormSelectComponent from "./shared/FormSelectComponent";

class EmployeeInformationComponent extends Component {
  render() {
    const {
      isCreate,
      firstName,
      lastName,
      salary,
      takeHome,
      deductions,
      payFrequency,
      inputChanged,
      handleSubmit
    } = this.props;
    return (
      <div className="card" style={baseDivStyle}>
        <div className="card-header">
          <h3>{isCreate ? "Create Employee" : "Update Employee"}</h3>
        </div>

        <div className="card-body">
          <FormInputComponent
            name="firstName"
            type="text"
            labelName="First Name:"
            placeholder="Enter First Name"
            value={firstName}
            pattern={namePattern}
            onChange={inputChanged}
          />
          <br />
          <FormInputComponent
            name="lastName"
            type="text"
            labelName="Last Name:"
            placeholder="Enter Last Name"
            pattern={namePattern}
            value={lastName}
            onChange={inputChanged}
          />
          {/*<br />
          <FormSelectComponent
            name="payFrequency"
            labelName="Pay Frequency:"
            value={payFrequency}
            onChange={inputChanged}
            options={wageOptions}
          />*/}

          <br />
          <FormInputComponent
            name="salary"
            type="number"
            labelName="Salary ($):"
            placeholder="Enter Annual Salary"
            value={salary}
            pattern={salaryPattern}
            onChange={inputChanged}
          />
        </div>

        <div className="card-header">
          <h3>Salary Deductions</h3>
        </div>

        <div className="card-body">
          <FormLabelInputRuleComponent
            name="federalTax"
            type="number"
            labelName="Federal Tax:"
            placeholder=""
            value={deductions.federalTax}
            onChange={inputChanged}
            rule="14.18% "
            readOnly={true}
          />
          <br />
          <FormLabelInputRuleComponent
            name="socialSecurityTax"
            type="number"
            labelName="Social Security Tax:"
            placeholder=""
            value={deductions.socialSecurityTax}
            onChange={inputChanged}
            rule="6.2%, max: $8239.80"
            readOnly={true}
          />

          <br />
          <FormLabelInputRuleComponent
            name="medicareTax"
            type="number"
            labelName="Medicare Tax:"
            placeholder=""
            value={deductions.medicareTax}
            onChange={inputChanged}
            rule="1.45%, increases to 2.35% on wages earned over $200,000.00"
            readOnly={true}
          />

          <br />
          <FormLabelInputRuleComponent
            name="ficaTax"
            type="number"
            labelName="FICA:"
            placeholder=""
            value={deductions.ficaTax}
            onChange={inputChanged}
            rule="The Federal Insurance Contributions Act: Social Security + Medicare"
            readOnly={true}
          />

          <br />
          <FormLabelInputRuleComponent
            name="ficaTax"
            type="number"
            labelName="Take Home: "
            placeholder="Take Home Salary"
            value={takeHome}
            onChange={inputChanged}
            rule="Salary - (Federal Tax + FICA)"
            readOnly={true}
          />
        </div>

        <div className="card-footer">
          <button className="btn btn-primary" onClick={handleSubmit}>
            {isCreate ? "Add" : "Update"}
          </button>
          <a className="btn btn-danger" style={cancelStyle} href={"/employees"}>
            Cancel
          </a>
        </div>
      </div>
    );
  }
}

export default EmployeeInformationComponent;

// https://hrapp-d9728.firebaseapp.com/
