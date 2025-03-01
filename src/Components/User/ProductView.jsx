import React, { useEffect, useState } from 'react'
import { userProductView } from '../../Services/AllAPI'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HeaderForRole from '../../Pages/HeaderForRole';
import { useNavigate } from 'react-router-dom';


const ProductView = () => {
    useEffect(()=>{
        productsView()
    },[])
    const navigate=useNavigate()

    const[productV,setProductV]=useState([])

    const productsView=async()=>{
        let apiResponse=await userProductView()
        setProductV(apiResponse.data)
    }
    console.log(productV);
    
    const userEachProductViews=(id)=>{
      console.log(id);
      sessionStorage.setItem("IdItem",id)
      navigate(`/${id}/usereachproduct`)
      

    }

  return (
    <div>
        <div>
            <HeaderForRole/>
        </div>
        <div className="d-flex  flex-wrap">
       {
          productV.map((a,index)=>(
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
              <button onClick={()=>userEachProductViews(a.id)}>View</button>
            </Card.Body>
          </Card>
         
            </div>
      

          ))
        }
       </div>
      
    </div>
  )
}

export default ProductView
