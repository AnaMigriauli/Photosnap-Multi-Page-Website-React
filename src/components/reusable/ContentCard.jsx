const ContentCard = ({
  img,
  text,
  title,
  link,
  arrow,
  containerstyle,
  headerstyle,
  textstyle,
  linkstyle,
  maincontainer,
}) => {
  return (
    <div className={maincontainer}>
      <img src={img} />
      <div className={containerstyle}>
        <h1 className={headerstyle}>{title}</h1>
        <p className={textstyle}>{text}</p>
        <div className={linkstyle}>
          <p>{link}</p>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
