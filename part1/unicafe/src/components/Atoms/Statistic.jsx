import React from "react";

const Statistic = ({ title, value }) => {
  return (
    <>
    <tr>
      <td>{title}</td>
      <td>{value}</td>
    </tr>
    </>
  );
};

export default Statistic;