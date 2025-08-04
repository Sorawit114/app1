import React from 'react';
import './App.css'
import logo from './LOGO-CIT.png'

import {Header,Content,Footer} from './func-components.js'
import Calendar from './class-component';

import Button from './class-component';
import { Calculator2 }  from './calculator';

function App() {
  const divStyle={
    color:'red',
    backgroundColor:'powderblue',
    fontSize:'larger',
    padding:'3px',
  }
  return (
    
    /*
    <>
    <div style={divStyle}>Hello React(Inline css)</div>
    <div className='divStyle'>Hello React(External css)</div>
    <h1>DeveloperThai.com</h1>
    <div className='title'>
      React & React Native
    </div>
    <img src={logo} width="10%" alt=""/>
    <br/><br/><br/><br/><br/>
    </>
    */

    /*
    [<Header/>,<Content/>,<Footer/>]
    */

    /*
    <>
    <Header/>
    <p><center><Calendar/></center></p>
    <Content/>
    <Footer/>
    </>
    */

    /*
    <Button/>
    */

    <Calculator2/>
  )
}

export default App;
