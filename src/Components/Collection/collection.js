import React from 'react';
import Item from '../CategoryItem';
import './collection.scss';
const Collection=({list})=>{

    return(<div className="display">
        {list.map((item,index)=><Item key={index} name={item}/>)}
    </div>);
}
export default Collection;