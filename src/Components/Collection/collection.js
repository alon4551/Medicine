import React from 'react';
import Item from '../CategoryItem';
import './collection.scss';
const Collection=({name,list})=>{

    return(<div className="display">
        <label>
            {name}:
            </label>
        <div className="items">

        {list.map((item,index)=><Item key={index} name={item}/>)}
        </div>
    </div>);
}
export default Collection;