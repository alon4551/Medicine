import Types from './medicine.types';

export const getMedicines=()=>({
    type:Types.GET_ALL
})
export const Filter=()=>({
    type:Types.FILTER
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