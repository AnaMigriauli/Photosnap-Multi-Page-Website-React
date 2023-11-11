const FeatureTable = ({
  title,
  borderBottomStyle,
  vector,
  featureOptionsContainerStyle,
  options,
  titleStyle,
  vectorStyle,
  optionStyle,
  basic,
  pro,
  bussiness,
}) => {
  return (
    <div>
      <h4 className={titleStyle}>{title}</h4>
      <div className={featureOptionsContainerStyle}>
        <div className={options}>
          <span className={optionStyle}>
            {window.innerWidth <= 768 && "BASIC"}
          </span>
          <img className={vectorStyle} src={basic} alt="" />
        </div>
        <div className={options}>
          <span className={optionStyle}>
            {window.innerWidth <= 768 && "PRO"}
          </span>
          <img className={vectorStyle} src={pro} alt="" />
        </div>
        <div className={options}>
          <span className={optionStyle}>
            {window.innerWidth <= 768 && "BUSINESS"}
          </span>
          <img className={vectorStyle} src={bussiness} alt="" />
        </div>
      </div>
      <div className={borderBottomStyle}></div>
    </div>
  );
};

export default FeatureTable;
