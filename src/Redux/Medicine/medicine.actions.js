import Types from './medicine.types';

export const getMedicines=()=>({
    type:Types.GET_ALL
})
export const Filter=()=>({
    type:Types.FILTER
})
export const AddItem=(data)=>({
    type:Types.ADD,
    payload:data
})
export const Refresh=(data)=>({
    type:Types.REFRESH,
    payload:data
})
export const ClearFilter=()=>({
    type:Types.CLEAR
})
export const changeGeneric=(value)=>({
    type:Types.GENERIC,
    payload:value
})
export const changeCommecial=(value)=>({
    type:Types.COMMERCIAL,
    payload:value
})
export const removeValue=(id,value)=>({
    type:Types.REMOVE_VALUE,
    payload:{id,value}
})
export const addValue=(id,value)=>({
    type:Types.ADD_VALUE,
    payload:{id,value}
})
export const changeValue=(id,value)=>({
type:Types.CHANGE,
payload:{id,value}
})
export const removeItem=(id)=>({
    type:Types.REMOVE,
    payload:id
})