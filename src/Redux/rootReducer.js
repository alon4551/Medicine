import {combineReducers} from 'redux';
import {medicineReducer} from './Medicine/medicine.reducer';

export const rootReducer=combineReducers({
Medicine:medicineReducer
});
