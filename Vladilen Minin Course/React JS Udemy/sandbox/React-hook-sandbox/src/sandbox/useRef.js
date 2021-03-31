import React, {useState, useEffect, useRef} from 'react';

let rendC = 1

function App() {
  //  const [renderCounrt, setRenderCount] = useState(1)

  const [value, setValue] = useState('init')
  const renderCount = useRef(1)
  const inputRef = useRef(null)

  const prevValue = useRef('')

   useEffect(()=> {
    renderCount.current++
    console.log(inputRef.current.value)
   })

   useEffect(()=> {
    prevValue.current = value
   },[value])

   const focus =()=> inputRef.current.focus()

  return (
    <div>
      <h1>Кількість рендерів: {renderCount.current}</h1>
      <h2>Попередній стан: {prevValue.current}</h2>
      <input ref={inputRef} onChange={(e)=> setValue(e.target.value)} value={value} />
      <button className='btn btn-success' onClick={focus}>Фокус</button>
    </div>
  )
}

export default App