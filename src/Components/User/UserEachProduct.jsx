import React, { useEffect, useState } from "react";
import { getSingleProduct,getUserSingleProducts,updateUserCart } from "../../Services/AllAPI";
import { useNavigate } from "react-router-dom";

const UserEachProduct = () => {
  const [UProducts, setUProducts] = useState({});
  useEffect(() => {
    getSingleProducts();
  }, []);
  console.log("hello",UProducts);
  

  const navigate=useNavigate()

  const getSingleProducts = async () => {
    const getID = sessionStorage.getItem("IdItem");

    const apiResponse = await getSingleProduct(getID);
    setUProducts(apiResponse.data);

  };
  const cartProducts=async(id)=>{
    // sessionStorage.setItem("getId",id)
    // navigate(`/${id}/cart`)
    const userId = sessionStorage.getItem("roleId"); // Get the user ID from sessionStorage
    console.log(userId);
    

    try {
      // Fetch the user's data
      const userResponse = await getUserSingleProducts(userId);
      const userData = userResponse.data;
      console.log("123",userData);
      
     

      // Add the product to the user's cart
       userData.userCart.push(UProducts);

      // Update the user's data in the backend
      await updateUserCart(userId, userData);
      console.log("bye bye",userData);
      

      // Navigate to the cart page
      navigate(`/${userId}/cart`);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
    

  }
  return (
    <div>
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={UProducts.image}
              alt="Product Image"
              style={{ width: "70%" }}
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">SKU: BST-498</div>
            <h1 className="display-5 fw-bolder">{UProducts.name}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">$45.00</span>
              <span>{UProducts.price}</span>
            </div>
            <p className="lead">{UProducts.description}</p>
            <div className="d-flex">
              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="number"
                defaultValue="1"
                style={{ maxWidth: "3rem" }}
              />
              <button className="btn btn-outline-dark flex-shrink-0" type="button"
              onClick={()=>cartProducts(UProducts.id)}>
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEachProduct;
