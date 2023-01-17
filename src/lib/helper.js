// getting all the data

export const getAlldata=async()=>{
   try {
        const res= await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`);
        const data= await res.json();
        return data;
   } catch (error) {
        return error;
   }
}

// setiing text serach by any field.

export const freeTextSerach =(data,query)=>{
    let result=[];
    for(let i=0 ; i<data.length;i++){
        if( data[i].name=== query){
            result.push(data[i])
        }else if( data[i].color=== query){
            result.push(data[i])
        }else if(data[i].type===query){
            result.push(data[i])
        }else if(data[i].name.split(" ").length>1){
            if(data[i].name.split(" ")[0]===query){
                result.push(data[i])
            }else if(data[i].name.split(" ")[1]===query){
                result.push(data[i])
            }
        }
    }
    return result;
}