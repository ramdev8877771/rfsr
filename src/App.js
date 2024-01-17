import './App.css'
import React from 'react'
const justreddit = require('justreddit')

function App() {
  const handleClick = () => {
    const randSub = justreddit.randomSub()

    window.location = `https://redditfavorites.com/r/${randSub}`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
