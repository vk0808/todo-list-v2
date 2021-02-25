import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem }) => {
  return (
    <div className="list-todo">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="list-item">
            <p className="title">{title}</p>
            <button type="button" className="edit-btn">
              <FaEdit />
            </button>
            <button type="button" className="delete-btn">
              <FaTrash onClick={() => removeItem(id)} />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
