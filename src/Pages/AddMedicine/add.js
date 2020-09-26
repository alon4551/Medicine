import React, {Component} from 'react';
import Input from '../../Components/Input';
import {createMedicineDocument,GetMedicines} from '../../firebase';
import { Refresh,Filter} from '../../Redux/Medicine/medicine.actions';
import Preview from '../../Components/Item_Preview';
import Item from '../../Components/CategoryItem';
import {connect}from 'react-redux';

import './add.scss';
class Add extends Component{
    constructor(props){
        super(props);
        this.myRef=React.createRef();
        this.state={
            genericName:'',
            commercialName:'',
            behavior:'',
            effects:[],
            contraindications:[],
            treatment:[],
            addValue:''
        }
    }
    onChange=({target:{value,id}})=>{
        this.setState({[id]:value});
    }
    onAdd=({target:{id}}) =>{
        const {addValue,effects,contraindications,treatment}=this.state;
        const inputs=document.querySelectorAll('.addValue');
        inputs.forEach(element => {
            element.value=""
        });
        switch(id){
            case 'effects':{
                effects.push(addValue);
                break;
            }
            case 'contraindications':{
                contraindications.push(addValue);
                break;
            }
            case 'treatment':{
                treatment.push(addValue);
                break;
            }
        }
        this.setState({
            effects,contraindications,treatment,addValue:''
        })
    }
    onDelete=(id,collection,name)=>{
        this.setState({
            [id]:collection.filter(title=>title!==name)
        })
    }
    onSubmit= async()=>{
        const {genericName,
        commercialName,
        behavior,
        effects,
        contraindications,
        treatment}=this.state;
        const obj={genericName,
            commercialName,
            behavior,
            effects,
            contraindications,
            treatment};
        createMedicineDocument(obj);
        this.props.Refresh(await GetMedicines())

    }
    render(){
        const {onChange,onAdd,onSubmit,onDelete}=this;
        const {genericName,
            commercialName,
            behavior,
            effects,
            contraindications,
            treatment}=this.state;
        return(
        <div className="display">
            <div className="form">
            <Input name="Generic Name" action={onChange} type="text" id="genericName"/>
            <Input name="Commercail Name" action={onChange} type="text" id="commercialName"/>
            <Input name="Behavior" action={onChange} type="text" id="behavior"/>
            <Input name="Effect" action={onChange} temp="addValue" type="text" id="addValue"/>
            <button id="effects" onClick={onAdd}>Add</button>
            <Input name="Contraindications" action={onChange} type="text" temp="addValue" id="addValue"/>
            <button id="contraindications" onClick={onAdd}>Add</button>
            <Input name="Treatment" temp="addValue" action={onChange} type="text" id="addValue"/>
            <button id="treatment" onClick={onAdd}>Add</button><br/>
            <button className="submit" onClick={onSubmit}>Submit</button>
            </div>
            <div>
                <Preview name='Generic Name' value={genericName}/>
                <Preview name='Commercail Name' value={commercialName}/>
                <Preview name='Behavior' value={behavior}/>
                <div className="section">

                <h2>Effects</h2>
                <div className="collection">
                    
                    {effects.map(name=><div className="item_name">
                            <h2>{name}</h2>
                            <button onClick={()=>onDelete('effects',effects,name)}>X</button>
                    </div>)}
                </div>
                </div>
                <div className="section">

                    <h2>Contraindications</h2>
                <div className="collection">
                    {contraindications.map(name=><div className="item_name">
                            <h2>{name}</h2>
                            <button onClick={()=>onDelete('contraindications',contraindications,name)}>X</button>
                    </div>)}
                </div>
                <div>
                </div>
                </div>
                <div className='section'>
                    <h2>Treatment</h2>
                    <div className="collection">

                    {treatment.map(name=><div className="item_name">
                            <h2>{name}</h2>
                            <button onClick={()=>onDelete('treatment',treatment,name)}>X</button>
                    </div>)}
                    </div>
                
                </div>

            </div>
        </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    Refresh:(data)=>dispatch(Refresh(data))
})
export default connect(null,mapDispatchToProps)(Add);