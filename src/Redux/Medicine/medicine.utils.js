import medicine from "../../Components/Medicine/medicine";

export const Filter_by_Name=({medicines,generic,commercial})=>{
    if(medicines===null)
    return [];  
    if(generic===''&&commercial==='')
        return medicines;
    return medicines.filter(
        med=>(med.genericName.includes(generic)) || (med.commercialName.includes(commercial))
        
    )
}