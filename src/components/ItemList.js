import React from "react";
import Item from "./Item";
import "./ItemList.css";

function ItemList({ items, onRemoveItem }) {
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </ul>
  );
}

export default ItemList;
