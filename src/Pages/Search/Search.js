import React,{Component} from 'react';
import {connect} from 'react-redux';
import {changeGeneric,changeCommecial,Filter} from '../../Redux/Medicine/medicine.actions';
import './Search.scss';
import Input from '../../Components/Input';
import Preview from '../../Components/MedicinePreview';
class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            generic:'',
            commercial:''
        }
        this.props.filter();
    }
    onChange=({target:{value,id}})=>{
        const {generic,commercial,filter}=this.props;
        if(id==='generic')
            generic(value);
        else if(id==='commercial')
            commercial(value);
        filter();
    }
    render(){
        const {FilterMed}=this.props;
        const {onChange}=this;
        return(<div className="search">
              <div className="title">
            Medicines
        </div>
            <div className="inputs">

            <Input type="text"  id="generic" name="generic" action={onChange}/>
            <Input type="text"  id="commercial" name="commercial" action={onChange}/>
            </div>
            <br/>
            <div className="preview">
                {FilterMed.map(item=><Preview key={item.id} {...item}/>)}
            </div>
        </div>)

    }
}
const mapStateToProps=({Medicine:{medicines,filter}})=>({
Medicines:medicines,
FilterMed:filter
})
const mapDispatchToProps=dispatch=>({
    filter:()=>dispatch(Filter()),
    generic:(value)=>dispatch(changeGeneric(value)),
    commercial:(value)=>dispatch(changeCommecial(value))
})
export default connect(mapStateToProps,mapDispatchToProps)(Search);