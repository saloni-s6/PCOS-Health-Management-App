import { useState } from 'react'
import PreLogin from './components/PreLogin';
// import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PreLogin />
      </div>
    </>
  )
}

export default App
