import Content from "../../Components/Content/Content";
import Header from "../../Components/Header/Header";
import Total from "../../Components/Total/Total";

const Course = ({ course }) => {
  const { name, parts } = course;
  const exercises = parts
    ? parts.reduce((acumulator, part) => acumulator + part.exercises, 0)
    : [];

  return (
    <>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={exercises} />
    </>
  );
};

export default Course;
