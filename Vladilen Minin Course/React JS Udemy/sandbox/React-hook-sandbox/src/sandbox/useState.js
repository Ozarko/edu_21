import React, { useState } from 'react';

function compute() {
  console.log('Some calck....')
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [counter, setCounter] = useState(compute());
  const [counter, setCounter] = useState(()=>compute());

  const [state, setState] = useState({
    title: 'counter',
    date: Date.now()
  })


  function increment() {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter((prevCounter)=> {
      return prevCounter + 1
    })
    // setCounter((prevCounter)=> prevCounter + 1)
  }
  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev=> {
      return {
        ...prev,
        title: 'Нове значення'
      }
    })
  }

  return (
    <div>
      <h1>Сounter: {counter}</h1>
      <button className="btn btn-success " onClick={increment}>Додати</button>
      <button className="btn btn-danger" onClick={decrement}>Відняти</button>
      <button className="btn btn-default" onClick={updateTitle}>Змінити назву</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
