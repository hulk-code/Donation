/* eslint-disable react/prop-types */



const ShowDonateCard = ({donations}) => {
    // console.log(donations);
    const{id,image,category,title,donateAmount,textColor, backgroundColor,categoryColor}=donations;

    const cardStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
    };

    const categoryStyle = {
        backgroundColor: categoryColor,
    };
    const btnColor={
        backgroundColor: textColor 
    }
    return (
        <div>
            <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row rounded-md" style={cardStyle}>
    <img src={image} className="rounded-lg shadow-2xl" />
    <div>
    <p  ><span className="p-1 rounded-md" style={categoryStyle}>{category}</span></p>
      <h1 className="text-3xl font-bold">{title}</h1>
       <p>{donateAmount}$</p>
    <button className="btn btn-primary" style={btnColor}>Show Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowDonateCard;