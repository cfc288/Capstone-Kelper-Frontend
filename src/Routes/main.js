
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Link, Routes, Route} from 'react-router-dom';
import ReactModal from 'react-modal';
// import DisplayClients from '../displayClients/displayClients';
import DisplayOneClient from './displayOneClient';
import Inbox from './inbox';
import './App.css'
import SearchedClients from './searchedClients';

let baseUrl = process.env.REACT_APP_BASEURL

function Main(props) {
// activeUser={activeUser} 
// isLoggedIn={isLoggedIn} 
// showMain={showMain}
// showAbout={showAbout}
// showInbox={showInbox}
// openInbox={openInbox}
// openAbout={openAbout}
// openMain={openMain}
console.log('activeUser on main', props.activeUser)
console.log('isLoggedIn on main', props.isLoggedIn)
        

    // const [isAdmin, setAdmin] = useState(false)
    const [incidents, setIncidents] = useState([])
    const [clientToBeUpdated, setClientToBeUpdated] = useState({})
    const [newName, setNewName] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [clients, setClients] = useState([])
    const [showIncidentForm, setShowIncidentForm] = useState(false)
    const [newReport, setNewReport] = useState('')
    const [clientID, setClientID] = useState('')
    const [selectClient, setSelectClient] = useState({})
    const [selectClientId, setSelectClientID] = useState('')
    const [searchClient, setSearchClient] = useState('')
    const [filteredClients, setFilteredClients] = useState([])
    const [showClients, setShowClients] = useState(true)
    const [showSortedClients, setShowSortedClients] = useState(false)


 
    //#####
    const [display, setDisplay] = useState(false)
    const openModal = (id) => {
        setDisplay(true)
        setClientID(id)
        console.log('clientID onclick', clientID)
      }
    const closeModal =() => {
    setDisplay(false)
    }
    //######





    
    useEffect(() => {
        console.log('baseUrl+ /clients/', baseUrl + '/clients/')
        fetch(baseUrl + '/clients/',
        {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 200) {
              setClients(data.data)
              console.log('data.data',data.data)
              console.log('clients array', clients)
            } 
          })
        //other fetch
        fetch( baseUrl + '/incidents/',  
        {
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            setIncidents(data.data)
            console.log('data.data', data.data)
            console.log('incidents array(on use effect)', incidents)
          } 
        })
      }, [])
    //[] put into empty array (component did mount)
    //[clients] like ocmpnent did update
    

//ADD NEW CLIENT
    const addNewClient = (event) => {
        event.preventDefault() 
        const newClient = {
          name: newName,
        }
        fetch(baseUrl + '/clients/', {
          method: 'POST',
          body: JSON.stringify(newClient),
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
           if (data.status === 201) {   
            const clientsCopy = [...clients, data.data]
            setClients(clientsCopy)
            } 
        })
        .then(()=> setShowIncidentForm(true))
      }


