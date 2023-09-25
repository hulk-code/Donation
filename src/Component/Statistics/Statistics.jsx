
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { getSaveDonateCard } from '../Utility/SaveDonateToLS';
import DonationPicChart from '../DonationPicChart/DonationPicChart';


const Statistics = () => {
  const loadCardData = useLoaderData();
  const [myDonation, setMyDonation] = useState([]);

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
// console.log(myDonation,loadCardData);
  // Calculate the total sum of values in myDonation
  const myDonationTotalValue = myDonation.reduce((total, entry) => {
    const numericValue = parseFloat(entry.value);
    return isNaN(numericValue) ? total : total + numericValue;
  }, 0);

  // Calculate the percentage of myDonation compared to the total percentage
  const myDonationPercentage = (myDonationTotalValue / 1000) * 100; // Replace 1000 with your desired total value
// console.log(myDonationPercentage,myDonationTotalValue);

  return (
    <div>
    <h1>Donation Statistics</h1>
    <DonationPicChart myDonationTotalValue={loadCardData} myDonationPercentage={myDonation} />
  </div>
  );
};

export default Statistics;
