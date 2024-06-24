export default function Ingredient({ ingredient, handleAddTopping }) {
  const style = {
    backgroundColor: ingredient.color,
  };

  return (
    <li style={style}>
      {ingredient.name}
      <button onClick={() => handleAddTopping(ingredient)}>&#43;</button>
    </li>
  );
}
