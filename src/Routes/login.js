import React, { Component, useState, useEffect } from 'react'
import Register from './register'
import Modal from 'react-modal';
import About from './about';
import './App.css'




let baseUrl = process.env.REACT_APP_BASEURL

function Login (props){
    // activeUser={activeUser} 
    // isLoggedIn={isLoggedIn}
    // setIsLoggedIn={setIsLoggedIn}
    // showMain={showMain}
    // showAbout={showAbout}
    // showInbox={showInbox}
    // openInbox={openInbox}
    // openAbout={openAbout}
    // openMain={openMain}
    // closeModal={closeModal}
    //_________
    // setIsLoggedIn={props.setIsLoggedIn}
   
//----------------------------------
    const[email, setEmail] = useState('')
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

//--------------------------
    const [display, setDisplay] = useState(false)
    const openModal = () => {
        setDisplay(true)
    }
    const closeModal =() => {
    setDisplay(false)
}
//----------------------------






    const fetchLogin = (e) => {
        e.preventDefault()
        console.log('baseUrl + /users + /login', baseUrl + '/users' + '/login')
        console.log('un, email, pw:', username, email, password)
        const user = {email, password, username}

        fetch(baseUrl + '/users' + '/login', {
            method: 'Post',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.status === 200) {
                setEmail('')
                setUsername('')
                setPassword('')
                props.setActiveUser(data.data)
                props.setIsLoggedIn(true)
            
            } else {
                return alert('Inncorrect password, email, or username')
            }
        })
    }







    

    
        return (
            <div className='mostOutsideFormDiv'>
                <h2 className='login-title'> Login </h2>
            <div className='outsideFormDiv'>
                <div className='formDiv'>
                    <form onSubmit={fetchLogin}>
                            <div className='user-box'>
                                <label >
                                    Username   :   
                                </label>
                                <br />
                                    
                                <input type='text' id='loginName' name='name' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username'/>
                            </div>
                       
                            <div className='user-box'>
                                <label >
                                    Email:
                                </label>
                                <br />
                                    
                                        <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                            </div>
                        
                            <div className='user-box'>
                                <label >
                                    Password:
                                </label>
                                <br />
                                        <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'/>
                            </div>
                            <button variant="contained" type="submit" className='login-button-modal'>
                            Log In
                        </button>
                        <br />
                    </form>
                </div>
                <br />
                <div>
                    <button  onClick={props.closeModal} className="close-button"> Close </button>
                </div>
            </div>

                


                
            </div>

        )
    
    
}


export default Login