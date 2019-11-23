import React, { Component } from "react";
import Table from "./shared/table";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { label: "First Name", path: "firstName" },
        { label: "Last Name", path: "lastName" },
        { label: "Salary", path: "salary" },
        {
          key: "delete",
          label: "",
          content: employee => (
            <button
              onClick={event => {
                event.preventDefault();
                this.props.onDelete(employee);
              }}
              className="btn btn-danger btn-sm"
            >
              <i className="fa fa-trash" aria-hidden="true" />
              Delete
            </button>
          )
        },
        {
          key: "update",
          label: "",
          content: employee => (
            <button
              onClick={event => {
                event.preventDefault();
                this.props.onUpdate(employee);
              }}
              className="btn btn-primary btn-sm"
            >
              <i className="fa fa-pencil" aria-hidden="true" />
              Update
            </button>
          )
        }
      ]
    };
  }

  render() {
    const { employees, sortBy, onSort } = this.props;
    return (
      <Table
        data={employees}
        columns={this.state.columns}
        sortBy={sortBy}
        onSort={onSort}
      />
    );
  }
}

export default EmployeeTable;
