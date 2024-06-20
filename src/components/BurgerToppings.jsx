import Ingredient from "./Ingredient";

const BurgerIngredients = ({ handleRemoveTopping }) => {
  return (
    // map through props.ingredients
    <section id="burger-ingredients">
      <h2>Burger ingredients</h2>
      <ul>
        <Ingredient
          handleRemoveTopping={handleRemoveTopping}
        />
      </ul>
    </section>
  );
};

export default BurgerIngredients;
