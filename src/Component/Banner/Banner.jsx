import { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";





const Banner = ({cards}) => {
 
  const [searchText, setSearchText] = useState(""); // State to manage search input
  const [filteredCards, setFilteredCards] = useState(cards);
  const [showFiltered, setShowFiltered] = useState(false)
  console.log(cards);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = searchText.toLowerCase();
    const filtered = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm)
  );
  setFilteredCards(filtered);
   setShowFiltered(true);

  //   console.log(e.target.search.value);
  //   console.log('clickeddd');
  //   const filtered = cards.filter((card) =>
  //     card.category.toLowerCase().includes(searchTerm)
  //   );

  //   setFilteredCards(filtered);
  //   console.log(filteredCards);
   };

    return (
      
    <div>
       
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/RjJGgvg/donate.jpg)'}}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
   
    <div className="">
    <p className="text-5xl text-black font-bold mb-5">I Grow By Helping People In Need</p>

    <div>
              <form action="" className="flex" onSubmit={handleSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Type here"
                  className="input input-bordered text-black w-full"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
    </div>
  </div>
</div>
   {
   showFiltered && <CardContainer filteredCards={filteredCards} />}
    </div>
    );
};

export default Banner;