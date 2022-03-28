import RestaurantCard from "./RestaurantCard";

const RestaurantsSection = () => {
  return (
    <section className="restaurants-section">
      <h5 className="restaurants-sectoin__heading">Nearby restaurants</h5>
      <div className="container">
        <div className="restaurants">
          <RestaurantCard
            img="royalSushiHouse.jpg"
            title="Royal Sushi House"
            time="30-40"
            price={32}
            badgeImg="sushi.svg"
            badgeTitle="Sushi"
          />
          <RestaurantCard
            img="burgerAndPizza.jpg"
            title="Burgers & Pizza"
            time="40-60"
            price={24}
            badgeImg="burger.svg"
            badgeTitle="Burger"
          />
          <RestaurantCard
            img="ninjaSushi.jpg"
            title="Ninja sushi"
            time="20-40"
            price={40}
            badgeImg="sushi.svg"
            badgeTitle="Sushi"
          />
          <RestaurantCard
            img="royalSushiHouse.jpg"
            title="Royal Sushi House"
            time="30-40"
            price={32}
            badgeImg="sushi.svg"
            badgeTitle="Sushi"
          />
          <RestaurantCard
            img="burgerAndPizza.jpg"
            title="Burgers & Pizza"
            time="40-60"
            price={24}
            badgeImg="burger.svg"
            badgeTitle="Burger"
          />
          <RestaurantCard
            img="ninjaSushi.jpg"
            title="Ninja sushi"
            time="20-40"
            price={40}
            badgeImg="sushi.svg"
            badgeTitle="Sushi"
          />
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
