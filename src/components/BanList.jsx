function BanList({ banList, onBan }) {
  return (
    <div className="banlist">
      <h2>Ban List</h2>
      <p>Select an attribute in your listing to ban it</p>
      <ul>
        {banList.map((breed) => (
          <li key={breed} onClick={() => onBan(breed)}>
            ❌ {breed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BanList;
