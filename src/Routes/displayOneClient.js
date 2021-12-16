import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

let baseUrl = process.env.REACT_APP_BASEURL

export default function DisplayOneClient(props) {
  // client={client} 
  // incidents={incidents}
  // deleteClientOnClick={props.deleteOnClick} 
  // newReport={addNewReport}
  // activeUser={props.activeUser}

  console.log('props.client on displayOneClient', props.client)
	console.log('props.clientID on displayOneClient', props.clientId.name)
  console.log('props.client[0].name on displayOneClient', props.client[0].name)
  console.log('baseUrl + /incidents', baseUrl + '/incidents/allreportsperclient/' + props.clientId )
  // console.log('props.report on displayOneClient ', props.incidents)
  console.log('user', props.user )
  const [allReports, setReports] = useState([])
  // const [incidents, setIncidents] = useState([])
  const [newReport, setNewReport] = useState('')
  const [reportToBeUpdated, setReportsToBeUpdated] = useState({})
  
  

  const [showForm, setShowForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [clientID, setClientID] = useState('')
  const [isFlagged, setIsFlagged] = useState(false)

  
  

  useEffect(() => {
      console.log('baseUrl + /incidents', baseUrl + '/incidents/allreportsperclient/' + props.client.id )
      fetch( baseUrl + '/incidents/allreportsperclient/' + `${props.clientId}`,  
      {
        credentials: 'include'
      })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          setReports(data.data)
          //console.log('data.data',data.data)
          //console.log('allReports', allReports)
        }
      console.log('allReports on displayOneClient', allReports)
      })
    }, [])



   

//create/ADD NEW REPORT
const addNewReport = (event, id) => {
  event.preventDefault() 
  console.log('client id?', props.clientId)
  const newIncident = {
      incident_event: newReport,
  }
  fetch(baseUrl + '/incidents/newincident/client/' + id, {
      method: 'POST',
      body: JSON.stringify(newIncident, 
          ),
      headers: {
      'Content-Type': 'application/json'
      },
      credentials: 'include'
  })
  .then(res => res.json())
  .then(data => {
      if (data.status === 201) {   
      const reportsCopy = [...allReports, data.data]
      setReports(reportsCopy)
      } 
  })
  }


//deleteOne
const deleteIncidentOnClick = (e, id) => {
    console.log('baseUrl + /incidents + `/${id}` ',baseUrl + '/incidents' + `/${id}`)
    e.preventDefault()
    fetch(baseUrl + '/incidents' + `/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        const reportsCopy = [...allReports]
        const foundIndex = reportsCopy.findIndex((report) => report.id === id)
        reportsCopy.splice(foundIndex, 1)
        setReports(reportsCopy)
      }
    })
    //console.log('report delete route')
  }



//edit/update/PUT
  const editOnClick = (e, reportEdit, id) => {
    e.preventDefault()
    //console.log('reportEdit', reportEdit)
    console.log(`baseUrl + '/incidents' + /${id}`, baseUrl + '/incidents' + `/${id}`)
    const newReport = {
      incident_event: reportEdit
    }
    fetch(baseUrl + '/incidents' + `/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newReport),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 200) {
        const copyReports = [...allReports]
        const foundIndex = copyReports.findIndex((report) => report.id === id)
        copyReports[foundIndex] = data.data
        setReports(copyReports)
        console.log('reportEdit', reportEdit)
        console.log('data.data for reportEdit',data.data)
        console.log('copyReports[foundIndex]', copyReports[foundIndex])
      }
    })
}



