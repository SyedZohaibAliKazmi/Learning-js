import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [darkMode, setDarkMode] = useState(false); // Initial theme state

  const [currentColor, setCurrentColor] = useState('#ff0000')

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Theme ko toggle karein
  setCurrentColor(currentColor === '#ff0000' ? '#00ff00' : '#ff0000');
  };

  // useEffect to update body background color on theme change
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = 'black'; // Dark mode background
      document.body.style.color = 'white'; // Dark mode text color
      console.log("Dark mode on ha ");
      
    } else {
      document.body.style.backgroundColor = 'white'; // Light mode background
      document.body.style.color = 'black'; // Light mode text color
      console.log("Light mode on ha");
      
    }
  }, [darkMode]); // This effect runs whenever 'darkMode' changes

  return (
    <div>
      <button onClick={toggleTheme}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    <p style={{ color: currentColor }}>This div's background color is dynamically changing.</p>
    </div>

  );
}

export default App;
