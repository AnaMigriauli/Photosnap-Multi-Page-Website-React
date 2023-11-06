import ContentCard from "../reusable/ContentCard";
import arrow from "../../assets/images/arrow.svg";
import styles from "./StoriesPage.module.css";
import ImageCard from "../reusable/ImageCard";
import img1 from "../../assets/images/stories-1.svg";
import img2 from "../../assets/images/home-4.svg";
import img3 from "../../assets/images/home-5.svg";
import img4 from "../../assets/images/home-6.svg";
import img5 from "../../assets/images/home-7.svg";
import img6 from "../../assets/images/stories-2.svg";
import img7 from "../../assets/images/stories-3.svg";
import img8 from "../../assets/images/stories-4.svg";
import img9 from "../../assets/images/stories-5.svg";
import img10 from "../../assets/images/stories-6.svg";
import img11 from "../../assets/images/stories-7.svg";
import img12 from "../../assets/images/stories-8.svg";
import img13 from "../../assets/images/stories-9.svg";
import img14 from "../../assets/images/stories-10.svg";
import img15 from "../../assets/images/stories-11.svg";
import img16 from "../../assets/images/stories-12.svg";
import img17 from "../../assets/images/stories-13.svg";

const imageCardData = [
  {
    data: "April 16th 2020",
    img: img2,
    title: "The Mountains",
    text: "by John Appleseed",
  },
  {
    data: "April 14th 2020",
    img: img3,
    title: "Sunset Cityscapes",
    text: "by Benjamin Cruz",
  },
  {
    data: "April 11th 2020",
    img: img4,
    title: "18 Days Voyage",
    text: "by Alexei Borodin",
  },
  {
    data: "April 9th 2020",
    img: img5,
    title: "Architecturals",
    text: "by Samantha Brooke",
  },
  {
    data: "April 7th 2020",
    img: img6,
    title: "World Tour 2019",
    text: "by Timothy Wagner",
  },
  {
    data: "April 3rd 2020",
    img: img7,
    title: "Unforeseen Corners",
    text: "by William Malcolm",
  },
  {
    data: "March 29th 2020",
    img: img8,
    title: "King on Africa: Part II",
    text: "by Tim Hillenburg",
  },
  {
    data: "March 21st 2020",
    img: img9,
    title: "The Trip to Nowhere",
    text: "by Felicia Rourke",
  },
  {
    data: "March 19th 2020",
    img: img10,
    title: "Rage of The Sea",
    text: "by Mohammed Abdul",
  },
  {
    data: "March 16th 2020",
    img: img11,
    title: "Running Free",
    text: "by Michelle",
  },
  {
    data: "March 11th 2020",
    img: img12,
    title: "Behind the Waves",
    text: "by Lamarr Wilson",
  },
  {
    data: "March 9th 2020",
    img: img13,
    title: "Calm Waters",
    text: "by Samantha Brooke",
  },
  {
    data: "March 5th 2020",
    img: img14,
    title: "The Milky Way",
    text: "by Benjamin Cruz",
  },
  {
    data: "March 4th 2020",
    img: img15,
    title: "Night at The Dark Forest",
    text: "by  Mohammed Abdul",
  },
  {
    data: "March 1st 2020",
    img: img16,
    title: "Somwarpet’s Beauty",
    text: "by Michelle",
  },
  {
    data: "February 25th 2020",
    img: img17,
    title: "Land of Dreams",
    text: "by William Malcolm",
  },
];

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

      {imageCardData.map((data, i) => (
        <ImageCard
          key={i}
          data={data.data}
          img={data.img}
          title={data.title}
          text={data.text}
          link="READ STORY"
          cardStyle={styles["main-card"]}
          arrow={arrow}
          contentStyle={styles.content}
          dataStyle={styles.data}
          titleStyle={styles.title}
          textStyle={styles.author}
          borderStyle={styles.border}
          linkContainer={styles["link-container"]}
        />
      ))}
    </div>
  );
};

export default StoriesPage;
