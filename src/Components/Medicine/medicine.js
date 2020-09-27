import React, { Component } from 'react';
import {DeleteMedicine} from '../../firebase';
import {connect} from 'react-redux';
import{removeItem,Filter,updateMed} from '../../Redux/Medicine/medicine.actions';
import {withRouter} from 'react-router-dom';
import Collection from "../Collection";

import './medicine.scss';
class Medicine extends Component {
    constructor(props){
        super(props);
    }
     onDelete=async ()=>{
        const {match:{params:{medId}},history,remove,filter}=this.props;
        if(window.confirm('Are you sure you want to delete')){
            await DeleteMedicine(medId);
            history.push('/');
            remove(medId);
            filter();
        }
    }
    onUpdate=()=>{
        const {medicines,match,history,update}=this.props;
        const Med=medicines.find((item)=>item.id==match.params.medId);
        update(Med);
        history.push('/update');
    }
    render() {
        const {medicines,match}=this.props; 
        const {onDelete,onUpdate}=this;
        if(medicines===null)
            return <div>404 not found</div>
        const Med=medicines.find((item)=>item.id==match.params.medId);
        const {genericName,commercialName,behavior,effects,contraindications,treatment}=Med;
        if(Med===undefined)
        return <div>404 not found</div>
        return (
            <div className="medicine">
            <div className="names">
        <label className="name">{genericName}</label>
                <label className="name">{commercialName}</label>
              
            </div>
            <div className="behavior">
            <label>Behavior:</label>
            <textarea name=">" id="" cols="30" rows="10">{behavior}</textarea>
            </div>
            
                  <Collection name="Effects" list={effects}/>
                   <Collection name="Contraindications" list={contraindications}/>
                   <Collection name="Treatments" list={treatment}/>

                <div className="options">

                 <button className="delete" onClick={onDelete}>Delete</button>
                 <button className="update" onClick={onUpdate}>Update</button>       
                </div>
        </div>);
    }
}

const mapStateToProps=({Medicine:{medicines}})=>({
    medicines
})
const mapDispatchToProps=dispatch=>({
    remove:id=>dispatch(removeItem(id)),
    filter:()=>dispatch(Filter()),
    update:item=>dispatch(updateMed(item))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Medicine));