export default function RemoveToppingForm({ topping, handleRemoveTopping }) {
  return <button onClick={() => handleRemoveTopping(topping)}>&#88;</button>;
}
