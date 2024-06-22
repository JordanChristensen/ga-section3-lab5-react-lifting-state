import Topping from "./Topping";

export default function BurgerToppings({
  burgerToppings,
  handleRemoveTopping,
}) {
  return (
    <section id="burger-toppings">
      <h2>Burger toppings</h2>
      {burgerToppings.length === 0 ? (
        "This is a very plain burger, add toppings?"
      ) : (
        <ul>
          {burgerToppings.map((topping) => (
            <Topping
              key={topping._id}
              topping={topping}
              handleRemoveTopping={handleRemoveTopping}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
