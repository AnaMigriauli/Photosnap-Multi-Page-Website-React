const ImageCard = ({
  img,
  title,
  text,
  arrow,
  cardStyle,
  contentStyle,
  titleStyle,
  textStyle,
  link,
  borderStyle,
  linkStyle,
  linkContainer,
  data,
  dataStyle,
  multiColorBorderStyle,
  arrowIconStyle,
}) => {
  return (
    <div className={cardStyle}>
      <img src={img} alt="nature picture" />
      <div className={contentStyle}>
        <div className={multiColorBorderStyle}></div>
        {data && <span className={dataStyle}>{data}</span>}
        <h2 className={titleStyle}>{title}</h2>
        <p className={textStyle}>{text}</p>
        <div className={borderStyle}></div>
        <div className={linkContainer}>
          <span className={linkStyle}>{link}</span>
          <img className={arrowIconStyle} src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
