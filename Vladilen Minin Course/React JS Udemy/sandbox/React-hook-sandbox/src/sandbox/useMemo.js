import React, {useState, useEffect, useRef, useMemo} from 'react';

function App() {
  const [number, setNumber] = useState(42)

  function complexCompute(num) {
    console.log('rend')
    let i = 0
    while(i< 1000000000) i++
    return num * 2
  }

  const computed = useMemo(()=> {
    return complexCompute(number)
  }, [number])

  const [colored, useColorted] =  useState(false)

  const styles = useMemo(()=> {
    return {
      color: colored ? 'darkred': 'black'
    }
  }, [colored])

  useEffect(()=> {
    console.log('style changed')
  },[styles])

  return (
    <>
    <h1 style={styles}>Вираховуємо властивість: {computed}</h1>
    <button className={'btn btn-success'} onClick={()=> setNumber(prev=> prev+1)}>Додати</button>
    <button className={'btn btn-success'} onClick={()=> setNumber(prev=> prev-1)}>Додати</button>
    <button className={'btn btn-success'} onClick={()=> useColorted(prev=> !prev)}>Change</button>
    </>
  )
}

export default App