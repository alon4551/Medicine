import React, { Component } from 'react';
import Input from '../../Components/Input';
import { createMedicineDocument, GetMedicines } from '../../firebase';
import { Refresh, Filter, changeValue, addValue, removeValue } from '../../Redux/Medicine/medicine.actions';
import Preview from '../../Components/Item_Preview';
import Item from '../../Components/CategoryItem';
import { connect } from 'react-redux';

import './add.scss';
class Add extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            addValue: ''
        }
    }
    onChange = ({ target: { value, id } }) => {
        this.props.Change(id, value);
    }
    onAdd = ({ target: { id } }) => {
        this.props.add(id, this.props.Med.addValue)
    }
    onDelete = (id, value) => {
        this.props.remove(id, value);
    }
    onSubmit = async () => {
        createMedicineDocument(this.props.Med);
        this.props.Refresh(await GetMedicines())

    }
    render() {
        const { onChange, onAdd, onSubmit, onDelete } = this;
        const { genericName,
            commercialName,
            behavior,
            effects,
            contraindications,
            treatment } = this.props.Med;
        return (
            <div className="display">
                <div className="form">
                    <Input name="Generic Name" action={onChange} type="text" id="genericName" />
                    <Input name="Commercail Name" action={onChange} type="text" id="commercialName" />
                    <Input name="Behavior" action={onChange} type="text" id="behavior" />
                    <div>
                        <div>
                            <label>Effect</label>
                            <button id="effects" onClick={onAdd}>Add</button>
                        </div>
                        <div>
                            <label>Contraindications</label>
                            <button id="contraindications" onClick={onAdd}>Add</button>
                        </div>
                        <div>
                            <label>Treatment</label>
                            <button id="treatment" onClick={onAdd}>Add</button><br />
                        </div>
                        <Input name="Add Value" temp="addValue" action={onChange} type="text" id="addValue" />
                    </div>
                    <button className="submit" onClick={onSubmit}>Submit</button>
                </div>
                <div>
                    <Preview name='Generic Name' value={genericName} />
                    <Preview name='Commercail Name' value={commercialName} />
                    <Preview name='Behavior' value={behavior} />
                    <div className="section">

                        <h2>Effects</h2>
                        <div className="collection">

                            {effects.map(name => <div className="item_name">
                                <h2>{name}</h2>
                                <button onClick={() => onDelete('effects', name)}>X</button>
                            </div>)}
                        </div>
                    </div>
                    <div className="section">

                        <h2>Contraindications</h2>
                        <div className="collection">
                            {contraindications.map(name => <div className="item_name">
                                <h2>{name}</h2>
                                <button onClick={() => onDelete('contraindications', name)}>X</button>
                            </div>)}
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className='section'>
                        <h2>Treatment</h2>
                        <div className="collection">

                            {treatment.map(name => <div className="item_name">
                                <h2>{name}</h2>
                                <button onClick={() => onDelete('treatment', name)}>X</button>
                            </div>)}
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ Medicine: { Med } }) => ({
    Med
})
const mapDispatchToProps = dispatch => ({
    Refresh: (data) => dispatch(Refresh(data)),
    Change: (id, value) => dispatch(changeValue(id, value)),
    add: (id, value) => dispatch(addValue(id, value)),
    remove: (id, value) => dispatch(removeValue(id, value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Add);