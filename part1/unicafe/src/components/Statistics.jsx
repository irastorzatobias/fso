import React from "react";
import Statistic from "./Atoms/Statistic";

const Statistics = ({ goodVal, neutralVal, badVal }) => {
  const all = goodVal + neutralVal + badVal;
  const average = (goodVal - badVal) / all;
  const positive = goodVal / all;

  return (
    <div>
      <h1>statistics</h1>
      {all ? (
        <table>
          <tbody>
            <Statistic title={"good: "} value={goodVal} />
            <Statistic title={"neutral: "} value={neutralVal} />
            <Statistic title={"bad: "} value={badVal} />
            <Statistic title={"total: "} value={all} />
            <Statistic title={"average: "} value={average} />
            <Statistic title={"positive: "} value={positive} />
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default Statistics;
