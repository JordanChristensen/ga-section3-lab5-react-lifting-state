export default function Topping({ topping, handleRemoveTopping }) {
  const style = {
    backgroundColor: topping.color,
  };

  return (
    <li style={style}>
      {topping.name}
      <button onClick={() => handleRemoveTopping(topping)}>&#88;</button>
    </li>
  );
}
