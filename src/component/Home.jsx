import React, { useState } from "react";
import "./Header.css";
import Task from "./Task";

function Home() {
  const [task, setTask] = useState([]);
  // const [title , setTitle] = useState([])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // const [discription , setDiscription] = useState([]);
  // console.log(title , discription)

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    setTask([...task, newTask]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr = task.filter((val, i) => {
      return i !== index;
    });
    console.log(filteredArr);
    setTask(filteredArr);
  };

  // console.log(Task)
  return (
    <div className="container">
      <h1>Create your Todo List</h1>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          id=""
          cols=""
          rows=""
          placeholder="Discription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      {/* <Task/> */}
      {task.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  );
}

export default Home;
