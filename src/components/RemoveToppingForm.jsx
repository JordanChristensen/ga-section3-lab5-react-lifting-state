const RemoveToppingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Button clicked");
  };
  return (
    <form>
      <button onClick={(e) => handleSubmit(e)}>&#45;</button>
    </form>
  );
};

export default RemoveToppingForm;
