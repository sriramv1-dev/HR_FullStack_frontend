import _ from "lodash";

export function paginate(data, pageNumber, pageSize) {
  // get the start index
  const startIndex = (pageNumber - 1) * pageSize;

  // now convert the data to  a lodash wrapper
  // slice the data from the start index
  // get the pageSize number of entries
  // convert the lodash wrapper of the data back to array
  // finally return the final value.
  return _(data)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
