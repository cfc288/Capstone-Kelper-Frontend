import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';

let baseUrl = process.env.REACT_APP_BASEURL



function NewMessage (props){
    //activeUser={props.activeUser}
    //closeModal={closeModal}

    const [allUsers, setAllUsers] = useState('')
    const [recieverName , setRecieverName] = useState('')
    const [recieverID, setRecieverID] = useState('')
    const [message, setMessage] = useState('')

    


    useEffect(() => {
        console.log('baseUrl + /users/', baseUrl + '/users/')
        fetch( baseUrl + '/users/',  
        {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setAllUsers(data.data)
            //console.log('data.data',data.data)
            //console.log('allReports', allReports)
          }
        console.log('allUsers on NewMessage: ', allUsers)
        })
      }, [])



//CREATE/NEW MESSAGE/Send
const newMessage = (event, recieverID) => {
    event.preventDefault()
     
    const createdMessage = {
        message: message,
    }

    console.log('baseUrl + /messages/newmessage/reciever/ + recieverID: ', baseUrl + '/messages/newmessage/reciever/' + recieverID,)

    fetch(baseUrl + '/messages/newmessage/reciever/' + recieverID, {
        method: 'POST',
        body: JSON.stringify(createdMessage, 
            ),
        headers: {
        'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === 201) {   
        console.log('message created')
        props.closeModal()
        } 
    })
    }

//get and Set RecieverID?

    const getReciverID = (e, username) => {
        e.preventDefault()
        console.log('recieverName', recieverName)
        console.log('matching???', allUsers.find((users) => users.username === username))
        const foundUser = allUsers.find((users) => users.username === username)
        setRecieverID(foundUser.id)
        console.log('foundUser?: ', foundUser)
        console.log('foundUser.id: ', foundUser.id)
        //console.log('recieverID: ', recieverID)
        newMessage(e, foundUser.id)
    }





    

    
    return (
        <>
        <div>
            <br />
            <form onSubmit={(e)=>{getReciverID(e, recieverName)}} >
            <label >
                    Reciever:
                </label>
                <input type='text' id='reciever' name='name' onChange={(e) => setRecieverName(e.target.value)} value={recieverName} placeholder='Username of Reciver'/>
                <br />
                <br />
                
                <label >
                    Message:
                </label>
                <input type='message' id="message" type="test" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type Message Here"/>
                <br />
                <br />
                <button type="submit" value="Send Message"> Send </button>
                <br />
                <br />
            </form>
        </div>
        </>
    )
}


export default NewMessage