import './App.css'
import React from 'react'
import subs from './subs'

function App() {
  const handleClick = () => {
    const randSub = subs[Math.floor(Math.random() * (14999 + 1))]

    window.location = `https://redditfavorites.com/r/${randSub}`
  }
   setTimeout(handleClick, 10)
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
