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
    console.log('hello');
  }
  
  return (
    <section className="section-center">
      <form className="list-form" onSubmit={handleSubmit}>
        {alert.show && <Alert />}
        <h3>Todo List</h3>
        <div className="form-control">
          <input type="text" className="list" placeholder="buy ..." />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="list-container">
        <List />
        <button className="clear-btn">clear items</button>
      </div>
    </section>
  );
}
