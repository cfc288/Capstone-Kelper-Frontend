import React, { Component, useState, useEffect } from 'react'
import ReactModal from 'react-modal';

function SearchedClients (props){
    // incidents={incidents}
    //const [incidents, setIncidents] = useState([])
    const [showIncidents, setShowIncidents] = useState(false)
    const [valueToFilter, setValueToFilter] = useState('')
    const [foundFilteredIncidents, setFoundFilteredIncidents] = useState([])

    const [filterByUsername, setFilterByUsername] = useState([])
    const [filterByUsernameAZ, setFilterByUsernameAZ] = useState([])
    const [filterByUsernameZA, setFilterByUsernameZA] = useState([])

    const [filterByLocation, setFilterByLocation] = useState([])
    const [filterByLocationAZ, setFilterByLocationAZ] = useState([])
    const [filterByLocationZA, setFilterByLocationZA] = useState([])

    const [filterByCompany, setFilterByCompany] = useState([])
    const [filterByCompanyAZ, setFilterByCompanyAZ] = useState([])
    const [filterByCompanyZA, setFilterByCompanyZA] = useState([])





    const sortByFilter = (e) => {
        console.log('props.incidents', props.incidents)
        e.preventDefault()
        
        console.log('value to filter: ', valueToFilter)

        // console.log('matching???', props.incidents.find((username) => reports.username === username))
        // console.log('matching???', allUsers.find((reports) => reports.company === username))
        // console.log('matching???', allUsers.find((reports) => reports.username === username))        

        if (valueToFilter === 'username') {
            console.log('value = username')
            console.log('props.incidents.client_referrence.name: ', props.incidents)

            props.incidents.sort(function(a,b) {
                return a.client_referrence.name.localeCompare(b.client_referrence.name)
            })


            console.log(props.incidents)
            setShowIncidents(true)

            
        } else if (valueToFilter === 'company') {
            console.log('value = company')
            
            props.incidents.sort(function(a,b) {
                return a.employee_data_ref.company.localeCompare(b.employee_data_ref.company)
            })

            console.log(props.incidents)
            setShowIncidents(true)


        } else if (valueToFilter === 'location') {
            console.log('value = location')

            props.incidents.sort(function(a,b) {
                return a.employee_data_ref.location.localeCompare(b.employee_data_ref.location)
            })

            console.log(props.incidents)
            setShowIncidents(true)

        } else {

            console.log('unable to compile')
            return (
                <div>
                    <p>Unable to compile reports</p>
                </div>
            )
        }
    }






return (
    <>
    <div className='sortedClientsDiv'>
    
       <form id='sort' onSubmit={(e)=> {sortByFilter(e)}}>
            <label for='sortForm'>Sort All Reports by:</label>
                <select id='sortForm' value={valueToFilter} name="sortList" form="sort" onChange={(e)=>{setValueToFilter(e.target.value)}}>
                    <option> Sort Reports by: </option>
                    <option value="username" > Client Name A-Z</option>
                    <option value="company"> Company A-Z </option>
                    <option value="location" > Location A-Z</option>
                </select>
                <br />
            <button type='submit'> Sort All reports </button>
        </form>    
    </div>


  <div> 
     { showIncidents ?
        props.incidents.map((incident) => {

        return (
        <div className="outsideDivClientsMap">
            <table  className='mapClientsTable' key=     {incident.id}> 
            

            <tr className='mapClientsTableRow'>
        
                <td className='mapClientsTableData'>Client Name </td>  
                
                <td className='mapClientsTableData'>Date/Time Created </td>  
                <td className='mapClientsTableData'>Location 
                </td>
                <td className='mapClientsTableData'>Company
                </td>
                <td className='mapClientsTableData'>Employee Title
                </td>
            </tr>
                
            <tr className='mapClientsTableRow'>

                <td className='mapClientsTableData'>
                    {incident.client_referrence.name}
                </td>
            
                <td className='mapClientsTableData'>
                    {incident.created_at}
                </td>
            
                <td className='mapClientsTableData'>
                    {incident.employee_data_ref.location}
                </td > 
        
                <td className='mapClientsTableData'>
                    {incident.employee_data_ref.company}
                </td> 
            
                <td className='mapClientsTableData'>
                    {incident.employee_data_ref.employee_title}
                </td> 
            </tr> 
                   

            </table>
        </div>
        )})
        : null
    }

    </div>


    </>
)



}

export default SearchedClients 




