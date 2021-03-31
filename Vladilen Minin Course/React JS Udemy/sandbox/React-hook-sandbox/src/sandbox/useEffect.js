import React, {useState, useEffect} from 'react';

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPost] = useState({x:0, y:0})

  // console.log('Com render')
  // useEffect(()=> {
  //   console.log('rend')
  // })
  const mouseMuveHanfdler = event => {
    setPost({
      x: event.clientX,
      y: event.clientY
    })
  }
  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
      return () => {
        console.log('clean type')
      }
  }, [type])

  useState(()=> {
    console.log('component did mount')
    window.addEventListener('mousemove', mouseMuveHanfdler)
    return () => {
      window.removeEventListener('mousemove', mouseMuveHanfdler)
    }
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={()=> setType('users')}>Користувачі</button>
      <button onClick={()=> setType('todos')}>TODOS</button>
      <button onClick={()=> setType('post')}>Пости</button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(pos, null, 2)}</pre>
    </div>
  )
}

export default App