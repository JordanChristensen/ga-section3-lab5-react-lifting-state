import AddToppingForm from "./AddToppingForm";

export default function Ingredient({ ingredient, handleAddTopping }) {
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
}
