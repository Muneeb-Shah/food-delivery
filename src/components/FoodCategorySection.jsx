import FoodIcon from "./FoodIcon";

const FoodCategorySection = () => {
  return (
    <div className="food-category">
      <FoodIcon img="pizza.svg" label="Pizza" />
      <FoodIcon img="burger.svg" label="Burger" />
      <FoodIcon img="meat.svg" label="BBQ" />
      <FoodIcon img="sushi.svg" label="Sushi" />
      <FoodIcon img="broccoli.svg" label="Vegan" />
      <FoodIcon img="cake.svg" label="Desserts" />
    </div>
  );
};

export default FoodCategorySection;
