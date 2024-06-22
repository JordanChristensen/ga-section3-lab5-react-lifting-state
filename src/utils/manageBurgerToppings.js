export function addTopping(topping, burgerToppings, setBurgerToppings) {
  // ----> IF(burgerToppings already contains topping, don't add duplicate items)
  setBurgerToppings([...burgerToppings, { ...topping }]);
}

export function removeTopping(
  ingredientToRemove,
  burgerToppings,
  setBurgerToppings
) {
  const updatedBurgerToppings = burgerToppings.filter(
    // also need to REMOVE the <Topping> component to prevent React DOM error
    (ingredient) => ingredient._id !== ingredientToRemove._id
  );
  console.log(updatedBurgerToppings);
  setBurgerToppings([updatedBurgerToppings]);
}
