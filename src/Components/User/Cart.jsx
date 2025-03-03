import React, { useEffect, useState } from 'react';
import { getUserSingleProducts,delCartProducts,getPersonDataCart } from '../../Services/AllAPI';
import HeaderForUser from './HeaderForUser';

const Cart = () => {
  
  const [cart, setCart] = useState([]);
  // const[error,setError]=useState(true)
 

 
  useEffect(() => {
    fetchCart();
  }, []);

  
  const fetchCart = async () => {
    try {
      const userId = sessionStorage.getItem("roleId"); 
    

    
      const response = await getUserSingleProducts(userId);
      const userData = response.data;
      console.log("ok",userData);
      

     
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

    
      const cartWithQuantity = userData.userCart.map((product) => {
        const savedProduct = savedCart.find((item) => item.id === product.id);
        console.log("poyi poyi",savedProduct);
        
        return {
          ...product,
          quantity: savedProduct ? savedProduct.quantity : 1, 
        };
      });

    //  console.log("hoii",cartWithQuantity);
     
      setCart(cartWithQuantity);
      // setError(false)
    
      localStorage.setItem('cart', JSON.stringify(cartWithQuantity));
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  
  const increaseQuantity = (index) => {
    const newCart = [...cart]; 
    newCart[index].quantity += 1; 
    setCart(newCart); 
   
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

 
  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1; 
    }
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

 
  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity; 
    });
    return total.toFixed(2);
  };

  const buyNow=async()=>{
   alert("you ordered is placed")
   const userId = sessionStorage.getItem("roleId"); 
   const UserDetailsSingle=await getPersonDataCart(userId)
  let userDetails=UserDetailsSingle.data.userDetails
  let id=UserDetailsSingle.data.id
   
   const apiResponse=await delCartProducts(userId,{id,userDetails,userCart:[]});
   console.log(apiResponse);
   fetchCart()

   
   
   
   
   
   
    
  
  }

  return (
  
    <div>
     <HeaderForUser />
      <div className="container mt-5">
        <h2 className="mb-4">Shopping Cart</h2>
        {
          cart.length==0?
          <div>
            <span className='text-danger fs-2'>Cart is empty! Add Products</span>
          </div>
          :
          <div>
                    <div className="list-group">
       
       {cart.map((product, index) => (
         <div className="list-group-item mb-3" key={index}>
           <div className="d-flex justify-content-between align-items-center">
          
             <div>
               <img
                 src={product.image}
                 alt={product.name}
                 className="img-thumbnail"
                 style={{ width: "100px", height: "100px" }}
               />
             </div>

            
             <div>
               <h5>{product.name}</h5>
               <p><i className="fa-solid fa-indian-rupee-sign"></i>{product.price}</p>
             </div>

           
             <div className="d-flex align-items-center">
               <button
                 className="btn btn-outline-secondary btn-sm"
                 onClick={() => decreaseQuantity(index)}
               >
                 -
               </button>
               <span className="mx-3">{product.quantity}</span>
               <button
                 className="btn btn-outline-secondary btn-sm"
                 onClick={() => increaseQuantity(index)}
               >
                 +
               </button>
             </div>

           <div>
               <p><i className="fa-solid fa-indian-rupee-sign"></i>{(product.price * product.quantity).toFixed(2)}</p>
             </div>
           </div>
         </div>
       ))}
     </div>
   
    
    
     <div className="text-end mt-4">
       <h4>Total: <i className="fa-solid fa-indian-rupee-sign"></i>{calculateCartTotal()}</h4>
       <button onClick={buyNow}>Buy now</button>
     </div>

          </div>
        }
      </div>
    </div>
  );
};

export default Cart;