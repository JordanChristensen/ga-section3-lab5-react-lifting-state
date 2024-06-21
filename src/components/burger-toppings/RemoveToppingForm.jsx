const RemoveToppingForm = ({ topping }) => {
  const handleSubmit = () => {
    console.log(`${topping.name} has the ID# ${topping._id}`);
  };
  return <button onClick={(topping) => handleSubmit(topping)}>&#88;</button>;
};

export default RemoveToppingForm;
