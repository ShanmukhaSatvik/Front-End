import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
function AddForm() {
    let [task,setTask]=useState("");
    const dispatch=useDispatch();
    function inputChangeHandler(event) {
        setTask(event.target.value);
    };
    function submitHandler(event) {
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    };
    return(
            <form onSubmit={submitHandler} className="TodoForm">
                <input type="text" onChange={inputChangeHandler} value={task} className="todo-input" placeholder="What is the task today?"/> &nbsp;
                <button type="submit" className="todo-btn">Add Task</button>
            </form>
    );
};
export default AddForm;