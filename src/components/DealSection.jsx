import Deal from "./Deal";

const DealSection = () => {
  return (
    <div className="deal-section">
      <Deal
        img="cupcake.png"
        title="All deserts"
        discount={20}
        label="Deserty"
      />
      <Deal
        img="burger.png"
        title="Big Burgers"
        discount={50}
        label="Foodies"
      />
    </div>
  );
};

export default DealSection;
