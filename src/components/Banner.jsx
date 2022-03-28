import DealSection from "./DealSection";
import FoodCategorySection from "./FoodCategorySection";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <DealSection />
        <FoodCategorySection />
      </div>
    </section>
  );
};

export default Banner;
