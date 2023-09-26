
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { getSaveDonateCard } from "../Utility/SaveDonateToLS";

import PicChart from "../PicChart/PicChart";

const Statistics = () => {
  const loadCardData = useLoaderData();
  const [myDonation, setMyDonation] = useState([]);
  console.log(loadCardData, myDonation);

  useEffect(() => {
    const storedCard = getSaveDonateCard();

    if (loadCardData.length > 0) {
      const myDonates = [];

      for (const id of storedCard) {
        const myDonate = loadCardData.find((myDonate) => myDonate.id === id);

        if (myDonate) {
          myDonates.push(myDonate);
        }
      }

      setMyDonation(myDonates);
    }
  }, [loadCardData]);

  return (
    <div className='border '>
      
      <PicChart loadCardData={loadCardData} myDonation={myDonation} />
    </div>
  );
};

export default Statistics;