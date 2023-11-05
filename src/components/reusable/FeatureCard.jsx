const FeatureCard = ({
  img,
  title,
  text,
  featureCardStyle,
  featureIconStyle,
  featureTitleStyle,
  featureTextStyle,
}) => {
  return (
    <div className={featureCardStyle}>
      <img src={img} className={featureIconStyle} />
      <h3 className={featureTitleStyle}>{title}</h3>
      <p className={featureTextStyle}>{text}</p>
    </div>
  );
};

export default FeatureCard;
