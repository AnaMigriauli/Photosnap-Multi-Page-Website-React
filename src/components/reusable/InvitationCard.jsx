import im2 from "../../assets/images/feature-2.svg";
import arrow from "../../assets/images/arrow.svg";
import ImageCard from "./ImageCard";
import style from "./InitationCard.module.css";

const InvitatinCard = () => {
  return (
    <ImageCard
      img={im2}
      title="We’re in beta.Get your invite today!"
      link="GET AN INVITE"
      arrow={arrow}
      cardStyle={style["main-card"]}
      contentStyle={style.content}
      titleStyle={style.title}
      linkContainer={style["link-container"]}
      linkStyle={style.link}
      multiColorBorderStyle={style["multi-color-border"]}
    />
  );
};

export default InvitatinCard;
