import React, { Component } from 'react';
import Menu from './component/MainComponent';
import {BrowserRouter} from 'react-router-dom'; 
import './App.css';
import Main from './component/MainComponent';

class  App extends Component {
  

  render(){
    
    return( 
      <BrowserRouter>   
      <div>
      
      <Main/>
    </div>
    </BrowserRouter>

   );
 }
}

export default App;
