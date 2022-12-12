const Countries = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => (
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center"
          }}
        >
          <p>{country.name.common}</p>
          <button style={{ height: "20px" }}>show</button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
