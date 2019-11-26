import React, { Component } from "react";
import Table from "./shared/table";
import { formatDateTime } from "../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { label: "First Name", path: "firstName" },
        { label: "Last Name", path: "lastName" },
        {
          label: "Salary",
          path: "salary",
          content: row => (
            <label>
              {"$ " +
                row.salary
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
            </label>
          )
        },
        { label: "Frequency", path: "payFrequency" },
        {
          label: "Take Home",
          path: "takeHome",
          content: row => (
            <label>
              {"$ " +
                row.takeHome
                  .toString()
                  .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
            </label>
          )
        },
        {
          label: "Date Created",
          path: "createdAt",
          content: row => <label>{formatDateTime(row.createdAt)}</label>
        },
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
              <FontAwesomeIcon icon={faTrash} />
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
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )
        }
        // {
        //   key: "actions",
        //   label: "",
        //   content: employee => (
        //     <div className="btn-group" style={{ overflow: "visible" }}>
        //       <button className="btn btn-info">Actions</button>
        //       <button
        //         className="btn btn-info dropdown-toggle dropdown-toggle-split"
        //         data-toggle="dropdown"
        //         aria-haspopup="true"
        //         aria-expanded="false"
        //       >
        //         <span className="sr-only">Toggle Dropdown</span>
        //       </button>
        //       <div className="dropdown-menu">
        //         <a className="dropdown-item" href="#">
        //           Update
        //         </a>
        //         <a className="dropdown-item" href="#">
        //           Delete
        //         </a>
        //       </div>
        //     </div>
        //   )
        // }
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
