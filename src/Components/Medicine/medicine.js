import React, { Component } from 'react';
import {DeleteMedicine} from '../../firebase';
import {connect} from 'react-redux';
import{removeItem,Filter} from '../../Redux/Medicine/medicine.actions';
import {withRouter} from 'react-router-dom';
import Collection from "../Collection";

import './medicine.scss';
class Medicine extends Component {
    constructor(props){
        super(props);
        this.myRef=React.createRef();
        this.state={
            category:0
        }
    }
     onDelete=async ()=>{
        const {match:{params:{medId}},history,medicines,remove,filter}=this.props;
        if(window.confirm('Are you sure you want to delete')){
            await DeleteMedicine(medId);
            history.push('/');
            remove(medId);
            filter();
        }
    }
    render() {
        const {medicines,match}=this.props; 
        const {category}=this.state;
        const {onDelete}=this;
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
                {behavior}
                
            </div>
            
            <div className="categories">
                <label onClick={()=>this.setState({category:0})}>Effects</label>
                <label onClick={()=>this.setState({category:1})}>Contraindications</label>
                <label onClick={()=>this.setState({category:2})}>Treatments</label>
            </div>
                {category===0?
                  <Collection list={effects}/>:
                   category===1?
                   <Collection list={contraindications}/>:
                   <Collection list={treatment}/>

                }  
                 <button className="delete" onClick={onDelete}>Delete</button>       
        </div>);
    }
}

const mapStateToProps=({Medicine:{medicines}})=>({
    medicines
})
const mapDispatchToProps=dispatch=>({
    remove:id=>dispatch(removeItem(id)),
    filter:()=>dispatch(Filter())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Medicine));