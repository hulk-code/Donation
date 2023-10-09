/* eslint-disable no-undef */


import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false); 

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setCardData(data))
  }, []);

  useEffect(() => {
    if (isSearchClicked) {
    
      const filtered = cardData.filter(card =>
        card.category.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCards(filtered);
    } else {

      setFilteredCards(cardData);
    }
  }, [searchInput, cardData, isSearchClicked]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchClicked(true); 
  };

  return (
    <div>
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RjJGgvg/donate.jpg)' }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <p className="text-5xl text-black font-bold mb-5">I Grow By Helping People In Need</p>
            <div>
              <form onSubmit={handleSearchSubmit} className="flex">
                <input
                  type="text"
                  name="search"
                  placeholder="Type here"
                  className="input input-bordered text-black w-full"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 justify-items-center lg:w-[1300px] mx-auto">
        {filteredCards.map(card => <Card key={card.id} card={card}></Card>)}
      </div>
    </div>
  );
};

export default Home;

