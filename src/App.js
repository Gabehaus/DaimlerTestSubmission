import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomeMain from "./screens/HomeMain"

const App = () => {
  return (
    <Router>
      <main className='main'>
        <Route path='/' component={HomeMain} exact />
      </main>
    </Router>
  )
}

export default App
