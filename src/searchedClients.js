// import React, { Component, useState, useEffect } from 'react'
// import ReactModal from 'react-modal';

// function SearchedClients (props){
//     // allIncidents = {props.incidents}
//     //const [incidents, setIncidents] = useState([])

//     const [valueToFilter, setValueToFiler] = useState('')


//     // const filterIncidentsByClient = (id) => {
//     //     return incidents.filter((incident)=>{
//     //         return incident.client_referrence.id === id
//     //     })
//     // }

//     // const clientFilterOnChange = (e) => {
//     //     setSearchClient({
//     //         inputValue: e.target.value
//     //     })
//     // }

//     // const getfilteredClients = () => {
//     //     setFilteredClients()
//     // }

//     const getIncidentId = (e, value) => {
//         e.preventDefault()
//         //console.log('recieverName', recieverName)




//         // console.log('matching???', allUsers.find((users) => users.username === username))
//         foundFilteredIncidents.push(incidents.find((users) => users.username === username))
        
//         // console.log('foundUser?: ', foundUser)
//         // console.log('foundUser.id: ', foundUser.id)
       
//         //return? foundFilteredArray(e, foundFilteredIncident.id)
//     }


// return (
//     <div>
    
//         <form onSubmit={(e) => setValueToFiler(e.target.value)}>
//             <label for="searchBy">Search Reports by:</label>
//                 <select name="searchBy" id="searchBy">
//                     <option value="username" >Name</option>
//                     <option value="company" >Company</option>
//                     <option value="Location" >Location</option>
//                 </select>
                
//                     <input type="submit" value="Submit" />
//         </form>
//     </div>
// )



// }

// export default SearchedClients