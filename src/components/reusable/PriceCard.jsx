const PriceCard = ({
  title,
  price,
  text,
  month,
  priceContainerStyle,
  titleStyle,
  textStyle,
  priceStyle,
  monthStyle,
  priceBtnStyle,
  PriceChooseHandler,
  borderTopStyle,
  textContentContainerStyle,
  priceContainer,
  priceContainer2,
}) => {
  return (
    <div className={priceContainerStyle}>
      <div className={borderTopStyle}></div>
      <div className={priceContainer}>
        <div className={textContentContainerStyle}>
          <h3 className={titleStyle}>{title}</h3>
          <p className={textStyle}>{text}</p>
        </div>
        <div className={priceContainer2}>
          <p className={priceStyle}>{price}</p>
          <p className={monthStyle}>{month}</p>
        </div>
        <button className={priceBtnStyle} onClick={PriceChooseHandler}>
          PICK PLAN
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
