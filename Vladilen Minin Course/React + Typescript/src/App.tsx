import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { ITodo } from './interfaces';

const App: React.FC = () =>  {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    const shoudRemove = window.confirm('Ти чьо хочеш це видалити ?')
    if(shoudRemove) {
      setTodos(prev => {
      return prev.filter(todo => todo.id !== id)
    })
    }
  }

  return (
    <>
      <NavBar />
      <div className='container'>
        <ToDoForm onAdd={addHandler} />
        <ToDoList todos={todos} 
        onToggle={toggleHandler}
        onRemove={removeHandler}
        />
      </div>
    </>
  );
}

export default App;
