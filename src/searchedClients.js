import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';

function SearchedClients (props){
    // allIncidents = {props.incidents}
    //const [incidents, setIncidents] = useState([])

    const [valueToFilter, setValueToFiler] = useState('')
    const [foundFilteredIncidents, setFoundFilteredIncidents] = useState([])




    const searchByFilter = (e, value) => {
        console.log('value in searchByFilter', value)
        e.preventDefault()

        // console.log('matching???', allUsers.find((reports) => reports.username === username))
        // console.log('matching???', allUsers.find((reports) => reports.company === username))
        // console.log('matching???', allUsers.find((reports) => reports.username === username))
        if (value === 'username') {
            setFoundFilteredIncidents(incidents.find((reports) => reports.username === username))
            .then(console.log(foundFilteredIncidents))
        } else if (value === 'company') {
            setFoundFilteredIncidents(incidents.find((reports) => reports.company === company))
            .then(console.log(foundFilteredIncidents))
        } else if (value === 'location') {
            setFoundFilteredIncidents(incidents.find((reports) => reports.location === location))
            .then(console.log(foundFilteredIncidents))
        } else {
            return (
                <div>
                    <p>No Reports Found</p>
                </div>
            )
        }
        
        // console.log('foundUser?: ', foundUser)
        // console.log('foundUser.id: ', foundUser.id)
       
        //return? foundFilteredArray(e, foundFilteredIncident.id)
    }


return (
    <div>
    
        <form onSubmit={(e) => searchByFilter(e, e.target.value)}>
            <label for="searchBy">Search Reports by:</label>
                <select name="searchBy" id="searchBy">
                    <option value="username" >Name</option>
                    <option value="company" >Company</option>
                    <option value="Location" >Location</option>
                </select>
                
                    <input type="submit" value="Submit" />
        </form>
    </div>
)



}

export default SearchedClients