import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';
import NewMessage from './NewMessage';




let baseUrl = process.env.REACT_APP_BASEURL

function Inbox (props) {
    //activeUser={activeUser}
    //showMain={showMain}
    //showAbout={showAbout}
    //showInbox={showInbox}
    
    console.log('activeUser on Inbox', props.activeUser)
    console.log('isLoggedIn on Inbox', props.isLoggedIn)

    const [display, setDisplay] = useState(false)
    const [openNewMessage, setOpenNewMessages] = useState(false)

    const [allUserMessages, setAllUserMessages] = useState([])


 //---------------------------   
    const openModal = () => {
        setDisplay(true)
      }
      
      const closeModal =() => {
        setDisplay(false)
      }
//------------------------------



//USE EFFECT
    useEffect(()=>{
        console.log('baseUrl+ /messages/allmessagesperuser', baseUrl + '/messages/allmessagesperuser')
        fetch(baseUrl + '/messages/allmessagesperuser',
        {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 200) {
                // const copyMessages = [data.data]
                setAllUserMessages(data.data)
                console.log('data.data, inside',data.data)
                console.log('messages inside', allUserMessages)
            } 
            console.log('messages on Inbox, outside', allUserMessages)
        }) 
    }, []) 


//delete message
const deleteMessageOnClick = (e, id) => {
    e.preventDefault()
    fetch(baseUrl + '/incidents' + `/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        const messagesCopy = [...allUserMessages]
        const foundIndex = messagesCopy.findIndex((message) => message.id === id)
        messagesCopy.splice(foundIndex, 1)
        setAllUserMessages(messagesCopy)
      }
    })
    //console.log('report delete route')
  }


    return (
        <div>
                <div>
                    <div>
                        <h2>Inbox</h2>
                        <br />
                        {/* <select> 
                            <option> Sort Messages By: </option>
                            <option> Sender (A - Z) </option>
                            <option> Sender (Z - A) </option>
                            <option> Newest First </option>
                            <option> Oldest First </option>
                        </select>  */}

                        <button onClick={openModal}> Send New Message </button>
                        <ReactModal isOpen={display}
                        overlayClassName='overlayLoginModal'>
                            <button onClick={closeModal}> Cancel </button>
                            <br />
                            <NewMessage
                            activeUser={props.activeUser}
                            closeModal={closeModal}
                            />
                            
                        </ReactModal >
                        <br />
                        <br />
                        <br />
                        {/* <select> 
                            <option> Search Messages By?: </option>
                            <option> Sender (Alphabetical) </option>
                            <option> Newest First </option>
                            <option> Oldest First </option>
                        </select> */}

                        <div>
                            <div>
                            <table className='outsideDivClientsMap' >
                                { 
                                    allUserMessages.map((message)=>{
                                        return (
                                            <tbody className='mapMessagesInboxTable' key={message.id}>
                                                <tr className='mapMessagesInboxTableData' >
                                                    <td className='mapMessagesInboxTableData'>Sent by:       {message.reciever.username} 
                                                    </td>
                                                </tr>
            
                                                <tr className='mapMessagesTableRow'>
                                                    <td className='mapClientsTableData'>{message.message}
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td >
                                                        <button onClick={(e)=>{deleteMessageOnClick(e, message.id)}}> Delte Message</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                                )
                                        })}
                                        
                             </table>
                             </div>
                        </div>

                    </div>
                </div>
        </div>
    )
    
}

export default Inbox
