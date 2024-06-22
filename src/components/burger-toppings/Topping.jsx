import RemoveToppingForm from "./RemoveToppingForm";

const Topping = ({ topping, handleRemoveTopping }) => {
  const style = {
    backgroundColor: topping.color,
  };
  // console.log(topping);
  return (
    <li style={style}>
      {topping.name}
      <RemoveToppingForm
        handleAddTopping={handleRemoveTopping}
        topping={topping}
      />
    </li>
  );
};

export default Topping;
