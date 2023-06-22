import React from "react";
import { CoursePart } from "../../types";
import Part from "../Part";

interface ContentProps {
  courseParts: CoursePart[];
}

const Content: React.FC<ContentProps> = ({ courseParts }) => {

  const renderCourseParts = (): JSX.Element[] => {
    return courseParts.map((course, index) => {
      return (
        <Part coursePart={course} key={index}/>
      )
    })
  }
  return (
    <div>
      {renderCourseParts()}
    </div>
  );
};

export default Content;
