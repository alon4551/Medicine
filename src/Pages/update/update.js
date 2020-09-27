import React from 'react';
import {updateMed} from '../../Redux/Medicine/medicine.actions';
import { updateMedicine } from '../../firebase';
import Edit from '../../Components/EditMed';
import Preview from '../../Components/Preview';
import { connect } from 'react-redux';
import './update.scss';
const Update =  ({ Med ,update,history,restore}) => {
    const onUpdate=async ()=>{
        await updateMedicine(Med);
        history.push('/');
        restore({
            genericName: '',
            commercialName: '',
            behavior: '',
            effects: [],
            contraindications: [],
            treatment: [],
            addValue:''});
    }
    return (<div className="box">
        <h1>Update Medicine:</h1>
        <div className="display">
            <Edit />
            <Preview />
        </div>
        <button className="submit" onClick={onUpdate}>Update</button>
    </div>);
};
const mapStateToProps = ({ Medicine: { Med } }) => ({
    Med
});
const mapDispatchToProps = dispatch => ({
    restore:item=>dispatch(updateMed(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Update);