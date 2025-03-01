import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../../Services/AllAPI';


const EachProductView = () => {

    const[getSingleProd,setSingleProd]=useState([])

    useEffect(()=>{
        getSingleProductDetails()
    },[])

    const getSingleProductDetails= async()=>{
        try {
            let getId = sessionStorage.getItem("idGet"); 
            if (getId) {
              const apiResponse = await getSingleProduct(getId); 
              setSingleProd(apiResponse.data); 
            } else {
              console.error("No product ID found in sessionStorage");
            }
          } catch (error) {
            console.error("Error fetching product details:", error);
          }
        };
        console.log(getSingleProd);

        
    
  return (
    <div>
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img
              className="card-img-top mb-5 mb-md-0"
              src={getSingleProd.image}
              alt="Product Image"
            style={{width:"70%"}}
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">SKU: BST-498</div>
            <h1 className="display-5 fw-bolder">{getSingleProd.name}</h1>
            <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">$45.00</span>
              <span>{getSingleProd.price}</span>
            </div>
            <p className="lead">
             {getSingleProd.description}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachProductView;