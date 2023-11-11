import img2 from "../../assets/images/feature-2.svg";
import arrow from "../../assets/images/arrow.svg";
import img2Table from "../../assets/images/feature-3-table.svg";
import ImageCard from "./ImageCard";
import style from "./InitationCard.module.css";

const InvitatinCard = () => {
  return (
    <ImageCard
      img={window.innerWidth >= 768 ? img2Table : img2}
      title="We’re in beta.Get your invite today!"
      link="GET AN INVITE"
      arrow={arrow}
      cardStyle={style["main-card"]}
      contentStyle={style.content}
      titleStyle={style.title}
      linkContainer={style["link-container"]}
      linkStyle={style.link}
      multiColorBorderStyle={style["multi-color-border"]}
      imgStyle={style["img"]}
    />
  );
};

export default InvitatinCard;
