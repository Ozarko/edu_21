import React from 'react'
import { useAlert } from './AlertContext'

export default function Main() {
  const {show} = useAlert()
  return (
    <>
      <h1>Привіт в прикладі Context</h1>
      <button onClick={()=> show('Цей текст з main.js')} className={'btn btn-success'}>Показати alert</button>
    </>
  )
}