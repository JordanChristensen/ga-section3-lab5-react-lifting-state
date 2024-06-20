import Ingredient from "./Ingredient";

const IngredientList = ({ handleAddIngredientToBurger }) => {
  return (
    // map through props.ingredients
    <section>
      <ul></ul>
      <Ingredient handleAddIngredientToBurger={handleAddIngredientToBurger} />
    </section>
  );
};

export default IngredientList;
