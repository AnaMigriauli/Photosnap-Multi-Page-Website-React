const ContentCard = ({ img, text, title, link, arrow }) => {
  return (
    <div>
      <img src={img} />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <div>
          <p>{link}</p>
          <img src={arrow} />
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
