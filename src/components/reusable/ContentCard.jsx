const ContentCard = ({
  img,
  text,
  title,
  link,
  arrow,
  containerStyle,
  headerStyle,
  textStyle,
  linkStyle,
  mainContainer,
}) => {
  return (
    <div className={mainContainer}>
      <img src={img} />
      <div className={containerStyle}>
        <h1 className={headerStyle}>{title}</h1>
        <p className={textStyle}>{text}</p>
        <div className={linkStyle}>
          <p>{link}</p>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
