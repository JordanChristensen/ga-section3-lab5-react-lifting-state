export const addTopping = (
  ingredientToAdd,
  burgerToppings,
  setBurgerToppings
) => {
  // console.log(ingredientToAdd);
  //
  //
  //
  // -----------> WORKING below HERE ----------------
  //
  // ingredientToAdd.Properties needs to be assigned to topping.Properties?
  //
  setBurgerToppings([...burgerToppings, { ingredientToAdd }]);
  // console.log(burgerToppings);
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
  setAvailableIngredients([...availableIngredients, ingredientToRemove]);
};
