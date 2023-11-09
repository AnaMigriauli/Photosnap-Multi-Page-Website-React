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
  storie,
  author,
  data,
  storieStyle,
  dataAuthorStyle,
  border,
  arrowIconStyle,
}) => {
  return (
    <div className={mainContainer}>
      <img src={img} />
      <div className={containerStyle}>
        <div className={border}></div>
        {storie && <h4 className={storieStyle}>{storie}</h4>}
        <h1 className={headerStyle}>{title}</h1>
        {data && author && (
          <div className={dataAuthorStyle}>
            <span>{data}</span>
            <span>{author}</span>
          </div>
        )}
        <p className={textStyle}>{text}</p>
        {link && (
          <div className={linkStyle}>
            <p>{link}</p>
            <img className={arrowIconStyle} src={arrow} alt="arrow icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
