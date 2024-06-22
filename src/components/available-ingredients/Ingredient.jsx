import AddToppingForm from "./AddToppingForm";

const Ingredient = ({ ingredient, handleAddTopping }) => {
  const style = {
    backgroundColor: ingredient.color,
  };
  
  return (
    <li style={style}>
      {ingredient.name}
      <AddToppingForm
        handleAddTopping={handleAddTopping}
        ingredient={ingredient}
      />
    </li>
  );
};

export default Ingredient;
