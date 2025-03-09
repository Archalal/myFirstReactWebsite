import React, { useEffect, useState } from 'react';
import { getSingleProduct } from '../../Services/AllAPI';
import HeaderForRole from '../../Pages/HeaderForRole';
import { Link, useNavigate } from 'react-router-dom';

const EachProductView = () => {
  const [getSingleProd, setSingleProd] = useState({});
  const navigate=useNavigate()

  useEffect(() => {
    getSingleProductDetails();
  }, []);

  const getSingleProductDetails = async () => {
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
 

  return (
   <div>
    <HeaderForRole />
     <div className="container my-5">
      <div className="row gx-4 gx-lg-5 align-items-center">
        <div className="col-md-6">
          <img
            className="img-fluid rounded"
            src={getSingleProd.image }
            alt="Product"
            style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <div className="small mb-2 text-muted"></div>
          <h1 className="display-4 fw-bold">{getSingleProd.name}</h1>
          <div className="fs-3 mb-4">
            <span className="text-decoration-line-through me-2"><i className="fa-solid fa-indian-rupee-sign"></i>45.00</span>
            <span className="text-danger"><i className="fa-solid fa-indian-rupee-sign"></i>{getSingleProd.price}</span>
          </div>
          <p className="lead mb-4">{getSingleProd.description}</p>
          <div className="d-flex gap-3">

           <div>
            <Link to={"/product"}>
            <button className="btn btn-outline-dark btn-lg" >Back</button></Link>
           </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default EachProductView;