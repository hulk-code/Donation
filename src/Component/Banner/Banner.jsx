/* eslint-disable react/prop-types */




const Banner = () => {
 
  // const [searchText, setSearchText] = useState(""); // State to manage search input
  // const [filteredCards, setFilteredCards] = useState(cards);
  // // console.log(cards);

  // const handleSearch= e =>{
  //   // console.log(e);
  //    e.preventDefault();
  //    const searchTerm = e.target.search.value.toLowerCase();
  //   setSearchText(searchTerm);

  //   console.log(e.target.search.value);
  //   console.log('clickeddd');
  //   const filtered = cards.filter((card) =>
  //     card.category.toLowerCase().includes(searchTerm)
  //   );

  //   setFilteredCards(filtered);
  //   console.log(filteredCards);
  // };

    return (
      
    <div>
       
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/RjJGgvg/donate.jpg)'}}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
   
    <div className="">
    <p className="text-5xl text-black font-bold mb-5">I Grow By Helping People In Need</p>

    <div >
    <form action=""className="flex"  >
    <input type="text" name="search" placeholder="Type here" className="input input-bordered text-black w-full" />
    <button className="btn btn-primary">Search</button>
    </form>
    </div>
    </div>
  </div>
</div>
{
  // filteredCards.map(card => <Card key={card.id} card={card}></Card>)
      // filteredCards.map((card) => (
      //  <Card key={card.id} card={card}></Card>
      // ))
      }

    </div>
    );
};

export default Banner;