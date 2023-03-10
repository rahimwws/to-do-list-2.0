import { useState, useEffect } from "react";
import "./style.css";
import { nanoid } from "nanoid";
import { ToDoListBtn } from "../ToDoListBtn/ToDoListBtn";
import { DoneHelper } from "../../helpers/DoneHelper";
export const ToDoList = () => {
  const [inputText, setInput] = useState("");
  const [SearchText, setSearch] = useState("");
  const [tasks, setTasks] = useState([]);
  const [SearchTasks, setSearchTasks] = useState([]);
  const [inputMod, setInputMod] = useState("tasks");
  // const [FavTasks, setFavTasks] = useState([]);
  useEffect(() => {
    const localTask = localStorage.getItem("task");
    if (localTask) {
      const parsed = JSON.parse(localTask);
      setTasks(parsed);
    } else {
      localStorage.setItem("task", JSON.stringify([]));
    }
  }, []);
  function handleChangeEnter({ key }) {
    if (key === "Enter") {
      btnClick();
    }
  }
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  function btnClick() {
    if (inputText !== "") {
      const newTask = {
        id: nanoid(),
        text: inputText,
      };
      setTasks([...tasks, newTask]);
      localStorage.setItem("task", JSON.stringify([...tasks, newTask]));
      setInput("");
    }
  }

  const handleDelete = (taskId) => {
    const filtered = tasks.filter((task) => {
      if (taskId !== task.id) {
        return task;
      }
    });
    setSearchTasks(filtered);
    setTasks(filtered);
    localStorage.setItem("task", JSON.stringify(filtered));
  };
  const handleDeleteAll = () => {
    localStorage.clear("task");
    setTasks([]);
  };
  const toggleSearch = () => {
    if (inputMod === "tasks") {
      setSearchTasks(tasks);
      setInputMod("search");
    }
    if (inputMod === "search") setInputMod("tasks");
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);

    const filteredTask = tasks.filter((task) => {
      if (task.text.includes(event.target.value)) return task;
    });
    setSearchTasks(filteredTask);
  };
  const inputValue = inputMod === "tasks" ? inputText : SearchText;
  const handleInput = inputMod === "tasks" ? handleChange : handleSearchChange;
  const currentTasks = inputMod === "tasks" ? tasks : SearchTasks;
  const handleDone = (task,id)=>{
    const element = document.querySelector(`#${id}`)
    element.classList.add('done')
    DoneHelper.push(task.text)
    console.log(DoneHelper);

  }

  return (
    <div className="ToDoList">
      <div className="todo-actions">
        <ToDoListBtn
          class="ToDoListBtn"
          onClick={toggleSearch}
          className="searchBtn"
        >
          Search
        </ToDoListBtn>

        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          onKeyUp={handleChangeEnter}
        />
        {inputMod === "tasks" && (
          <>
            
              <ToDoListBtn
                class="ToDoListBtn"
                onClick={btnClick}
                color="red-btn"
              >
                Add
              </ToDoListBtn>
              <ToDoListBtn class="ToDoListBtn" onClick={handleDeleteAll}>
                Delete All
              </ToDoListBtn>
          
          </>
        )}
      </div>
      <div className="tasks">
        <div className="task">
          <ol>
            {currentTasks.map((task) => (
            
              <li className="listItem" key={task.id}>
                <p id={task.id} >{task.text}</p>
                
                <ToDoListBtn
                  class="ToDoListBtn"
                  onClick={() => handleDelete(task.id)}
                >
                  delete
                </ToDoListBtn>
                <ToDoListBtn onClick={()=>handleDone(task,task.id)} class = 'ToDoListBtn'>Done</ToDoListBtn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
