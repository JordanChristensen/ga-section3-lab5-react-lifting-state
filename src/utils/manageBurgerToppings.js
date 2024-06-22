export async function addTopping(topping, burgerToppings, setBurgerToppings) {
  try {
    const exists = burgerToppings.some(
      (burgerTopping) => burgerTopping._id === topping._id
    );
    if (!exists) {
      await setBurgerToppings([...burgerToppings, { ...topping }]);
    }
  } catch (addToppingError) {
    console.log(
      `Error when adding ${topping} to burger ----->`,
      addToppingError
    );
  }
}

export async function removeTopping(
  ingredientToRemove,
  burgerToppings,
  setBurgerToppings
) {
  try {
    const updatedBurgerToppings = burgerToppings.filter(
      (ingredient) => ingredient._id !== ingredientToRemove._id
    );
    await setBurgerToppings([...updatedBurgerToppings]);
  } catch (removeToppingError) {
    console.log(
      `Error when removing ${ingredientToRemove} from burger ----->`,
      removeToppingError
    );
  }
}
