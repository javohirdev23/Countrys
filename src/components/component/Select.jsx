import "./navbar.css";
export default function Select({ selectedRegion, setSelectedRegion }) {
  const handleChange = (evt) => {
    console.log(evt.target.value);

    setSelectedRegion(evt.target.value);
  };
  return (
    <div className="select-cont">
      <select value={selectedRegion} onChange={handleChange}>
        
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia </option>
        <option value="Europe">Europe </option>
        <option value="Oceania">Oceania </option>
      </select>
    </div>
  );
}
