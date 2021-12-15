import React, { useEffect, useState } from 'react'
import ReactModal from 'react-modal';
import './App.css'
// import Login from '../Login/login.js';
import Main from './main.js';
import LoginOrRegister from './loginORregister';
import NavBar from './NavBar.js'
import About from './about.js';
import Inbox from './inbox.js';
// import UserProfile from '../Profile/profile'


let baseUrl = process.env.REACT_APP_BASEURL

function Check(props){

    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeUser, setActiveUser] = useState({});
    const [showMain, setShowMain] = useState(true)
    const [messages, setMessages] = useState([])
    const [showAbout, setShowAbout] = useState(false)
    const [showInbox, setShowInbox] = useState(false)
    



//-------------------------------
    const closeInbox = (e) => {
        e.preventDefault()
        setShowInbox(false)
    }

    const openInbox = (e) => {
        e.preventDefault()
        setShowInbox(true)
        setShowMain(false)
        setShowAbout(false)
    }
//-------------------------------
    const closeAbout = (e) => {
        e.preventDefault()
        setShowAbout(false)
    }

    const openAbout = (e) => {
        e.preventDefault()
        setShowAbout(true)
        setShowMain(false)
        setShowInbox(false)
    }

//-----------------------------
    const closeMain = (e) => {
        e.preventDefault()
        setShowMain(false)
        // setShowAbout(false)
    }

    const openMain = (e) => {
        e.preventDefault()
        setShowMain(true)
        setShowAbout(false)
        setShowInbox(false)
    }
//----------------------------
    
    const logIn = (user) => {
      setActiveUser(user)
      setIsLoggedIn(true)
    }

    const logout = () => {
        fetch(baseUrl + '/users/logout', { credentials: 'include'})
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setIsLoggedIn(false)
            setActiveUser(null)
          }
        })
      }
    
    useEffect (()=> {
        console.log(isLoggedIn)
        

    })

    return(
        <div >
            <div >
                {
                    isLoggedIn ? 
                        <div>
                            <NavBar 
                            logout={logout} 
                            user={activeUser} 
                            isLoggedIn={isLoggedIn}
                            closeMain={closeMain}
                            closeAbout={closeAbout}
                            showAbout={showAbout}
                            showMain={showMain} 
                            showInbox={showInbox}
                            openInbox={openInbox}
                            openAbout={openAbout}
                            openMain={openMain}
                            />

                                    <div>
                                        
                                        <div>
                                            { showMain ?
                                                <Main 
                                                    activeUser={activeUser} 
                                                    isLoggedIn={isLoggedIn} 
                                                    showMain={showMain}
                                                    showAbout={showAbout}
                                                    showInbox={showInbox}
                                                    openInbox={openInbox}
                                                    openAbout={openAbout}
                                                    openMain={openMain}
                                                />
                                            : <p> showMain is false</p>
                                            }
                                        </div>

                                        <div>
                                            { showAbout ? 
                                                <About 
                                                    activeUser={activeUser} 
                                                    isLoggedIn={isLoggedIn}
                                                    showMain={showMain}
                                                    showAbout={showAbout}
                                                    showInbox={showInbox}
                                                    openInbox={openInbox}
                                                    openAbout={openAbout}
                                                    openMain={openMain}
                                                />
                                            : <p>showAbout is false</p>
                                            }
                                        </div>

                                        <div>
                                            { showInbox ? 
                                                <Inbox 
                                                    user={activeUser} 
                                                    isLoggedIn={isLoggedIn}
                                                    showMain={showMain}
                                                    showAbout={showAbout}
                                                    showInbox={showInbox}
                                                    openInbox={openInbox}
                                                    openAbout={openAbout}
                                                    openMain={openMain}

                                                />
                                            : <p>showInbox is false </p>
                                            }
                                        </div>

                                    </div>   
                        </div>                    
                    : <LoginOrRegister
                        activeUser={activeUser}  
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        setActiveUser={setActiveUser}
                        /> 
                }

            </div>
        </div>
    )
}

export default Check


