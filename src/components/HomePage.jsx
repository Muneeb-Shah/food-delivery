import { Fragment } from "react";
import Header from "./Header";
import Banner from "./Banner";
import RestaurantsSection from "./RestaurantsSection";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <RestaurantsSection />
    </Fragment>
  );
};

export default HomePage;
