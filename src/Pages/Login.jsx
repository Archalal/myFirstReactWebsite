import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getPersonData } from '../Services/AllAPI';
import Header from './Header'



const Login = () => {
    const[userData,setUserData]=useState([])
    useEffect(()=>{
        displayUserData()
    
    },[])
    console.log(userData);
   const navigate=useNavigate()

    const[userName,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[role,setRole]=useState("admin")
    // console.log(userName);
    // console.log(password);
    console.log("hello",userData);
    console.log("bye",role);
    
    
    
    
    

    const displayUserData=async()=>{
        const apiResponse= await getPersonData()
        console.log(apiResponse.data);
        setUserData(apiResponse.data)
        
        
    }
    const loginUp=()=>{
     if(userName && password && role){
      const findUser=userData.find((a)=>{
        return a.userDetails.username===userName.toLowerCase() && a.userDetails.password===password && a.userDetails.role==role
      })
      console.log(findUser);
      if(findUser){
        sessionStorage.setItem("roleId",findUser.id)
        if(findUser.userDetails.role=="admin"  ){
          navigate('/product')
        
          
  
        }else if(findUser.userDetails.role=="user"){
          navigate('/productView')
        }
        else{
          alert("incorrect username or incorrect password")
          
        }
       
      }
      else{
        alert("User/Admin not found incorrect inputs")
      }
      
      
     }
     else{
      alert("fill the form")
     }

    }
  return (
   <div>
    {/* <div>
      <Header />
    </div> */}
     <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#f4f4f4',
      }}
    >
      <div className="mainContainer">
        <div
          className="row"
          style={{
            height: '570px',
            width: '900px',
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
        
          <div
            className="col-6"
            style={{
              flex: 1,
            }}
          >
            <img
              style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
              src="https://images.pexels.com/photos/19401639/pexels-photo-19401639/free-photo-of-model-in-a-red-embroidered-blouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>

         
          <div
            className="col-6"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <h2 style={{ marginBottom: '10px', color: '#333' }}>Welcome Back!</h2>
            <p style={{ marginBottom: '20px', color: '#666' }}>
              Please log in to your account
            </p>

           
            <form
              style={{
                width: '100%',
                maxWidth: '300px',
              }}
            >
              <div style={{ marginBottom: '15px' }}>
                  <label
                    style={{ display: 'block', marginBottom: '5px', color: '#333' }}
                  >
                    Select Role
                  </label>
                  <select
                  value={role}

                    onChange={(e)=>{
                      setRole(e.target.value)
                    }}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                    }}
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
            
              <div style={{ marginBottom: '15px' }}>
                <label
                  htmlFor="username"
                  style={{ display: 'block', marginBottom: '5px', color: '#333' }}
                >
                  Username
                </label>
                <input
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px',
                  }}
                />
              </div>

             
              <div style={{ marginBottom: '20px' }}>
                <label
                  htmlFor="password"
                  style={{ display: 'block', marginBottom: '5px', color: '#333' }}
                >
                  Password
                </label>
                <input
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px',
                  }}
                />
              </div>

              
              <button
              onClick={loginUp}
                type="button"
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#00796b',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  marginBottom: '10px', 
                }}
              >
                Login
              </button>
            </form>

           
            <p style={{ marginBottom: '10px', color: '#666' }}>
              Don't have an account?
            </p>
            <Link to="/signup">
            <button
              style={{
                width: '100%',
                maxWidth: '300px',
                padding: '10px',
                backgroundColor: '#ffffff',
                color: '#00796b',
                border: '1px solid #00796b',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              Sign Up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Login;