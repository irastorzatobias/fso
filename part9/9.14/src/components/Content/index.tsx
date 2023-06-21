import React from "react";

interface CoursePart {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courseParts: CoursePart[];
}

const Content: React.FC<ContentProps> = ({ courseParts }) => {
  const renderCourseParts = (): JSX.Element[] => {
    return courseParts.map((course, index) => {
      return (
        <p key={index}>{course.name} {course.exerciseCount}</p>
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
