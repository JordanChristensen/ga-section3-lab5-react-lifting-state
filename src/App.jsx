import { useState } from "react";
import "./App.css";
import BurgerStack from "./components/BurgerStack";
import IngredientList from "./components/IngredientList";
import { AvailableIngredients } from "./data/AvailableIngredients";
import {
  addIngredientToBurger,
  removeIngredientFromBurger,
} from "./utils/manageBurgerIngredients";

const App = () => {
  const [ingredientList, setIngredientList] = useState(AvailableIngredients);
  const [burgerStack, setBurgerStack] = useState([]);

  const handleAddIngredientToBurger = (ingredientToAdd) => {
    addIngredientToBurger(
      ingredientToAdd,
      burgerStack,
      setBurgerStack,
      ingredientList,
      setIngredientList
    );
  };

  const handleRemoveIngredientFromBurger = (ingredientToRemove) => {
    removeIngredientFromBurger(
      ingredientToRemove,
      burgerStack,
      setBurgerStack,
      ingredientList,
      setIngredientList
    );
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section id="burger-customizer">
        <IngredientList
          handleAddIngredientToBurger={handleAddIngredientToBurger}
        />
        <BurgerStack
          handleRemoveIngredientFromBurger={handleRemoveIngredientFromBurger}
        />
      </section>
    </main>
  );
};

export default App;
