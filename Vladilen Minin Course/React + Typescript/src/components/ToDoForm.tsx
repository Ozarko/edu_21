import React, { useState } from 'react';

interface TodoFormProps {
  onAdd(title: string): void
}

const ToDoForm: React.FC<TodoFormProps> = ({onAdd}) => {

  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter') {
      onAdd(title)
      setTitle('')
    }
  }

  return (
    <div className='input-field mt2'>
      <input onKeyPress={keyPressHandler} value={title}  onChange={changeHandler} type='text' id='title' placeholder='Введіть назву справи !' />
      <label htmlFor='title' className='active'>Введіть назву справи !</label>
    </div>
  )
}

export default ToDoForm
