import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ data, columns, sortBy, onSort }) => {
  return (
    <table
      className="table table-bordered table-striped"
      style={{ textAlign: "center" }}
    >
      <TableHeader columns={columns} sortBy={sortBy} onSort={onSort} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
