const RemoveToppingForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Button clicked");
  };
  return (
    <form>
      <button onClick={(e) => handleSubmit(e)}>&#88;</button>
    </form>
  );
};

export default RemoveToppingForm;
