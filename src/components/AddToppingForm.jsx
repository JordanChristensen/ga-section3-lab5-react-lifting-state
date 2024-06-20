const AddToppingForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Button clicked");
    };
    return (
      <form>
        <button onClick={(e) => handleSubmit(e)}>&#43;</button>
      </form>
    );
  };
  
  export default AddToppingForm;
  