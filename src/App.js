import React, { Component } from 'react';
import './App.css';
import RoutingComponent from './RoutingComponent';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/services">Services</Link></li>
           <li><Link to="/contactus">Contactus</Link></li>
          </ul>
          <RoutingComponent/>
      </div>
    );
  }
}

export default App;
