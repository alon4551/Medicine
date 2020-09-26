import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Collection from "../Collection";

import './medicine.scss';
class Medicine extends Component {
    constructor(props){
        super(props);
        this.state={
            category:0
        }
    }
    componentDidMount(){

    }
    render() {
        const {medicines,match}=this.props; 
        const {category}=this.state;
        if(medicines===null)
            return <div>404 not found</div>
        const Med=medicines.find((item,index)=>index==match.params.medId);
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
        </div>);
    }
}

const mapStateToProps=({Medicine:{medicines}})=>({
    medicines
})

export default withRouter(connect(mapStateToProps)(Medicine));