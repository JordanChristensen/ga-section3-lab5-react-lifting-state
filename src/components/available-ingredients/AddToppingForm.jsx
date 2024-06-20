const AddToppingForm = ({ ingredient }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${ingredient.name} clicked!`);
  };
  return (
    <form>
      <button name={ingredient.name} onClick={(e) => handleSubmit(e)}>
        &#43;
      </button>
    </form>
  );
};

export default AddToppingForm;
