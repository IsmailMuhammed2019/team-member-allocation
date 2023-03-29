import React, {useState} from 'react'
import {data} from './data'
import male from './assets/maleProfile.jpg'
import female from './assets/femaleProfile.jpg'

const Employee = () => {
    const [employees, setEmployees] = useState(data)

  return (
    <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
            <div className='card-collection'>
        {employees.map((employee) => {
            const {id, fullName, gender, teamName, designation} =  employee
            return (
                <div key={id} className='card m-2' style={{cursor: 'pointer'}}>
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
  )
}

export default Employee