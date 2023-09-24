import { useEffect, useState } from "react";
import Card from "../Card/Card";


const CardContainer = () => {
    const [cardData ,setCardData]=useState([])

    useEffect(() =>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setCardData(data))
    },[])
    return (
        <div className="grid grid-cols-4 mt-10 justify-items-center">
            {
                cardData.map(card => <Card key={card.id} card={card} ></Card>)
            }
        </div>
    );
};

export default CardContainer;