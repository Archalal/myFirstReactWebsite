import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { productAdded,displayProducts } from "../../Services/AllAPI";
import Card from 'react-bootstrap/Card';
import HeaderForRole from "../../Pages/HeaderForRole";
import { useNavigate } from "react-router-dom";




const ProductAdd = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[error,setError]=useState(false);
    const[productdisplayed,setProductDisplayed]=useState([])



  const [products, setProducts] = useState({
    name: "",
    description: "",
    size: "",
    price: "",
    image: "",
  });
  // console.log(products);

  useEffect(()=>{
    displayProductsAll()

  },[products])


  const productSave=async()=>{
    // productAdded(products)
    if(products.name && products.description&& products.size&&products.price&&products.image){
        try{
            productAdded(products)
            setShow(false)
            setError(false)
        }
        catch(err){
            console.log(err);
            
        }
        
    }
    else{
      
        setError(true)
    }
    

  }
  const displayProductsAll=async()=>{
    let apiResponse=await displayProducts();
    // console.log(apiResponse);
    if(apiResponse.status>=200 && apiResponse.status<=300){
      try{
        setProductDisplayed(apiResponse.data)
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      console.log("error occurred while displaying products");
      
    }
    
   
    
  }
  console.log(productdisplayed);
  const navigate=useNavigate()

  const viewEachProducts=(id)=>{
    console.log(id,"hello");
    sessionStorage.setItem("idGet",id)
    navigate(`/${id}/eachproductview`)
    

  }
  
  
  
  
  
  return (
    

    
    <div>
      <div>
      <HeaderForRole/>
      </div>
         <div>
            <span style={{fontSize:"25px",fontWeight:"bold"}}>Add new Product Details</span>
            <button   onClick={handleShow} className='p-2 rounded-circle ' style={{marginLeft:"10px"}}><i className="fa-solid fa-plus"></i></button>
    
        </div>
      <div>
       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new Product Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            

          <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder=""
o
        onChange={((e)=>{
            setProducts({...products,name:e.target.value})
        })}
          
          
        />
        <label htmlFor="floatingInputCustom"> Product name</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder=""
        onChange={((e)=>{
            setProducts({
                ...products,description:e.target.value
            })
        })}
        />
        <label htmlFor="floatingInputCustom">Description of the Product</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder=""
          onChange={((e)=>{
            setProducts({
                ...products,size:e.target.value
            })
        })}
        
        />
     
        <label htmlFor="floatingInputCustom">Size of the Product(eg:xs,s)</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder=""
          onChange={((e)=>{
            setProducts({
                ...products,price:e.target.value
            })
        })}
        />
        <label htmlFor="floatingInputCustom">Price of the Product</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder=""
          onChange={((e)=>{
            setProducts({
                ...products,image:e.target.value
            })
        })}
        />
        <label htmlFor="floatingInputCustom">Image</label>
      </Form.Floating>
      <div style={{color:"red",textAlign:"center"}}>
            {
            error?"fill the form":""
        }
        </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={productSave}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
        <div>

        </div>

       <div className="d-flex  flex-wrap">
       {
          productdisplayed.map((a,index)=>(
            <div key={index} >
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={a.image} />
            <Card.Body>
              <Card.Title>{a.name}</Card.Title>
              <Card.Text>
               {a.description}
              </Card.Text>
              <Button variant="light"
                className="btn"
                style={{ backgroundColor: "transparent", border: "none", padding: "0" }}
              ><i className="fa-solid fa-trash text-danger"></i></Button>
            <Button variant="light" onClick={()=>viewEachProducts(a.id)}
                className="btn"> View</Button>
            </Card.Body>
          </Card>
         
            </div>
      

          ))
        }
       </div>

    
    </div>
  );
};

export default ProductAdd;
