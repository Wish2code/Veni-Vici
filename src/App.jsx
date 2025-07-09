import { useEffect, useState } from 'react';
import axios from 'axios';
import CatCard from './components/CatCard';
import BanList from './components/BanList';
import SeenList from './components/SeenList';
import './App.css';

const API_URL = 'https://api.thecatapi.com/v1/images/search?has_breeds=1';

function App() {
  const [currentCat, setCurrentCat] = useState(null);
  const [seenCats, setSeenCats] = useState([]);
  const [banList, setBanList] = useState([]);

  const fetchCat = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: {
          'x-api-key': import.meta.env.VITE_CAT_API_KEY
        }
      });
      const cat = res.data[0];
      const breed = cat.breeds[0];

      const attributes = [
        breed.name,
        breed.weight.metric + ' lbs',
        breed.origin,
        breed.life_span + ' years'
      ];

      if (attributes.some((attr) => banList.includes(attr))) {
        fetchCat(); // try again
        return;
      }

      setCurrentCat(cat);
      setSeenCats((prev) => [...prev, cat]);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };


  // useEffect(() => {
  //   fetchCat();
  // }, []);

  const toggleBan = (breed) => {
    setBanList((prev) =>
      prev.includes(breed)
        ? prev.filter((b) => b !== breed)
        : [...prev, breed]
    );
  };

  return (
    <div className="container">
      <SeenList seenCats={seenCats} />
      <div className="main">
        <h1>Cool Cats!</h1>
        <p>Tap into the world of cat wonders!</p>
        {currentCat && (
          <>
            <CatCard cat={currentCat} onBan={toggleBan} />
            <button onClick={fetchCat}>😺 Discover!</button>
          </>
        )}
        {!currentCat && (
          <button onClick={fetchCat}>😺 Discover!</button>
        )}
      </div>
      <BanList banList={banList} onBan={toggleBan} />
    </div>
  );
}

export default App;
