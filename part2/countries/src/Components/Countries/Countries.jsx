const Countries = ({ countries, setCountry }) => {
  return (
    <div>
      {countries.map((country, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
        >
          <p>{country.name.common}</p>
          <button
            onClick={() => setCountry(country.name.common.toLowerCase())}
            style={{ height: "20px" }}
          >
            show
          </button>
        </div>
      ))}
    </div>
  );
};

export default Countries;
