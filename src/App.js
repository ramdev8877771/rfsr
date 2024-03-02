import './App.css'
import React from 'react'
import subs from './subs'

function App() {
  const handleClick = () => {
    const randSub = subs[Math.floor(Math.random() * 15000 + 15000)]

    window.location = `https://redditfavorites.com/r/${randSub}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