//ADD NEW REPORT/INCIDENT
    const addNewReport = (event) => {
        event.preventDefault() 
            console.log('selectClientID in addNewReport', selectClientId)
            console.log('selectClient in addNewReport', selectClient)
            console.log('clientID in addNewReport', clientID)
            console.log('baseUrl + /incidents/newincident/client/ + selectClient', baseUrl + '/incidents/newincident/client/' + selectClient)
        const newIncident = {
            incident_event: newReport,
        }
        fetch(baseUrl + '/incidents/newincident/client/' + selectClient, {
            method: 'POST',
            body: JSON.stringify(newIncident, 
                //flagged_for_review=false (this defaults false on backend, do i need?)
                ),
            headers: {
            'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 201) {   
            const incidentsCopy = [...incidents, data.data]
            setIncidents(incidentsCopy)
            } 
        })
    }



    const deleteOnClick = (event, id) => {
        console.log("delete route")
        event.preventDefault()
        fetch(baseUrl + '/clients' + `/${id}`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
          if (data.status === 200) {
            const clientsCopy = [...clients]
            const foundIndex = clientsCopy.findIndex((client) => client.id === id)
            clientsCopy.splice(foundIndex, 1)
            setClients(clientsCopy)
          }
        })
        //.then(fetchEverythingAgain())
        // console.log('clients delete route')
      }
    
    const filterIncidentsByClient = (id) => {
        return incidents.filter((incident)=>{
            return incident.client_referrence.id === id
        })
    }


    const changeView = () => {
        setShowSortedClients(true)
        setShowClients(false)
        
    }

    const changeViewBack = () => {
        setShowSortedClients(false)
        setShowClients(true)
    }


    return(
        <>
    <div className='outerDivOnMain'>
            <div>
                
                
                <div>
                    <div> 
                        <div className='titleOnMain'> Kelper </div>
            

                    
                    {
                        showForm ? 
                        <div>
                            <div className='showFormDiv'>
                                <form onSubmit={addNewClient} isOpen={showForm}
                                className='addNewClientForm'> 
                                <input id="name" type="name" name="name" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name of Client" className='addNewClientFormInput'/>
        
                                
                                <button type="submit" value="Add Client" className='newClientSubmitButton'> Add Client
                                </button>
                                <br />
                                <br />
                                <button onClick={()=> setShowForm(false)}>close form</button>
                                </form> 
                            </div>
                        </div>

                        : <button onClick={()=> setShowForm(true)}> Add New Client </button>
                    }

                <div>
                { showSortedClients ? 
                <div >
                    <button onClick={changeViewBack}> Close Sort </button>

                    <SearchedClients 
                        incidents={incidents}
                        changeViewBack={changeViewBack}
                    /> 
                    
                 </div>
                :  
                
                <button onClick={changeView}> 
                Sort Clients </button>
                
                }
                </div>





                
                    <h3>Click on the clients name to see or add incident reports</h3>

                <div>
                    {showClients ? 
                    
                    <div > 
                        {clients.map((client) => {

                            return(
                            <div>
                            <div className="outsideDivClientsMap">
                            
                            <table className='mapClientsTable' key={client.id} >
                                <tr>
                                <td> 
                                    <button onClick={() => {openModal( client.id)}}> {client.name} </button> 
                                </td>
                            
                                </tr>
                                

                                <tr className='mapClientsTableRow'>

                                    <td className='mapClientsTableData'>Date/Time Created </td>  
                                    <td className='mapClientsTableData'>Location 
                                    </td>
                                    <td className='mapClientsTableData'>Company
                                    </td>
                                    <td className='mapClientsTableData'>Employee Title
                                    </td>
                                    <td >
                                    <button className='delteClientOnMain' onClick={(e)=>{deleteOnClick(e, client.id)}}>Delete Client</button>
                                    </td>
                                </tr>
                                <ReactModal 
                                isOpen={display} 
                                clientID={clientID}
                                overlayClassName='overlayLoginModal'
                                className='displayOne'
                                >
                                    <button variant="primary" onClick={closeModal} className='backDisplayOneButton'> Back
                                    </button>
                                    <DisplayOneClient 
                                    clientId={clientID}
                                    client={clients}
                                    activeUser={props.activeUser}
                                    deleteClientOnClick={props.deleteOnClick}
                                    overlayClassName='overlayLoginModal'
                                    />

                                    

                                </ReactModal>

                                    <tbody>
                                    { 
                                    filterIncidentsByClient(client.id).map((report) => {
                                    return (
                                        <tr key={report.client_referrence.id} className='mapClientsTableRow'>
                                        
                                            <td className='mapClientsTableData'>
                                                {report.created_at}
                                            </td>
                                        
                                            <td className='mapClientsTableData'>
                                                {report.employee_data_ref.location}
                                            </td > 
                                    
                                            <td className='mapClientsTableData'>
                                                {report.employee_data_ref.company}
                                            </td> 
                                        
                                            <td className='mapClientsTableData'>
                                                {report.employee_data_ref.employee_title}
                                            </td> 
                                                
                                        </tr>
                                    )
                                })}
                                    </tbody> 
                            
                                </table>
                                <br />
                            </div>
                                <br />
                            </div>
                            
                            )
                        })}

                    </div>
                    : <p> Sort by clients here </p> }
                    
                    </div>          
                </div>
            </div>
        </div>
    </div>

    
    </>
    )

}

export default Main





