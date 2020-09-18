import React from 'react';
import './item.scss';
const Item =({name})=>{
return(
    <div className="item">
        {name}
    </div>
)
}
export default Item