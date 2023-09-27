import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveDonate } from "../Utility/SaveDonateToLS";



const CardDetails = () => {
  

    const cards=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id)
  const card=cards.find(card => card.id ===idInt )
    // console.log(card);
    const makeAlert=() =>{
      SaveDonate(idInt);
      toast('thanks for donate')
    }
    const cardStyle = {
      backgroundColor: card.textColor
      
  };

  return (
    <div className="relative w-full px-4 md:w-[768px] lg:w-[992px] xl:w-[1300px] m-auto mb-10">
      <img className="w-full h-auto lg:h-[700px]" src={card.image} alt="" />
      <div className="absolute -top-[-140px] md:top-96 lg:top-[630px] left-0 p-4 bg-slate-500 lg:w-full bg-opacity-40">
        <button onClick={makeAlert} className="text-white px-4 py-2 rounded" style={cardStyle}>
          Donate {card.donateAmount}$
        </button>
      </div>
      <h1 className="text-5xl mb-10 font-bold mt-5 lg:mb-5">{card.title}</h1>
      <p>{card.description}</p>
      <ToastContainer />
    </div>
  );
  
  
};

export default CardDetails;