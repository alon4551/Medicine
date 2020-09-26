import React, { Component } from 'react';
import {Route, Switch,Link} from 'react-router-dom';
import {GetMedicines} from './firebase';
import {connect} from 'react-redux';
import {Refresh,Filter} from './Redux/Medicine/medicine.actions';
import Search from './Pages/Search';
import Medicine from './Components/Medicine';
import Add from './Pages/AddMedicine';
import Main from './Pages/Main';
import './App.css';
class App extends Component {
    constructor(){
      super();
    }
    componentDidMount(){
      GetMedicines().then(data=>{
        this.props.Refresh(data)
      });
    }
    render(){
   const url='https://pics.clipartpng.com/Red_and_White_Pill_Capsule_PNG_Clipart-360.png';
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
        <Route path ='/add' component={Add}/>
        </Switch>
      </div>
        
        <ul className="circles">
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    <li><img src={url}/></li>
                    
            </ul>
      </div>
  );
  }
}
const mapDispatchToProps=dispatch=>({
  Refresh:(data)=>dispatch(Refresh(data))
})
export default connect(null,mapDispatchToProps)(App);
