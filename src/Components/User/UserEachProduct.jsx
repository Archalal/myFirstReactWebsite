import React, { useEffect, useState } from "react";
import { getSingleProduct, getUserSingleProducts, updateUserCart } from "../../Services/AllAPI";
import { useNavigate } from "react-router-dom";
// import HeaderForRole from "../../Pages/HeaderForRole";
import HeaderForUser from "./HeaderForUser";

const UserEachProduct = () => {
  const [UProducts, setUProducts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProducts();
  }, []);

  const getSingleProducts = async () => {
    try {
      const getID = sessionStorage.getItem("IdItem");
      const apiResponse = await getSingleProduct(getID);
      setUProducts(apiResponse.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const cartProducts = async () => {
    const userId = sessionStorage.getItem("roleId");

    try {
      const userResponse = await getUserSingleProducts(userId);
      const userData = userResponse.data;

    
      userData.userCart.push(UProducts);

     
      await updateUserCart(userId, userData);

     
      navigate(`/${userId}/cart`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };
  const buynow=()=>{
    alert("Your order has been placed ")
    navigate('/productView')

  }


  return (
   <div>
    <HeaderForUser/>
     <div className="container my-2">
      <div className="row gx-4 gx-lg-5 align-items-center">
        
        <div className="col-md-6">
          <img
            className="img-fluid rounded"
            src={UProducts.image }
            alt="Product"
            style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
          />
        </div>

     
       
        <div className="col-md-6">
        
          <h1 className=" fs-3 fw-bold">{UProducts.name}</h1>
          <div className="fs-3 mb-4">
            <span className="text-decoration-line-through me-2"><i className="fa-solid fa-indian-rupee-sign"></i>45.00</span>
            <span className="text-danger"><i className="fa-solid fa-indian-rupee-sign"></i>{UProducts.price}</span>
          </div>
          <p className="lead mb-4">{UProducts.description}</p>

         
          <div className="d-flex align-items-center gap-3">
            
            <button
              className="btn btn-dark btn-lg flex-shrink-0"
              onClick={() => cartProducts()}
            >
              <i className="bi-cart-fill me-1"></i>
              Add to Cart
            </button>
            <button
              className="btn btn-outline-dark btn-lg flex-shrink-0"
              onClick={buynow}
            
            >
              <i className="bi-cart-fill me-1"></i>
                Buy Now
            </button>
          
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default UserEachProduct;