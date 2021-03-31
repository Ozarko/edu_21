import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import ItemsList from './sandbox/useCallback/ItemsList';

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred': 'black'
  }

  const generateItemsFromApi = useCallback(()=> {
    return new Array(count).fill('').map((_, i)=> `Element ${i+1}`)
  }, [count]) 

  return (
    <>
    <h1 style={styles}>Count: {count} </h1>
    <button className={'btn btn-primary'} onClick={()=>setCount( prev => prev+ 1)}>Add</button>
    <button className={'btn btn-warning'} onClick={()=> setColored(prev => !prev)}>Change</button>
    <ItemsList getItems={generateItemsFromApi} />
    </>
  )
}

export default App