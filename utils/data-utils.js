export const replaceMongoIdArray =(arry)=>{
    const mappedArray = arry.map((item)=>{
        return {
            id:item._id.toString(),
            ...item
        }
    }).map(({_id, ...rest})=>rest)
    return mappedArray
}

export const replaceMongoIdObject =(obj)=>{
    const {_id, ...updatedObj} ={...obj, id:obj._id.toString()}
    return updatedObj
}


export const isDateInBetween= (date, start, end)=>{
    return (new Date(date).getTime() >= new Date(start).getTime() && new Date(date).getTime() <= new Date(end).getTime())
}

export const getDayDifference = (from, to) =>{
    return ((new Date(to).getTime() - new Date(from).getTime())/ (24 * 60 * 60 *1000)) + 1 
}