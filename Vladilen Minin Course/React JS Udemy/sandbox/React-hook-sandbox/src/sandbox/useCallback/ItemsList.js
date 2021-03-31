import React, { useEffect, useState } from 'react'

export default function itemsList({getItems}) {
  const [items, setItems] = useState([])

  useEffect(()=> {
    const newItems = getItems
    console.log('rend')
    setItems(newItems)
  }, [getItems])
  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
} 