import './App.css';

import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News'

class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
       <div className='container'>
          <News/>
        
      </div>
      </>
     
    );
  }
}

export default App;
