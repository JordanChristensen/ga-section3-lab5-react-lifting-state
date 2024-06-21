const AddToppingForm = ({ ingredient, handleAddTopping }) => {
  const handleSubmit = () => {
    // console.log(`${ingredient.name} has the ID# ${ingredient._id}`);
    handleAddTopping(ingredient);
  };
  return (
    <button onClick={(ingredient) => handleSubmit(ingredient)}>&#43;</button>
  );
};

export default AddToppingForm;
