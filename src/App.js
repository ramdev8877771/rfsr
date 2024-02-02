import './App.css'
import React from 'react'
import subs from './subs'

function App() {
  localStorage.setItem("count", 0)
  const handleClick = () => {
    const randSub = subs[Math.floor(Math.random() * (14999 + 1))]
    localStorage.setItem("count", 1)

    window.location = `https://redditfavorites.com/r/${randSub}`
  }
  if(localStorage.getItem("count") !== 0){
    setTimeout(handleClick, 500)
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
