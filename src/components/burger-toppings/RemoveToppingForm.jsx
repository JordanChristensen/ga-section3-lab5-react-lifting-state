const RemoveToppingForm = ({ topping, handleRemoveTopping }) => {
  const handleSubmit = () => {
    console.log(`${topping.name} has the ID# ${topping._id}`);
    handleRemoveTopping(topping);
  };
  return <button onClick={(topping) => handleSubmit(topping)}>&#88;</button>;
};

export default RemoveToppingForm;
