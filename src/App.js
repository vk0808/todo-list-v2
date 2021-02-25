import React, { useState, useEffect } from 'react';
import List from './List'
import "./styles.css";

export default function App() {
  const [name, setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:'',type:''});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      
    } else if (name && isEditing) {

    } else {
      const newItem = {id: new Date().getTime().toString(), title:name};
      setList([...list, newItem]);
      setName('');
    }
  }
  
  return (
    <section className="section-center">
      <form className="list-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Todo List</h3>
        <div className="form-control">
          <input type="text" className="list" placeholder="buy ..." value={name} onChange={(e) => {setName(e.target.value)}} />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="list-container">
          <List items={list} />
          <button className="clear-btn">clear items</button>
        </div>
      )}
    </section>
  );
}
