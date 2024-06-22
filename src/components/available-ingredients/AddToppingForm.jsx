export default function AddToppingForm({ ingredient, handleAddTopping }) {
  return <button onClick={() => handleAddTopping(ingredient)}>&#43;</button>;
}
