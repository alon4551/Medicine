import React from 'react';
import Input from '../Input';
import {createMedicineDocument,GetMedicines}from '../../firebase';
import {changeValue,addValue,Refresh} from '../../Redux/Medicine/medicine.actions'
import './Edit.scss';
import {connect} from 'react-redux';

const Edit=({Change,add,Refresh,Med:{addValue}})=>{
const onChange=({ target: { value, id } })=>{
    Change(id, value);
}
const onAdd=({ target: { id } })=>{
    add(id,addValue);
    Change('addValue','');
    window.document.getElementById("addValue").value='';
}

return (
<div className="form">
                    <Input name="Generic Name" action={onChange} type="text" id="genericName" />
                    <Input name="Commercail Name" action={onChange} type="text" id="commercialName" />
                    <Input name="Behavior" action={onChange} type="text" id="behavior" />
                    <div className="con" >
                        <div className="sec">
                            <label>Effect</label>
                            <button id="effects" onClick={onAdd}>Add</button>
                        </div>
                        <div className="sec">
                            <label>Contraindications</label>
                            <button id="contraindications" onClick={onAdd}>Add</button>
                        </div>
                        <div className="sec">
                            <label>Treatment</label>
                            <button id="treatment" onClick={onAdd}>Add</button>
                        </div>
                        <div>

                        <Input name="Add Value" temp="addValue" action={onChange} type="text" id="addValue" />
                        </div>
                    </div>
                </div>);
}
const mapStateToProps = ({ Medicine: { Med } }) => ({
    Med
})
const mapDispatchToProps = dispatch => ({
    Change: (id, value) => dispatch(changeValue(id, value)),
    add: (id, value) => dispatch(addValue(id, value)),
    Refresh: (data) => dispatch(Refresh(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Edit);
