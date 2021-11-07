import { useState, useEffect } from 'react'
import './App.css';
import Title from './Components/Title.js';
import SubTitle from './Components/SubTitle.js';
import { btnColor } from './Components/data.js';

function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      localStorage.getItem("theme")
    )
    setTheme(localStorage.getItem("theme"))
  }, [])

  const switchTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem("theme", theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <div className="main">
      <div className="picker-color">
        {btnColor.map(col =>
          <button
            style={{
              background: col.color,
              border: col.name === theme ? '2px solid var(--text-color)' : 'none'
            }}
            onClick={() => switchTheme(col.name)}
          >

          </button>
        )}
      </div>
      <div className="mainBox">
        <Title />
        <SubTitle />
      </div>
    </div>
  );
}

export default App;
