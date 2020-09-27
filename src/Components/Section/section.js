import React from 'react';
import {removeValue} from '../../Redux/Medicine/medicine.actions';
import {connect} from 'react-redux';
import './section.scss';
const Section =({name,collection,id,remove})=>{
    const onDelete=(id,value)=>{
        remove(id, value);
    }
    console.log(collection);
    return (<div className="section">
    <h2>{name}</h2>
    <div className="collection">

        {collection.map(name =>
             <div className="item">
            <h2>{name}</h2>
            <button onClick={() => onDelete(id, name)}>X</button>
        </div>)}
    </div>
</div>)
};
const mapDispatchToProps=dispacth=>({
    remove:(id,value)=>dispacth(removeValue(id,value))
})
export default connect(null,mapDispatchToProps)(Section);