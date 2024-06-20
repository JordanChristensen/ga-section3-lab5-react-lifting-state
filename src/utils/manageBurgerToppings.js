export const addTopping = (
  ingredientToAdd,
  burgerToppings,
  setBurgerToppings,
  availableIngredients,
  setAvailableIngredients
) => {
  setBurgerToppings([...burgerToppings], ingredientToAdd);
  const updatedAvailableIngredients = availableIngredients.filter(
    (ingredient) => {
      ingredient._id !== ingredientToAdd._id;
    }
  );
  setAvailableIngredients(updatedAvailableIngredients);
};

export const removeTopping = (
  ingredientToRemove,
  burgerToppings,
  setBurgerToppings,
  availableIngredients,
  setAvailableIngredients
) => {
  const updatedBurgerToppings = burgerToppings.filter(
    (ingredient) => ingredient._id !== ingredientToRemove._id
  );
  setBurgerToppings(updatedBurgerToppings);
  setAvailableIngredients([...availableIngredients], ingredientToRemove);
};
