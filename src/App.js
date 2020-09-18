import React, { Component } from 'react';
import {Route, Switch,Link} from 'react-router-dom';
import Search from './Pages/Search';
import Medicine from './Components/Medicine';
import Main from './Pages/Main';
import './App.css';
class App extends Component {
  render(){
   
    return (
      <div className="circles">

      <div className="context">
          <div className="header"> 
        <Link to='/' className="icon">
          Home
        </Link>
        <Link to='/medicines' className="icon">
          List
        </Link>
          </div>
        <Switch>
          <Route exact path='/' component={Main}/>
        <Route exact path='/medicines' component={Search}/>
        <Route path ='/medicines/:medId' component={Medicine}/>
        </Switch>
      </div>
        
        <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      </div>
  );
  }
}
export default App;
