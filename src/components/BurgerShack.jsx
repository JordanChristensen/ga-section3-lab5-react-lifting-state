import { useState } from "react";

import { addTopping, removeTopping } from "../utils/manageBurgerToppings";
import BurgerToppings from "../components/burger-toppings/BurgerToppings";
import AvailableIngredients from "../components/available-ingredients/AvailableIngredients";
import { ingredientsData } from "../data/ingredientsData";

export default function BurgerShack() {
  const availableIngredients = ingredientsData;
  const [burgerToppings, setBurgerToppings] = useState([]);

  function handleAddTopping(ingredientToAdd) {
    addTopping(ingredientToAdd, burgerToppings, setBurgerToppings);
  }

  function handleRemoveTopping(ingredientToRemove) {
    removeTopping(ingredientToRemove, burgerToppings, setBurgerToppings);
  }

  return (
    <main>
      <h1>Burger shack</h1>
      <section id="burger-customizer">
        <AvailableIngredients
          availableIngredients={availableIngredients}
          handleAddTopping={handleAddTopping}
        />
        <BurgerToppings
          burgerToppings={burgerToppings}
          handleRemoveTopping={handleRemoveTopping}
        />
      </section>
    </main>
  );
}
