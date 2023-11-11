import { useState } from "react";
import img1 from "../../assets/images/pricing-1.svg";
import ContentCard from "../reusable/ContentCard";
import style from "./PricingPage.module.css";
import PriceCard from "../reusable/PriceCard";
import FeatureTable from "../reusable/FeatureTable";
import vector from "../../assets/images/Path 5 Copy.svg";
import InvitatinCard from "../reusable/InvitationCard";
import img1Tablet from "../../assets/images/price-1-Tablet.svg";

const priceCardData = [
  {
    title: "Basic",
    text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    priceMonth: "$19.00",
    month: "per month",
    priceYear: "$190.00",
    year: "per year",
  },
  {
    title: "Pro",
    text: "More advanced features available. Recommended for photography veterans and professionals.",
    priceMonth: "$39.00",
    month: "per month",
    priceYear: "$390.00",
    year: "per year",
  },
  {
    title: "Business",
    text: "Additional features available such as more detailed metrics. Recommended for business owners.",
    priceMonth: "$99.00",
    month: "per month",
    priceYear: "$990.00",
    year: "per year",
  },
];

const featureTableData = [
  {
    title: "UNLIMITED STORY POSTING",
    basic: vector,
    pro: vector,
    bussiness: vector,
  },
  {
    title: "UNLIMITED PHOTO UPLOAD",
    basic: vector,
    pro: vector,
    bussiness: vector,
  },
  {
    title: "EMBEDDING CUSTOM CONTENT",
    basic: "",
    pro: vector,
    bussiness: vector,
  },
  {
    title: "ADVANCED METRICS",
    basic: "",
    pro: "",
    bussiness: vector,
  },
  {
    title: "PHOTO DOWNLOADS",
    basic: "",
    pro: "",
    bussiness: vector,
  },
  {
    title: "SEARCH ENGINE INDEXING",
    basic: "",
    pro: "",
    bussiness: vector,
  },
  {
    title: "CUSTOM ANALYTICS",
    basic: "",
    pro: "",
    bussiness: vector,
  },
];

const PricingPage = () => {
  const [isLeft, setIsLeft] = useState(false);

  const [active, setActive] = useState([
    { id: 0, active: false },
    { id: 1, active: true },
    { id: 2, active: false },
  ]);

  const toggleButtonHandler = () => {
    setIsLeft(!isLeft);
  };

  const PriceChooseHandler = (i) => {
    setActive(active.map((el, index) => ({ ...el, active: i === index })));
  };

  return (
    <>
      <ContentCard
        img={window.innerWidth >= 768 ? img1Tablet : img1}
        title="PRICING"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        containerStyle={style.container}
        border={style.border}
        mainContainer={style["main-container"]}
        headerStyle={style.header}
        textStyle={style.text}
      />
      <div className={style["price-feature-container"]}>
        <div className={style["toggle-month-year"]}>
          <span
            className={
              !isLeft
                ? `${style["month-year"]}`
                : `${style["month-year-active"]}`
            }
          >
            Monthly
          </span>

          <div
            className={style["button-container"]}
            style={{ justifyContent: isLeft ? "flex-start" : "flex-end" }}
          >
            <button
              className={style.btn}
              onClick={toggleButtonHandler}
            ></button>
          </div>
          <span
            className={
              isLeft
                ? `${style["month-year"]}`
                : `${style["month-year-active"]}`
            }
          >
            Yearly
          </span>
        </div>
        {priceCardData.map((data, i) => (
          <PriceCard
            key={i}
            title={data.title}
            text={data.text}
            price={isLeft ? data.priceMonth : data.priceYear}
            month={isLeft ? data.month : data.year}
            borderTopStyle={active[i].active && style["border-top"]}
            priceContainerStyle={
              active[i].active
                ? `${style["price-container"]} ${style["price-container-black"]}`
                : style["price-container"]
            }
            textContentContainerStyle={style["text-content-container"]}
            titleStyle={style.title}
            textStyle={style["price-text"]}
            priceStyle={style.price}
            monthStyle={style.month}
            priceBtnStyle={
              active[i].active
                ? `${style["price-btn"]} ${style["price-btn-black"]}`
                : `${style["price-btn"]} `
            }
            PriceChooseHandler={() => PriceChooseHandler(i)}
          />
        ))}
      </div>
      <div className={style["price-features-option"]}>
        <h4 className={style.feature}>THE FEATURES</h4>
        <div className={style["feature-border"]}></div>
        {featureTableData.map((el, i) => (
          <FeatureTable
            key={i}
            title={el.title}
            basic={el.basic}
            pro={el.pro}
            bussiness={el.bussiness}
            featureOptionsContainerStyle={style["features-option"]}
            options={style.options}
            titleStyle={style["feature-title"]}
            vectorStyle={style.vector}
            optionStyle={style.option}
            borderBottomStyle={style["border-bottom"]}
          />
        ))}
      </div>
      <InvitatinCard />
    </>
  );
};

export default PricingPage;
