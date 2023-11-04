import ContentCard from "../reusable/ContentCard";
import img1 from "../../assets/images/home-1.svg";
import arrow from "../../assets/images/arrow.svg";

const HomePage = () => {
  return (
    <ContentCard
      img={img1}
      arrow={arrow}
      title="Create and share your photo stories. "
      link="GET AN INVITE"
      text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
    />
  );
};

export default HomePage;
