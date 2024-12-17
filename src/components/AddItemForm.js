
import React, { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onAddItem }) {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
onAddItem(newItem);
setNewItem("");
}
};

return (
<form onSubmit={handleSubmit} className="add-item-form">
<input
  type="text"
  value={newItem}
  onChange={(e) => setNewItem(e.target.value)}
  placeholder="Enter a new item"
/>
<button type="submit">Add Item</button>
</form>
);
}

export default AddItemForm;