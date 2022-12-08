import Part from "../Part/Part";

const Content = ({ parts }) => (
  <>
    {parts && parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

export default Content;
