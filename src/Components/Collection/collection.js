import React from 'react';
import Item from '../CategoryItem';
import './collection.scss';
const Collection=({list})=>{

    return(<div className="display">
        {list.map((item)=><Item key={item.id} name={item.name}/>)}
    </div>);
}
export default Collection;