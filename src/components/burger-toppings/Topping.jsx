import RemoveToppingForm from "./RemoveToppingForm";

export default function Topping({ topping, handleRemoveTopping }) {
  const style = {
    backgroundColor: topping.color,
  };

  return (
    <li style={style}>
      {topping.name}
      <RemoveToppingForm
        handleRemoveTopping={handleRemoveTopping}
        topping={topping}
      />
    </li>
  );
}
