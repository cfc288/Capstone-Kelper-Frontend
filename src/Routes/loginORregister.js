import React, { Component, useState, useEffect } from 'react'
import './App.css';
import About from './about.js';
import Check from './check.js';
import Login from './login.js';
import Main from './main.js';
import ReactModal from 'react-modal';
import Register from './register';


//import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';




let baseUrl = process.env.REACT_APP_BASEURL

function LoginOrRegister(props){
// activeUser={activeUser}  
// isLoggedIn={isLoggedIn}
// setIsLoggedIn={setIsLoggedIn}
// setActiveUser={setActiveUser}
const [isEmployeeUser, setEmployeeUser] = useState({})
const [isEmployee, setIsEmployee] = useState(false)
const [isClient, setIsClient] = useState(false)
//---------------------------------------------------
const [display, setDisplay] = useState(false)
const openModal = () => {
  setDisplay(true)
}

const closeModal =() => {
  setDisplay(false)
}
//---------------------------------------------------

useEffect (()=> {
  console.log('props.isloggedin on App.js', props.isLoggedIn)
  
})

//---------------------------------------------------
  const [newDisplay, setNewDisplay] = useState(false)
  const openNewModal = () => {
      setNewDisplay(true)
    }
    
  const closeNewModal =() => {
      setNewDisplay(false)
  }

//---------------------------------------------------
  const [aboutDisplay, setAboutDisplay] = useState(false)
  const openAboutModal = () => {
      setAboutDisplay(true)
    }
    
  const closeAboutModal =() => {
      setAboutDisplay(false)
  }
//---------------------------------------------------


 
  return (
    <div>
      
      
      <button className="about-button" onClick={openAboutModal}> About </button>
      <ReactModal isOpen={aboutDisplay}>
          <button onClick={closeAboutModal}>close about modal App.js
          </button>
          <About />
      </ReactModal>


      { !props.isLoggedIn &&
        <div className='frontAreaMainDiv'>
          <div className='insideFrontArea'>
            <div>
            <h1 className="oval"> Kelper </h1>

            <button className="loginbutton" type="submit" onClick={openModal}>
              Log In
            </button>

            </div>
            < ReactModal 
              overlayClassName='overlayLoginModal'
              isOpen={display}
              className="loginModal" 
            >
                <Login 
                setIsLoggedIn={props.setIsLoggedIn}
                activeUser={props.activeUser}
                closeModal={closeModal}
                setActiveUser={props.setActiveUser}
                />
            </ ReactModal >




            
               
                <div className='newUserDiv'>
                  <h4> 
                  New User? Click  
                    <button 
                      className="herebutton" 
                      onClick={openNewModal}>
                    here 
                    </button>   
                  to register for a new account 
                  </h4>
                </div> 
              
           
        </div >
          <ReactModal 
            isOpen={newDisplay}>
              <Register 
                activeUser={props.activeUser}
                isLoggedIn={props.isLoggedIn}
                closeNewModal={closeNewModal}
                setIsLoggedIn={props.setIsLoggedIn}
                setActiveUser={props.setActiveUser}
              />
          </ReactModal>
        </div>  
      }
    </div>
  ) 
} 

export default LoginOrRegister


