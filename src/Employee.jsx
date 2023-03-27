import React, {useState} from 'react'
import {data} from './data'

const Employee = () => {
    const [employees, setEmployees] = useState(data)
  return (
    <div>
        {employees.map((employee) => {
            const {id, fullName, gender, teamName, designation} =  employee
            return (
                <div key={id}>
                    <h4>{fullName}</h4>
                    <p>{designation}</p>
                    <p>{gender}</p>
                    <p>{teamName}</p>
                </div>                
            )
        })}
    </div>
  )
}

export default Employee