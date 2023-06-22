import React from "react";
import { CoursePart } from "../../types";

interface PartProps {
  coursePart: CoursePart;
}

const Part: React.FC<PartProps> = ({ coursePart }) => {
  const header = (
    <h3>
      {coursePart.name} {coursePart.exerciseCount}
    </h3>
  );

  switch (coursePart.kind) {
    case "basic":
    case "background":
      return (
        <div>
          {header}
          <p>{coursePart.description}</p>
          {coursePart.kind === "background" && <p>{coursePart.backgroundMaterial}</p>}
        </div>
      );
    case "group":
      return (
        <div>
          {header}
          <p>project exercises {coursePart.groupProjectCount}</p>
        </div>
      );
    case "special":
      return (
        <div>
          {header}
          <p>{coursePart.description}</p>
          <ul>
            Required skills:{" "}
            {coursePart.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
};

export default Part;
