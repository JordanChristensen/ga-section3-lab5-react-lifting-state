export const addIngredientToBurger = (
  ingredientToAdd,
  burgerStack,
  setBurgerStack,
  ingredientList,
  setIngredientList
) => {
  setBurgerStack([...burgerStack], ingredientToAdd);
  const updatedIngredientList = ingredientList.filter((ingredient) => {
    ingredient._id !== ingredientToAdd._id;
  });
  setIngredientList(updatedIngredientList);
};

export const removeIngredientFromBurger = (
  ingredientToRemove,
  burgerStack,
  setBurgerStack,
  ingredientList,
  setIngredientList
) => {
  const updatedBurgerStack = burgerStack.filter(
    (ingredient) => ingredient._id !== ingredientToRemove._id
  );
  setBurgerStack(updatedBurgerStack);
  setIngredientList([...ingredientList], ingredientToRemove);
};
