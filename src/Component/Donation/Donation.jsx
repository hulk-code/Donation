import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSaveDonateCard } from "../Utility/SaveDonateToLS";
import ShowDonateCard from "../ShowDonateCard/ShowDonateCard";

const Donation = () => {
  const alldonateData = useLoaderData();
  const [myDonation, setMyDonation] = useState([]);
  console.log(alldonateData);
  const [showAllBtn, setShowAllBtn] = useState(false);

  useEffect(() => {
    const storedCard = getSaveDonateCard();
    console.log(storedCard);
    if (alldonateData.length > 0) {
      const myDonates = [];
      for (const id of storedCard) {
        const mydonate = alldonateData.find((mydonate) => mydonate.id === id);
        if (mydonate) {
          myDonates.push(mydonate);
        }
      }
      console.log(myDonates);
      setMyDonation(myDonates);
      // window.location.reload();
      
    }
  }, [alldonateData]);
  console.log(alldonateData,);
  console.log(myDonation);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:w-[1300px] m-auto">
      {myDonation.slice(0, showAllBtn ? myDonation.length : 4).map((donations) => (
        <ShowDonateCard key={donations.id} donations={donations}></ShowDonateCard>
      ))}
      {myDonation.length > 4 && !showAllBtn && (
        <div>
          <button className="bg-red-600 p-2" onClick={() => setShowAllBtn(true)}>
            Show all
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;