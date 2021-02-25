import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="list-todo">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="list-item">
            <p className="title">{title}</p>
            <div className="btns">
              <button type="button" className="edit-btn">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
