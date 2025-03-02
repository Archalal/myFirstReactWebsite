import commonAPI from "./CommonAPI";

export  const productAdded= async(requestedBody)=>{
    return await commonAPI("post","/products",requestedBody)
}

export const displayProducts=async()=>{
    return await commonAPI("get","/products","")
}

export const addPersonData=async(requestedBody)=>{
    return await commonAPI("post","/persondata",requestedBody)
}
export const getPersonData=async()=>{
    return await commonAPI("get","/persondata","")
}

export const  userProductView=async()=>{
    return await commonAPI("get","/products","")
}

export const getSingleProduct=async(id)=>{
    return await commonAPI("get",`/products/${id}`,"")
}

export const getUserSingleProducts = async (id) => {
    return await commonAPI("get", `/persondata/${id}`, "");
  };
  
  export const updateUserCart = async (userId, requestedBody) => {
    return await commonAPI("put", `/persondata/${userId}`, requestedBody);
  };
  
  export const getCartProduct = async (id) => {
    return await commonAPI("get", `/persondata/${id}`, "");
  };
  export const getPersonDataCart=async(id)=>{
    return await commonAPI("get",`/persondata/${id}`,"")
}
  export const delCartProducts=async(id,requestedBody)=>{
    return await commonAPI("put",`/persondata/${id}`,requestedBody)
  }
  export const deleteSingleProd=async(id)=>{
    return await commonAPI("delete",`/products/${id}`,{})
  }
