import React, {useState} from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return (
    <HookSwitcher/>
  )
}

const HookSwitcher = () => {
  const [color, setColor] = useState('black')
  const [fontSize, setFontSize] = useState(14)
  return (
    <div style={{ backgroundColor: color, padding: "10px", fontSize: `${fontSize}px` }}>
      Hello world!
      <button onClick={() => setColor('black')}>Dark</button>
      <button onClick={() => setColor('white')}>Light</button>
      <button onClick={() => setFontSize((size) => size + 2)}>+2px</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
