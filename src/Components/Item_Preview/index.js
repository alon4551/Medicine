import React from 'react';
import './input_preview.scss';
const Item_Preview =({name,value})=>{
    return(<div className="item_prev">
        <h2>{name}:</h2>
        <h3>{value}</h3>
    </div>);
}
export default Item_Preview;