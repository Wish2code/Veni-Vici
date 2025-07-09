function CatCard({ cat, onBan }) {
  const breed = cat.breeds[0];

  const attributes = [
    { label: breed.name },
    { label: breed.weight.metric + ' lbs' },
    { label: breed.origin },
    { label: breed.life_span + ' years' }
  ];

  return (
    <div className="card">
      <h2>{breed.name || 'Unknown'}</h2>
      <div className="tags">
        {attributes.map((attr, index) => (
          <span key={index} className="tag" onClick={() => onBan(attr.label)}>
            {attr.label}
          </span>
        ))}
      </div>
      <img src={cat.url} alt={breed.name} />
    </div>
  );
}

export default CatCard;
