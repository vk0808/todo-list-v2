import React from 'react';

const List = ({items}) => {
  return (
    <div className="list-todo">
      {items.map(item => {
        const {id, title} = item;
        return {
          <article key={id} className="list-item">
            <p className="title">{title}</p>
            <button type="button" className="edit-btn"></button>
            <button type="button" className="delete-btn"></button>
          </article>
        }
      })}
    </div>
  );
}

export default List;