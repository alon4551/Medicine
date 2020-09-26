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
        default:
            return state;
        
    }
}