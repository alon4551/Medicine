import React from 'react';
import './Input.scss';
const Input=({type,action,name,id,right ,temp})=>{
    return(
        <div className={`input-container ${right? 'right':''}`}>
            <h3 className="name">{name}</h3>
            <input className={`input ${temp} `} id={id} type={type} onChange={action}></input>
    </div>
    )
}

export default Input;