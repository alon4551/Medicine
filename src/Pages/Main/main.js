import React from 'react';
import './main.scss';
import {Link} from 'react-router-dom';
const Main =()=>{
return(<div className="main">
    <div className="title">
        Medicine Site
    </div>
    <div className="buttons">
    <div className="links">

    <Link to="/medicines" className="link">
        Medicines
    </Link>
    <Link to="/add" className="link">
        Add
    </Link>
    </div>
    </div>
</div>)
}
export default Main;