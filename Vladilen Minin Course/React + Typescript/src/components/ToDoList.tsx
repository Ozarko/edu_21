import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void
  onRemove(id: number): void
};

const ToDoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
  if(todos.length === 0) {
    return <p className='center'>Поки що справ в тебе немає</p>
  }
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo']
        if(todo.completed) {
          classes.push('completed')
        }
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={()=> onToggle(todo.id)}/>
              <span>{todo.title}</span>
              <i onClick={()=> onRemove(todo.id)} className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
