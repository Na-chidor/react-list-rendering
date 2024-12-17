import React from "react";
import "./Item.css";

function Item({ item, index, onRemoveItem }) {
  return (
    <li className="item">
      {item}
      <button onClick={() => onRemoveItem(index)} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Item;