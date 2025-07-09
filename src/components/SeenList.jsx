function SeenList({ seenCats }) {
  return (
    <div className="seenlist">
      <h2>Who have we seen so far?</h2>
      <div className="scroll">
        {seenCats.map((cat, i) => {
          const breed = cat.breeds[0];
          return (
            <div key={i} className="seen-item">
              <img src={cat.url} alt={breed.name} className="thumb" />
              <p>
                A {breed.name} cat from {breed.origin}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeenList;
