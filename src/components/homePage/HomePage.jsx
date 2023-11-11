import ContentCard from "../reusable/ContentCard";
import arrow from "../../assets/images/arrow.svg";
import arrowBlack from "../../assets/images/blackArrow.svg";
import style from "./HomePage.module.css";
import ImageCard from "../reusable/ImageCard";
import img1 from "../../assets/images/home-1.svg";
import FeatureCard from "../reusable/FeatureCard";
import img2 from "../../assets/images/home-2.svg";
import img3 from "../../assets/images/home-3.svg";
import img4 from "../../assets/images/home-4.svg";
import img5 from "../../assets/images/home-5.svg";
import img6 from "../../assets/images/home-6.svg";
import img7 from "../../assets/images/home-7.svg";
import img8 from "../../assets/images/001-responsive.svg";
import img9 from "../../assets/images/002-forever.svg";
import img10 from "../../assets/images/003-bullhorn.svg";
import img1Tablet from "../../assets/images/home-1-tablet.svg";
import img2Tablet from "../../assets/images/home-2-tablet.svg";
import img3Tablet from "../../assets/images/home-3-tablet.svg";

const cardData = [
  {
    containerStyle: style["text-container1"],
    mainContainer: style["main-container1"],
    border:
      window.innerWidth >= 768
        ? style["multi-color-left-border "]
        : style["multi-color-border"],
    headerStyle: style.header1,
    img: window.innerWidth >= 768 ? img1Tablet : img1,
    arrow: arrow,
    title: "Create and share your photo stories. ",
    link: "GET AN INVITE",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
  },
  {
    containerStyle: style["text-container2"],
    mainContainer: style["main-container2"],
    headerStyle: style.header,
    img: window.innerWidth >= 768 ? img2Tablet : img2,
    arrow: arrowBlack,
    title: "BEAUTIFUL STORIES EVERY TIME",
    link: "VIEW THE STORIES",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
  },
  {
    containerStyle: style["text-container3"],
    mainContainer: style["main-container2"],
    headerStyle: style.header,
    img: window.innerWidth >= 768 ? img3Tablet : img3,
    arrow: arrowBlack,
    title: "DESIGNED FOR EVERYONE",
    link: "VIEW THE STORIES",
    text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
  },
];

const imageCardData = [
  {
    img: img4,
    title: "The Mountains",
    text: "by John Appleseed",
  },
  {
    img: img5,
    title: "Sunset Cityscapes",
    text: "by Benjamin Cruz",
  },
  {
    img: img6,
    title: "18 Days Voyage",
    text: "by Alexei Borodin",
  },
  {
    img: img7,
    title: "Architecturals",
    text: "by Samantha Brooke",
  },
];

const FeatureCardData = [
  {
    img: img8,
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    img: img9,
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    img: img10,
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
];

const HomePage = () => {
  return (
    <div>
      {cardData.map((card, i) => (
        <ContentCard
          key={i}
          containerStyle={card.containerStyle}
          mainContainer={card.mainContainer}
          border={card.border}
          headerStyle={card.headerStyle}
          textStyle={style.text}
          linkStyle={style.link}
          img={card.img}
          arrow={card.arrow}
          title={card.title}
          link={card.link}
          text={card.text}
          arrowIconStyle={style["arrow-icon"]}
          imgStyle={style["backgound-img"]}
        />
      ))}
      <div className={style["img-card"]}>
        {imageCardData.map((card, i) => (
          <ImageCard
            key={i}
            img={card.img}
            title={card.title}
            text={card.text}
            link="READ STORY"
            arrow={arrow}
            cardStyle={style["image-card"]}
            contentStyle={style["content-container"]}
            borderStyle={style.border}
            titleStyle={style.title}
            textStyle={style.author}
            linkStyle={style["link-style"]}
            linkContainer={style["container-style"]}
            arrowIconStyle={style["arrow-icon2"]}
            imgStyle={style["backgound-img1"]}
          />
        ))}
      </div>
      <div className={style["feature"]}>
        {FeatureCardData.map((card, i) => (
          <FeatureCard
            key={i}
            img={card.img}
            title={card.title}
            text={card.text}
            featureCardStyle={style["feature-card"]}
            featureIconStyle={style["feature-icon"]}
            featureTitleStyle={style["feature-title"]}
            featureTextStyle={style["feature-text"]}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
