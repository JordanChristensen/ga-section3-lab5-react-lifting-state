import RemoveToppingForm from "./RemoveToppingForm";

const Topping = ({ topping }) => {
  const style = {
    backgroundColor: topping.color,
  };

  return (
    <li style={style}>
      {topping.name}
      <RemoveToppingForm />
    </li>
  );
};

export default Topping;
