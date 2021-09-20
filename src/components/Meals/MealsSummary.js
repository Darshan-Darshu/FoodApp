import React from "react";
import classes from "./MealsSummary.module.css";

function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food</h2>
      <p>
        Choose your favorite food from our board selection
        of available meals and enjoy a delicious lunch or
        dinner at home
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Provident explicabo earum, voluptates dolores
        accusantium fuga voluptatem repudiandae voluptatum
        expedita recusandae animi
      </p>
    </section>
  );
}

export default MealsSummary;
