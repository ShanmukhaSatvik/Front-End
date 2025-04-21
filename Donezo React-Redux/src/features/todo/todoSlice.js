import { createSlice,nanoid } from '@reduxjs/toolkit';
const initialState= {
    todos:[{id:nanoid(),task:"code",isDone:false},{id:nanoid(),task:"sleep",isDone:false},{id:nanoid(),task:"repeat",isDone:false}]
};
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const newTodo={
                id:nanoid(),
                task:action.payload,
                isDone:false
            };
            state.todos.push(newTodo);
        },
        editTodo:(state,action)=>{
            const {id,newTask}=action.payload;
            const todoToEdit = state.todos.find(todo => todo.id === id);
            if(todoToEdit){
                todoToEdit.task=newTask;
            };
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        toggleDone:(state,action)=>{
            state.todos=state.todos.map((todo)=>
                todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
            );
        },
    },
});
export const {addTodo,deleteTodo,toggleDone,editTodo}=todoSlice.actions;
export default todoSlice.reducer;