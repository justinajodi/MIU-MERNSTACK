import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="PRODUCT" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        <span>{`PRICE: ₹${item.price}`}</span>
        <p  onClick={() => deleteCartItems(item.product)}>REMOVE</p>
      </div>
    </div>
  );
};

export default CartItemCard;