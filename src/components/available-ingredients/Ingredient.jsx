import AddToppingForm from "./AddToppingForm";

const Ingredient = ({ ingredient }) => {
  const style = {
    backgroundColor: ingredient.color,
  };
  return (
    <li style={style}>
      {ingredient.name}
      <AddToppingForm ingredient={ingredient} />
    </li>
  );
};

export default Ingredient;
