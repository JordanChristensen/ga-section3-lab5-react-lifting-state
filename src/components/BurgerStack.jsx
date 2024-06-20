import Ingredient from "./Ingredient";

const BurgerStack = ({ handleRemoveIngredientFromBurger }) => {
  return (
    // map through props.ingredients
    <section>
      <ul></ul>
      <Ingredient
        handleRemoveIngredientFromBurger={handleRemoveIngredientFromBurger}
      />
    </section>
  );
};

export default BurgerStack;
