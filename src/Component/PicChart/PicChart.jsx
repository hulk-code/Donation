/* eslint-disable react/prop-types */

import { PieChart, Pie, Cell, } from "recharts";

const PicChart = ({ loadCardData, myDonation }) => {

  const data = [
    
    { name: "Your Donations", value: loadCardData?.length },
    
    { name: "Other Donations", value: myDonation?.length },
  ];

  const COLORS = ["#0088FE", "#FFBB28"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <PieChart width={400} height={400} className=" w-full m-auto ">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
     
      
    </PieChart>
    
  );
};

export default PicChart;
