import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/Alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
  const [value, setValue] = useState('') 
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)


  const onSub = (event) => {
    if(event.key !== 'Enter') {
      return
    }
    
    github.clearUsers()

    if(value.trim()) {
      alert.hide()
      github.search(value.trim())
    }else {
      alert.show('Введіть дані користувача!')
    }
  }
  return (
    <div className='form-group'>
      <input type='text' value={value} onChange={event=> setValue(event.target.value)} className='form-control' onKeyPress={onSub} placeholder='Введіть нік користувача'/>
    </div>
  )
}