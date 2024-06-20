const RemoveToppingForm = ({ topping }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${topping.name} clicked!`);
  };
  return (
    <form>
      <button name={topping.name} onClick={(e) => handleSubmit(e)}>
        &#88;
      </button>
    </form>
  );
};

export default RemoveToppingForm;
