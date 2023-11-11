import img1 from "../../assets/images/feature-1.svg";
import ContentCard from "../reusable/ContentCard";
import FeatureCard from "../reusable/FeatureCard";
import style from "./FeaturePage.module.css";
import icon1 from "../../assets/images/001-responsive.svg";
import icon2 from "../../assets/images/002-forever.svg";
import icon3 from "../../assets/images/003-bullhorn.svg";
import icon4 from "../../assets/images/001-www.svg";
import icon5 from "../../assets/images/001-drag.svg";
import icon6 from "../../assets/images/002-slider.svg";
import InvitatinCard from "../reusable/InvitationCard";
import img1Table from "../../assets/images/feature-1-Table.svg";

const featureCardData = [
  {
    img: icon1,
    title: "100% Responsive",
    text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    img: icon2,
    title: "No Photo Upload Limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    img: icon3,
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
  {
    img: icon4,
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    img: icon5,
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    img: icon6,
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

const FeaturePage = () => {
  return (
    <>
      <ContentCard
        img={window.innerWidth >= 768 ? img1Table : img1}
        title="FEATURES"
        text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        mainContainer={style["main-container"]}
        containerStyle={style.container}
        headerStyle={style.header}
        imgStyle={style["feature-img"]}
      />
      <div className={style["feature-container"]}>
        {featureCardData.map((data, i) => (
          <FeatureCard
            key={i}
            img={data.img}
            title={data.title}
            text={data.text}
            featureCardStyle={style["feature-card"]}
            featureIconStyle={style["feature-icon"]}
            featureTitleStyle={style["feature-title"]}
            featureTextStyle={style["feature-text"]}
          />
        ))}
      </div>
      <InvitatinCard />
    </>
  );
};
export default FeaturePage;
