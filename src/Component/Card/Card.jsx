

const Card = ({card}) => {
    console.log(card);
    const{image,category,title,description,textColor,backgroundColor,categoryColor}=card;

    const cardStyle = {
        backgroundColor: backgroundColor,
        color: textColor,
      };
    
      const categoryStyle = {
        backgroundColor: categoryColor,
      };
    return (
        <div className="mt-5">
            <div className="card  bg-base-100 shadow-xl" style={cardStyle}>
  <figure><img className="w-full" src={image} alt="Shoes" /></figure>
  <div className="m-5">
    <span className="p-1 rounded-md" style={categoryStyle}>{category}</span>
    <h2 className="card-title">
      {title}
    </h2>
     
  </div>
    
    
</div>
        </div>
    );
};

export default Card;