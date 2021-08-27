import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
        <img
          src={mealsImage}
          alt="Table of food"
          className={classes["main - image"]}
        />
      </div>
    </Fragment>
  );
};

export default Header;