//to Flag report
const flagOnClick = (e, id) => {
  e.preventDefault()
  //console.log('reportEdit', reportEdit)
  console.log(`baseUrl + '/incidents' + /${id}`, baseUrl + '/incidents' + `/${id}`)
  const newFlag = {
    flagged_for_review: true
  }
  fetch(baseUrl + '/incidents' + `/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newFlag),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 200) {
      const copyReports = [...allReports]
      const foundIndex = copyReports.findIndex((report) => report.id === id)
      copyReports[foundIndex] = data.data
      setIsFlagged(true)
      setReports(copyReports)
      console.log('data.data for reportEdit',data.data)
      console.log('copyReports[foundIndex]', copyReports[foundIndex])
    }
  })
}

//to Flag report
const unFlagOnClick = (e, id) => {
  e.preventDefault()
  const newFlag = {
    flagged_for_review: false
  }
  fetch(baseUrl + '/incidents' + `/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newFlag),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 200) {
      const copyReports = [...allReports]
      const foundIndex = copyReports.findIndex((report) => report.id === id)
      copyReports[foundIndex] = data.data
      setIsFlagged(false)
      setReports(copyReports)
    }
  })
}




const passID = (id) => {
  setShowEditForm(true)
  setClientID(id)
}



	return(
    <div className='evenMoreOuter'>
		<div className='outerDivDisplayOne'>
        <h3> Client Reported Name: <div className='oneClientName'> {props.client[0].name} </div> </h3>
        <button className='deleteOneClient' onClick={(e)=>{props.deleteOnClick(e, props.client.id)}}>Delete Client</button>
        <br />
        <br />
        <br />

        {
          showForm ?
        <form onSubmit={(e)=>{addNewReport(e, props.clientId)}} isOpen={showForm} className='displayOneFormDiv'>
        
        <input id="report" type="text" name="report" value={newReport} onChange={(e) => setNewReport(e.target.value)} placeholder="Please describe incident here"/>
				
				<button type="submit" value="Add Report" > Add Report </button>
        <br />
        <button onClick={()=> setShowForm(false)}> Close Form </button>

        </form>
        : <button onClick={()=> setShowForm(true)}>New Report </button>
        }
      
      <div>
      {allReports.map((report) => {
						return (
			<table className='mapClientsTable'>
				<thead>
					<tr>
						<td className='mapClientsTableData' >Date Report Created</td>
						<td className='mapClientsTableData'>Location</td>
						<td className='mapClientsTableData'>Company</td> 
            <td className='mapClientsTableData'>EmployeeTitle</td> 
            <td className='mapClientsTableData'>Incident Report</td> 
            <td className='mapClientsTableData'> Flagged? </td>
					</tr>    
				</thead>
            
				<tbody>
                
							<tr key={report.client_referrence.id}>
                <td className='mapClientsTableData'>{report.created_at}</td>
								<td className='mapClientsTableData'>{report.employee_data_ref.location}</td>
                <td className='mapClientsTableData'>{report.employee_data_ref.company}</td>
								<td className='mapClientsTableData'>{report.employee_data_ref.employee_title}</td>
                <td className='mapClientsTableData'> {report.incident_event} </td>
                <td className='mapClientsTableData'>
                  { report.flagged_for_review ? <p> Flagged </p>
                  : null
                  } </td>
                <td><button onClick={(e)=>{deleteIncidentOnClick(e, report.id)}}>Delete Report</button></td>
							</tr>

              <tr>  
                <td> 
                {
                  showEditForm && clientID === report.id ?
                  <form onSubmit={(e)=>{editOnClick(e, newReport, report.id)}} isOpen={showEditForm}> 
                  <input id="report" type="text" name="report" value={newReport} onChange={(e) => setNewReport(e.target.value)} placeholder="Edit Report Here"/>
                  <button type="submit" value="Edit Report"> Edit Report </button>

                  <button onClick={()=> setShowEditForm(false)}>close form</button>
                  <button onClick={(e)=>{flagOnClick(e, report.id)}}> Flag Report </button>
                 
                  { props.activeUser.is_admin ? 
                  <button onClick={(e)=>{unFlagOnClick(e, report.id)}}> Unflag </button>
                  : null
                  }
                
                  </form>
                  :<td><button onClick={()=>{passID(report.id)}}>Edit/Flag Report</button></td>
                }
                </td>
              </tr>
				</tbody>
			</table>


      )})}
      </div>

		</div>
    </div>
	)
}

//


