import React from "react"
import "./App.css"
import LandingPage from "./components/landingPage"

const App: React.FC = () => {
  return (
    <div className="App">
      <p>By: Mitchell Rhoads</p>
      <a target="blank" href="https://github.com/Mitchell8210">
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/mitchell-rhoads-009006195/"
        target="blank"
      >
        LinkedIn
      </a>
      <a target="blank" href="http://mitchellrhoads.surge.sh">
        Portfolio
      </a>
      <header className="App-header">
        <LandingPage />
      </header>
    </div>
  )
}

export default App
