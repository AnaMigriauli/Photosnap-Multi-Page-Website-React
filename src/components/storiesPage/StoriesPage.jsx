import ContentCard from "../reusable/ContentCard";
import img1 from "../../assets/images/stories-1.svg";
import arrow from "../../assets/images/arrow.svg";
import styles from "./StoriesPage.module.css";
const StoriesPage = () => {
  return (
    <div>
      <ContentCard
        img={img1}
        storie="LAST MONTH’S FEATURED STORY"
        title="HAZY FULL MOON OF APPALACHIA"
        data="March 2nd 2020"
        author="by John Appleseed"
        text="The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
        link="READ THE STORY"
        arrow={arrow}
        mainContainer={styles["main-container"]}
        containerStyle={styles["text-container"]}
        storieStyle={styles.storie}
        headerStyle={styles.header}
        dataAuthorStyle={styles["data-author"]}
        textStyle={styles.text}
        linkStyle={styles.link}
      />
    </div>
  );
};

export default StoriesPage;
