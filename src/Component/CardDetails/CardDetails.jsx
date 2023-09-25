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
        <div  className="w-[1300px] m-auto mb-10">
            <img  className="w-[1320px] m-auto h-[700px] lg:mt-10" src={card.image} alt="" />
            <div className="absolute bottom-1  p-4">
        <button onClick={makeAlert} className="bg-blue-500 text-white px-4 py-2 rounded" style={cardStyle}>
          Donate{card.donateAmount}$
        </button>
      </div>
            <h1 className="text-5xl font-bold mt-5 mb-5" >{card.title}</h1>
            <p>{card.description}</p>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;