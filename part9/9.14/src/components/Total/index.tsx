import React from "react";

interface TotalProps {
  totalExercises: number;
}

const Total: React.FC<TotalProps> = ({ totalExercises }) => {
  return <div>Number of exercises {totalExercises}</div>;
};

export default Total;
