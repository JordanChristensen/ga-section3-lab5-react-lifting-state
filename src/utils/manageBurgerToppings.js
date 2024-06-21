export const addTopping = (
  ingredientToAdd,
  burgerToppings,
  setBurgerToppings
) => {
  setBurgerToppings([...burgerToppings], ingredientToAdd);
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
