import React, { useState } from "react";

export default function ListGroup() {
  const items = ["New York", "Delhi", "Tokyo", "London", "Mumbai"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Heading</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
