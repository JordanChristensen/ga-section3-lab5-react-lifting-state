import "./App.css";
import { useState } from "react";
import { addTopping, removeTopping } from "./utils/manageBurgerToppings";
import BurgerToppings from "./components/burger-toppings/BurgerToppings";
import AvailableIngredients from "./components/available-ingredients/AvailableIngredients";
import { ingredientsData } from "./data/ingredientsData";

const App = () => {
  const [availableIngredients, setAvailableIngredients] =
    useState(ingredientsData);
  const [burgerToppings, setBurgerToppings] = useState([]);

  const handleAddTopping = (ingredientToAdd) => {
    // console.log(ingredientToAdd);
    addTopping(ingredientToAdd, burgerToppings, setBurgerToppings);
  };

  // review naming of all
  const handleRemoveBurgerTopping = (ingredientToRemove) => {
    removeTopping(
      ingredientToRemove,
      burgerToppings,
      setBurgerToppings,
      availableIngredients,
      setAvailableIngredients
    );
  };

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
          handleRemoveBurgerTopping={handleRemoveBurgerTopping}
        />
      </section>
    </main>
  );
};

export default App;
