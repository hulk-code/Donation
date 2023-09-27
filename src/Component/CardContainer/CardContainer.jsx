/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const CardContainer = ({ filteredCards }) => {
    console.log(filteredCards);
    const [cardData ,setCardData]=useState([])

    useEffect(() =>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => setCardData(data))
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-10 justify-items-center lg:w-[1300px] mx-auto">
            {
                // filteredCards.map((card) => (
                //     <Card key={card.id} card={card} />
                //   ))
                cardData.map(card => <Card key={card.id} card={card} ></Card>)
            }
        </div>
    );
};

export default CardContainer;