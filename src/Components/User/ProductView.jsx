import React, { useEffect, useState } from 'react';
import { userProductView } from '../../Services/AllAPI';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import HeaderForUser from './HeaderForUser';

const ProductView = () => {
  const [productV, setProductV] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
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

  const handleSearch = (event) => {
    event.preventDefault();
    
  };

  const userEachProductViews = (id) => {
    sessionStorage.setItem("IdItem", id);
    navigate(`/${id}/usereachproduct`);
  };

 
  const filteredProducts = productV.filter((product) =>
    product.name.toLowerCase().includes(searchvalue.toLowerCase())
  );

  return (
    <div>
      <HeaderForUser
        searchvalue={searchvalue}
        setSearchvalue={setSearchvalue}
        handleSearch={handleSearch}
      />
      <div className="container mt-4">
        <div className="row g-4">
          {filteredProducts.map((product, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="flex-grow-1">{product.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button
                      variant="light"
                      onClick={() => userEachProductViews(product.id)}
                      className="btn btn-outline-dark"
                    >
                      <i className="fa-solid fa-eye"></i>
                      <span className="ms-1">View</span>
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