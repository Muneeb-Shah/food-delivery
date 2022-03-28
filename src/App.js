import Deal from "./components/Deal";
import LoginSlider from "./components/LoginSlider";
import FoodIcon from "./components/FoodIcon";
import RestaurantCard from "./components/RestaurantCard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Collapsible from "./components/common/Collapsible";
import DealSection from "./components/DealSection";
import FoodCategorySection from "./components/FoodCategorySection";

function App() {
  return (
    <div className="App">
      <div className="container">
        <FoodCategorySection />
      </div>
    </div>
  );
}

export default App;
