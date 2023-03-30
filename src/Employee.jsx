import React, {useState} from 'react'
import {data} from './data'
import male from './assets/maleProfile.jpg'
import female from './assets/femaleProfile.jpg'

const Employee = () => {
    const [team, setTeam] = useState('TeamB')
    const [employees, setEmployees] = useState(data)


    const handleChange = (e) => {
        setTeam(e.target.value)
        console.log(e.target.value)
    }

    const handleTeamSelectionChange = (e) => {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(e.currentTarget.id) ? (employee.teamName === selectedTeam) ? {...employee, teamName: ''} : {...employee, teamName: selectedTeam} : employee)

        setEmployees(transformedEmployees)
    }

  return (
    <>
    <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-6'>
        <select className='form-select form-select-lg' value={team} onChange={handleChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
        </select>
        </div>
    </div>
    <div className='row justify-content-center mt-3 mb-3'>        
        <div className='col-8'>
            <div className='card-collection'>
        {employees.map((employee) => {
            const {id, fullName, gender, designation} =  employee
            return (
                <div key={id} className='card m-2' style={{cursor: 'pointer'}} onClick={handleTeamSelectionChange}>
                    {(gender === 'male') ? <img src={male} alt={fullName} className='card-img-top' /> : <img src={female} alt={fullName} className='card-img-top' />}
                    <div className='card-body'>
                    <h5 className='card-title'>Full Name: {fullName}</h5>
                    <p className='card-text'><b>Designation:</b> {designation}</p>
                    </div>
                </div>                
            )
        })}
        </div>
        </div>
    </div>
    </>
  )
}

export default Employee