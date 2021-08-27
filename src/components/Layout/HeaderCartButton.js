import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cart = useContext(CartContext);
  const numberOfCartItems = cart.items.reduce((curNumber, item) => {
    console.log("curNumber", curNumber);
    console.log("item.amount", item.amount);
    console.log("curNumber + item.amount", curNumber + item.amount);
    const itemAmount = +item.amount;
    return curNumber + itemAmount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
