import React from 'react';
import Section from '../Section';
import PreviewItem from '../Item_Preview';
import {removeValue} from '../../Redux/Medicine/medicine.actions';
import { connect } from 'react-redux';
import './Preview.scss'
const Preview = ({remove, Med: { genericName, commercialName, behavior, effects, contraindications, treatment } }) => {
    const onDelete=(id,value)=>{
        remove(id, value);
    }
    
    return (<div>
        <PreviewItem name='Generic Name' value={genericName} />
        <PreviewItem name='Commercail Name' value={commercialName} />
        <PreviewItem name='Behavior' value={behavior} />
        <div className="section">
            <h2>Effects</h2>
            <div className="collection">

                {effects.map(name =>
                    <div className="item_name">
                        <h2>{name}</h2>
                        <button onClick={() => onDelete('effects', name)}>X</button>
                    </div>)}
            </div>
        </div>
        <div className="section">
            <h2>Contraindications</h2>
            <div className="collection">

                {contraindications.map(name =>
                    <div className="item_name">
                        <h2>{name}</h2>
                        <button onClick={() => onDelete('contraindications', name)}>X</button>
                    </div>)}
            </div>
        </div>
        <div className="section">
            <h2>Treatment</h2>
            <div className="collection">

                {treatment.map(name =>
                    <div className="item_name">
                        <h2>{name}</h2>
                        <button onClick={() => onDelete('treatment', name)}>X</button>
                    </div>)}
            </div>
        </div>  </div>);
}
const mapStateToProps = ({ Medicine: { Med } }) => ({
    Med
});
const mapDispatchToProps=dispacth=>({
    remove:(id,value)=>dispacth(removeValue(id,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(Preview);