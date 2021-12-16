import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import './App.css'

// import Check from './check';

let baseUrl = process.env.REACT_APP_BASEURL

function NavBar(props){
  //activeUser={activeUser} 
  //logout={logout}
  // isLoggedIn={isLoggedIn}
  //--------------------
  //showMain={showMain}
  //openMain={openMain}
  //closeMain={closeMain}
  //showAbout={showAbout}
  //openAbout={openAbout}
  //closeAbout={closeAbout}
  // showInbox={showInbox}
  // openInbox={openInbox}
  //---------------------
  // console.log('user in NavBar', props.activeUser)
  // console.log('isLoggedIn in NavBar', props.isLoggedIn)


// //-------------------------------
// const closeInbox = (e) => {
//   e.preventDefault()
//   props.setShowInbox(false)
// }

// const openInbox = (e) => {
//   e.preventDefault()
//   props.setShowInbox(true)
//   props.setShowMain(false)
//   props.setShowAbout(false)
// }
// //-------------------------------
// const closeAbout = (e) => {
//   e.preventDefault()
//   props.setShowAbout(false)
// }

// const openAbout = (e) => {
//   e.preventDefault()
//   props.setShowAbout(true)
//   props.setShowMain(false)
//   props.setShowInbox(false)
// }

// //-----------------------------
// const closeMain = (e) => {
//   e.preventDefault()
//   props.setShowMain(false)
//   // setShowAbout(false)
// }

// const openMain = (e) => {
//   e.preventDefault()
//   props.setShowMain(true)
//   props.setShowAbout(false)
//   props.setShowInbox(false)
// }
// //----------------------------



return(
  <div className='div-navBar-list'>
            
            <button onClick={(e)=> {props.openMain(e)}} className="navBarButtons" > Home </button>
            
              <button onClick={(e)=> {props.openAbout(e)}} className="navBarButtons">About</button>            
            
              <button onClick={(e)=> {props.openInbox(e)}} className="navBarButtons">Inbox</button>           
           
              <button onClick={()=> props.logout()} className="navBarButtons"> Log Out </button>
                  
    </div>
      )
}

export default NavBar