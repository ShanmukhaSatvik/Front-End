import { useSelector,useDispatch } from "react-redux";
import { deleteTodo,toggleDone,editTodo } from "../features/todo/todoSlice";
import AddForm from "./AddForm";
import { useState } from "react";
import "./Todo.css";
function Todo() {
    const todos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    const [editingId,setEditingId]=useState(null);
    const [editText,setEditText]=useState("");
    function startEditing(todo) {
        setEditingId(todo.id);
        setEditText(todo.task);
    };
    function editTextHandler(event) {
        setEditText(event.target.value);
    }
    function deleteHandler(id) {
        dispatch(deleteTodo(id));
    };
    function toggleHandler(id) {
        dispatch(toggleDone(id));
    };
    function submitEdit(event,id) {
        event.preventDefault();
        dispatch(editTodo({id,newTask:editText}));
        setEditText("");
        setEditingId(null);
    };
    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <AddForm />
            <div className="Todo">
                {todos.map((todo)=>(
                    <div key={todo.id} className={`TodoItem ${editingId === todo.id ? "editing" : ""}`}>
                        {editingId===todo.id ? (
                            <form onSubmit={(event)=>submitEdit(event,todo.id)} className="TodoForm">
                                <input type="text" onChange={editTextHandler} value={editText} autoFocus className="todo-input"/> &nbsp;
                                <button type="submit" className="todo-btn">Edit</button>
                            </form>
                        ) : (
                            <>
                                <div className="TodoContent">
                                    <button onClick={()=>toggleHandler(todo.id)} className="todo-btn">
                                        <i className={`fa-solid ${todo.isDone ? "fa-toggle-on" : "fa-toggle-off"}`}></i>
                                    </button> &nbsp;
                                    <span className={todo.isDone ? "line-through-black" : ""}>{todo.task}</span>
                                </div>
                                <div className="TodoActions">
                                    <button onClick={()=>startEditing(todo)} className="todo-btn">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button> &nbsp;
                                    <button onClick={()=>deleteHandler(todo.id)} className="todo-btn">
                                        <i className="fa-solid fa-trash"></i>
                                    </button> 
                                </div>
                            </>
                        )}
                    </div>   
                ))}
            </div>
        </div>
    );
};
export default Todo;