import medicine from '../../Components/Medicine/medicine';
import INITAIL_STATE from '../../Data';
import Types from './medicine.types';
import {Filter_by_Name} from './medicine.utils';
export const medicineReducer = (state=INITAIL_STATE,action) =>{
    switch(action.type){
        case Types.GET_ALL:{
            return{
                ...state.medicines
            }
        }
        case Types.FILTER:
            return {...state, filter:Filter_by_Name(state)
            }
        case Types.REMOVE:{
                return {
                    ...state,
                   medicines:state.medicines.filter(med=>med.id!==action.payload)
                }
            }
        case Types.GENERIC:
            return {
            ...state,
            generic:action.payload.trim()
           
        }
        case Types.ADD:
            {
                const {medicines}=state;
                medicines.push(action.payload);
                return{
                    ...state,
                    medicines
                }
            }
        case Types.COMMERCIAL:
            return {
            ...state,
            commercial:action.payload.trim()
        }
        case Types.CLEAR:
        return{
            ...state,
            commercial:'',
            generic:''
        }
        case Types.REFRESH:
            return{
            ...state,
            medicines:action.payload,
            filter:action.payload
        }
        case Types.ADD_VALUE:{
            const {id,value}=action.payload;
            const {effects,contraindications,treatment}=state.Med;
            switch(id){
                case 'effects':{
                    effects.push(value);
                    break;
                }
                case 'contraindications':{
                    contraindications.push(value);
                    break;
                }
                case 'treatment':{
                    treatment.push(value);
                    break;
                }
            }
            return {
                ...state,
                Med:{
                    ...state.Med,
                    effects,
                    contraindications,
                    treatment
                }
            }
        }
        case Types.REMOVE_VALUE:{
            const {id,value}=action.payload;
            console.log(value);
            let {effects,contraindications,treatment}=state.Med;
            switch(id){
                case 'effects':{
                    effects = effects.filter(item=>item!==value);
                    break;
                }
                case 'contraindications':{
                    contraindications=contraindications.filter(item=>item!==value);
                    break;
                }
                case 'treatment':{
                    contraindications=contraindications.filter(item=>item!==value);
                    break;
                }
            }
            return {
                ...state,
                Med:{
                    ...state.Med,
                    effects,
                    contraindications,
                    treatment
                }
            }
        }
        case Types.CHANGE:{
            const {id,value}=action.payload;
            return {
                ...state,
                Med:{
                    ...state.Med,
                    [id]:value
                }
            }
        }
        default:
            return state;
        
    }
}