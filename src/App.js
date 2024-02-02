import './App.css'
import React from 'react'
import subs from './subs'

function App() {
  setInterval(handleClick, 500)
  const handleClick = () => {
    const randSub = subs[Math.floor(Math.random() * (14999 + 1))]

    window.location = `https://redditfavorites.com/r/${randSub}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
