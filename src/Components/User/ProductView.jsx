import React, { useEffect, useState } from 'react';
import { userProductView } from '../../Services/AllAPI';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HeaderForRole from '../../Pages/HeaderForRole';
import { useNavigate } from 'react-router-dom';

const ProductView = () => {
  const [productV, setProductV] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productsView();
  }, []);

  const productsView = async () => {
    try {
      const apiResponse = await userProductView();
      setProductV(apiResponse.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const userEachProductViews = (id) => {
    sessionStorage.setItem("IdItem", id);
    navigate(`/${id}/usereachproduct`);
  };

  return (
    <div>
      <HeaderForRole />
      <div className="container mt-4">
        <div className="row g-4">
          {productV.map((product, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image } 
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="light"
                      onClick={() => userEachProductViews(product.id)}
                      className="btn btn-outline-primary"
                    >
                      View
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;