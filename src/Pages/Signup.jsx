import React, { useEffect, useState } from 'react';
import { addPersonData, getPersonData } from '../Services/AllAPI';
import { useNavigate } from 'react-router-dom';
import Header from './Header'

const Signup = () => {
  const [personData, setPersonData] = useState({
    role: "user", 
    username: "",
    password: "",
    confirmpassword: ""
  });
  
  

  useEffect(() => {
    getpersonDatas();
  }, []);

  const [passwordError, setPasswordError] = useState(false);
  const [getpersonDetails, setgetPersonDetails] = useState([]);
  const navigate = useNavigate();
  console.log(getpersonDetails);

  const signup = async () => {
    const payload = {
      userDetails: personData,
      userCart: [
      ]
    };
    if (personData.username && personData.password && personData.confirmpassword) {
      if (personData.password === personData.confirmpassword) {
        try {
          await addPersonData(payload);
          setPasswordError(false);
          navigate('/login');
          alert("Signup successful!");
        } catch (err) {
          console.log(err);
          alert("An error occurred during signup.");
        }
      } else {
        setPasswordError(true);
      }
    } else {
      alert("Please fill out the form");
    }
  };

  const getpersonDatas = async () => {
    try {
      const apiResponse = await getPersonData();
      console.log(apiResponse.data);
      setgetPersonDetails(apiResponse.data[0]);
    } catch (err) {
      console.log("An error occurred", err);
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
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
              height: '590px',
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
                src="https://images.pexels.com/photos/19556876/pexels-photo-19556876/free-photo-of-brunette-in-elegant-embroidered-khaddar-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              <h2 style={{ marginBottom: '10px', color: '#333' }}>Welcome</h2>
              <p style={{ marginBottom: '20px', color: '#666' }}>
                Please fill the below fields!
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
                  value={personData.role}
                    
                    onChange={(e) => {
                        setPersonData({
                          ...personData,
                          role: e.target.value
                        });
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
                    style={{ display: 'block', marginBottom: '5px', color: '#333' }}
                  >
                    Username
                  </label>
                  <input
                    onChange={(e) => {
                      setPersonData({
                        ...personData,
                        username: e.target.value,
                      });
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
                    style={{ display: 'block', marginBottom: '5px', color: '#333' }}
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPersonData({
                        ...personData,
                        password: e.target.value,
                      });
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

              
                <div style={{ marginBottom: '20px' }}>
                  <label
                    style={{ display: 'block', marginBottom: '5px', color: '#333' }}
                  >
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPersonData({
                        ...personData,
                        confirmpassword: e.target.value,
                      });
                    }}
                    type="password"
                    id="confirmpassword"
                    placeholder="Confirm your password"
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px',
                    }}
                  />
                </div>

              
                {passwordError && (
                  <div style={{ color: 'red', marginBottom: '10px', fontSize: '14px' }}>
                    Passwords doesn't  match!
                  </div>
                )}

               
                <button
                  onClick={signup}
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
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;