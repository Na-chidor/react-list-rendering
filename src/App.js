import React, { useState } from "react";
import ItemList from "./components/ItemList";
import AddItemForm from "./components/AddItemForm";
import "./App.css";

function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="App">
      <h1>Dynamic Item List</h1>
      <AddItemForm onAddItem={addItem} />
      <ItemList items={items} onRemoveItem={removeItem} />
    </div>
  );
}

export default App
