import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { productAdded, displayProducts,deleteSingleProd } from "../../Services/AllAPI";
import HeaderForRole from "../../Pages/HeaderForRole";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [productdisplayed, setProductDisplayed] = useState([]);
  const [products, setProducts] = useState({
    name: "",
    description: "",
    size: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    displayProductsAll();
  }, [products]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productSave = async () => {
    if (products.name && products.description && products.size && products.price && products.image) {
      try {
        await productAdded(products);
        setShow(false);
        setError(false);
        setProducts({ name: "", description: "", size: "", price: "", image: "" }); // Clear form
      } catch (err) {
        console.log(err);
      }
    } else {
      setError(true);
    }
  };

  const displayProductsAll = async () => {
    try {
      const apiResponse = await displayProducts();
      if (apiResponse.status >= 200 && apiResponse.status <= 300) {
        setProductDisplayed(apiResponse.data);
      }
    } catch (err) {
      console.log("Error occurred while displaying products:", err);
    }
  };

  const viewEachProducts = (id) => {
    sessionStorage.setItem("idGet", id);
    navigate(`/${id}/eachproductview`);
  };
  const delSingleProduct=(id)=>{
    displayProductsAll()
    deleteSingleProd(id)
    displayProductsAll()
  
  }

  return (
    <div>
      <HeaderForRole />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>Add New Product Details</h2>
          <Button
            onClick={handleShow}
            variant="dark"
            style={{ borderRadius: "50%", width: "40px", height: "40px", padding: "0" }}
          >
            <i className="fa-solid fa-plus"></i>
          </Button>
        </div>

       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product name"
                  value={products.name}
                  onChange={(e) => setProducts({ ...products, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter product description"
                  value={products.description}
                  onChange={(e) => setProducts({ ...products, description: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Size</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product size (e.g., XS, S)"
                  value={products.size}
                  onChange={(e) => setProducts({ ...products, size: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter product price"
                  value={products.price}
                  onChange={(e) => setProducts({ ...products, price: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter image URL"
                  value={products.image}
                  onChange={(e) => setProducts({ ...products, image: e.target.value })}
                />
              </Form.Group>
              {error && <p className="text-danger">Please fill in all fields.</p>}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={productSave}>
              Add Product
            </Button>
          </Modal.Footer>
        </Modal>

        
        <div className="row g-4">
          {productdisplayed.map((product, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={product.image } 
                  style={{ height: "500px", objectFit: "cover" }} 
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="light" onClick={() => viewEachProducts(product.id)}>
                      <i className="fa-solid fa-eye"></i> View
                    </Button>
                    <Button variant="light"
                    onClick={()=>delSingleProduct(product.id)}>
                      <i className="fa-solid fa-trash text-danger"></i>
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

export default ProductAdd;