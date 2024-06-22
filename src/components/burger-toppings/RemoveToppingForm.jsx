export default function RemoveToppingForm({ topping, handleRemoveTopping }) {
  function handleSubmit() {
    // console.log(topping);
    handleRemoveTopping(topping);
  }
  return <button onClick={() => handleSubmit(topping)}>&#88;</button>;
}
