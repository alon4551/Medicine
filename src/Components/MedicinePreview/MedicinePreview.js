import React from 'react';
import './MedicinePreview.scss';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {ClearFilter} from '../../Redux/Medicine/medicine.actions';
import { ReactComponent as Icon} from '../../assets/icon.svg';
const Preview =({genericName,commercialName,right,id,history,match,clear} )=>{
    return (
    <div className={`container ${right?'right':''}`}
        onClick={()=>{
            clear();
            history.push(`${match.path}/${id}`)}}
    >
      
        <Icon className="iconing"/>
        <div className="name">
            {genericName}
        </div>
        <div className="name">
            {commercialName}
        </div>
    </div>);
}
const mapDispatchToProps=dispatch=>({
clear:()=>dispatch(ClearFilter())
})
export default withRouter(connect(null,mapDispatchToProps)(Preview));