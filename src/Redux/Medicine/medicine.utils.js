export const Filter_by_Name=({medicines,generic,commercial})=>{
    if(generic===''&&commercial==='')
        return medicines;
    return medicines.filter(
        med=>(med.genericName.includes(generic)) || (med.commercialName.includes(commercial))
        
    )
}