import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = column => {
    var sortBy = this.props.sortBy;
    if (sortBy.column === column) {
      sortBy.order = sortBy.order === "asc" ? "desc" : "asc";
    } else {
      sortBy.column = column;
      sortBy.order = "asc";
    }
    this.props.onSort(sortBy);
  };

  render() {
    const { columns } = this.props;
    return (
      <thead className="thead">
        <tr>
          {columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={event => {
                event.preventDefault();
                if (column.path) this.raiseSort(column.path);
              }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
