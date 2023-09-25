



const Banner = () => {
    return (
      
    <div>
       
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/RjJGgvg/donate.jpg)'}}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
   
    <div className="">
    <p className="text-5xl text-black font-bold mb-5">I Grow By Helping People In Need</p>
    <div className="flex">
    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
    <button className="btn btn-primary">Search</button>
    </div>
    </div>
  </div>
</div>
    </div>
    );
};

export default Banner;