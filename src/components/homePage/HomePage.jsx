import ContentCard from "../reusable/ContentCard";
import img1 from "../../assets/images/home-1.svg";
import img2 from "../../assets/images/home-2.svg";
import arrow from "../../assets/images/arrow.svg";
import arrowBlack from "../../assets/images/blackArrow.svg";
import style from "./HomePage.module.css";
import img3 from "../../assets/images/home-3.svg";

const cardData = [
  {
    containerstyle: style.textcontainer1,
    maincontainer: style.maincontainer1,
    img: img1,
    arrow: arrow,
    title: "Create and share your photo stories. ",
    link: "GET AN INVITE",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
  },
  {
    containerstyle: style.textcontainer2,
    maincontainer: style.maincontainer2,
    img: img2,
    arrow: arrowBlack,
    title: "BEAUTIFUL STORIES EVERY TIME",
    link: "VIEW THE STORIES",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
  },
  {
    containerstyle: style.textcontainer3,
    maincontainer: style.maincontainer2,
    img: img3,
    arrow: arrowBlack,
    title: "DESIGNED FOR EVERYONE",
    link: "VIEW THE STORIES",
    text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
  },
];

const HomePage = () => {
  return (
    <div>
      {cardData.map((card, i) => (
        <ContentCard
          key={i}
          containerstyle={card.containerstyle}
          maincontainer={card.maincontainer}
          headerstyle={style.header}
          textstyle={style.text}
          linkstyle={style.link}
          img={card.img}
          arrow={card.arrow}
          title={card.title}
          link={card.link}
          text={card.text}
        />
      ))}
    </div>
  );
};

export default HomePage;
