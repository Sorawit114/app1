import React from 'react';
import './App.css'

function App() {
  const divStyle={
    color:'red',
    backgroundColor:'powderblue',
    fontSize:'larger',
    padding:'3px',
  }
  return (
    <>
    <div style={divStyle}>Hello React(Inline css)</div>
    <div className='divStyle'>Hello React(External css)</div>
    <h2>DeveloperThai.com</h2>
    <div className='title'>
      React & React Native
    </div>
    </>
  )
}

export default App;
