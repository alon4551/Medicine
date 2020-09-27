import React, { Component } from 'react';
import { createMedicineDocument, GetMedicines } from '../../firebase';
import { Refresh,updateMed } from '../../Redux/Medicine/medicine.actions';
import Edit from '../../Components/EditMed';
import { connect } from 'react-redux';
import './add.scss';
import Preview from '../../Components/Preview';
class Add extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit= async()=>{
        createMedicineDocument(this.props.Med);
        this.props.refresh(await GetMedicines());
        alert('Item add');
        this.props.restore({
            genericName: '',
            commercialName: '',
            behavior: '',
            effects: [],
            contraindications: [],
            treatment: [],
            addValue:''})
        this.props.history.push('/');
    }
    render() {
        const {onSubmit} =this;
        return (
                <div className="box"> 
                <h1>Add a Medicine:</h1>
            <div className="display">
                    <Edit/>
                    <Preview/>
                </div>
                <button className="submit" onClick={onSubmit}>Submit</button>
            </div>
        )
    }
}
const mapStateToProps = ({ Medicine: { Med } }) => ({
    Med
})
const mapDispatchToProps = dispatch => ({
    refresh: (data) => dispatch(Refresh(data)),
    restore:item=>dispatch(updateMed(item))
})
export default connect(mapStateToProps, mapDispatchToProps)(Add);