export default function AddToppingForm({ ingredient, handleAddTopping }) {
  function handleSubmit() {
    handleAddTopping(ingredient);
  }
  return <button onClick={() => handleSubmit(ingredient)}>&#43;</button>;
}
