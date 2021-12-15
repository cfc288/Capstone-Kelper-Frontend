import React, { Component, useState, useEffect } from 'react'
import Register from './register'
import ReactModal from 'react-modal';
import About from './about';


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
            
            }
        })
    }







    

    
        return (
            <div className="loginDiv">
                <h2> Login Modal</h2>
            <div>
                <div>
                    <form onSubmit={fetchLogin}>
                            <div className='user-box'>
                                <label >
                                    Username:
                                </label>
                                    
                                        <input type='text' id='name' name='name' onChange={(e) => setUsername(e.target.value)} value={username} placeholder='Username'/>
                            </div>
                        <br />
                            <div className='user-box'>
                                <label >
                                    Email:
                                </label>
                                    
                                        <input id="email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                            </div>
                        <br />
                            <div className='user-box'>
                                <label >
                                    Password:
                                </label>
                                    
                                        <input type='text' id='password' name='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'/>
                            </div>
                        <br />
                            <button variant="contained" type="submit">
                        Log In
                        </button>
                        <br />
                    </form>
                </div>
                <br />
                <div>
                    <button  onClick={props.closeModal} className="back-button">Back</button>
                </div>
            </div>

                


                
            </div>

        )
    
    
}


export default Login