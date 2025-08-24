//App.jsx
import { useEffect, useState } from "react";
import "./index.css";
import axios from 'axios';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5555/api/todos')
      .then(response => {
        setTodos(response.data.data);
      });
  }, []);

//function for adding todos
	 const addTodo = async (e) => {
	  e.preventDefault();
	  const data = { title: newItem };
	  try {
	    const response = await axios.post('http://localhost:5555/api/todos', data);
	    setTodos([...todos, response.data]);
	    setNewItem('');
	  } catch (error) {
	    console.error("Error adding todo:", error);
	  }
	};

  return (
    <div className="frame">
      <h1 className="text-wrapper">todo list</h1>
      
      <ToDoForm newItem={newItem} setNewItem={setNewItem}/>
      <ToDoList todos={todos}/>
    </div>
  );
};

export default App;
