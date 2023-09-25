import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSaveDonateCard } from "../Utility/SaveDonateToLS";
import ShowDonateCard from "../ShowDonateCard/ShowDonateCard";


const Donation = () => {
    const alldonateData=useLoaderData();
    // console.log('ajgfdisagfs',alldonateData);
    const [myDonation , setMyDonation]=useState([])
    // console.log(alldonateData);
    const [showAllbtn , setahowallBtn]=useState(4)

    useEffect(() =>{
        const stordCard=getSaveDonateCard();
        if(alldonateData.length > 0){

            const myDonates=[] ;
            for(const id of stordCard){
                const mydonate=alldonateData.find(mydonate=> mydonate.id === id)
                if(mydonate){
                    myDonates.push(mydonate)
                    
                }
            }
            // console.log(myDonates);
            setMyDonation(myDonates)
         
        }
       

    }, [alldonateData])
    //   console.log( 'this is my donetion',myDonation);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:w-[1300px] m-auto">

            {
                myDonation.slice(0 , showAllbtn).map(donations => <ShowDonateCard key={donations.id} donations={donations}></ShowDonateCard>)
            }
    <div className={showAllbtn === myDonation.length ? 'hidden' : ''}>
        <button className="bg-red-600 p-2" onClick={() => setahowallBtn(myDonation.length)}>Show all</button>
    </div>
            
        </div>
        
    );
};

export default Donation;