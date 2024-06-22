export function addTopping(topping, burgerToppings, setBurgerToppings) {
  setBurgerToppings([...burgerToppings, { ...topping }]);
}

export function removeTopping(
  ingredientToRemove,
  burgerToppings,
  setBurgerToppings
) {
  const updatedBurgerToppings = burgerToppings.filter(
    // (ingredient) => ingredient._id !== ingredientToRemove._id
    (ingredient) => console.log(ingredient)
  );
  // console.log(updatedBurgerToppings);
  setBurgerToppings([updatedBurgerToppings]);
}
