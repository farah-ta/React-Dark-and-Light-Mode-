import './App.css';
import { useState,useEffect } from 'react';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
function App() {
const[theme,setTheme] = useState('light');

const darkTheme = () =>
{
if(theme ==='light')
{
setTheme('dark')
}
else
{
  setTheme('light');
}

}

useEffect(() => {
  document.body.className = theme;
 }, [theme]);
  return (
    <div className="App">
      <h1>Dark and light theme</h1>
      <Switch
  onChange={darkTheme}
  inputProps={{ 'aria-label': 'controlled' }}
/>

<IconButton aria-label="delete" onClick={darkTheme}>
<div>{theme ==='light' ? <Brightness7Icon /> : <DarkModeIcon style={{color:'white'}} />}</div>
        
      </IconButton>
    </div>
  );
}

export default App;
