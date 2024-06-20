import "./App.css";
import { useState } from "react";
import { addTopping, removeTopping } from "./utils/manageBurgerToppings";
import BurgerToppings from "./components/BurgerToppings";
import AvailableIngredients from "./components/AvailableIngredients";
import { ingredientsData } from "./data/ingredientsData";

const App = () => {
  const [availableIngredients, setAvailableIngredients] =
    useState(ingredientsData);
  const [burgerToppings, setBurgerToppings] = useState([]);

  const handleAddBurgerTopping = (ingredientToAdd) => {
    addTopping(
      ingredientToAdd,
      burgerToppings,
      setBurgerToppings,
      availableIngredients,
      setAvailableIngredients
    );
  };

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
          handleAddBurgerTopping={handleAddBurgerTopping}
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
