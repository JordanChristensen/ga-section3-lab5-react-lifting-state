import RemoveToppingForm from "./RemoveToppingForm";

const Topping = ({ topping, handleRemoveTopping }) => {
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
};

export default Topping;
