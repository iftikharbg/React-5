import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function Person() {
    const[persons,setPersons]=useState([])
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const persons = response.data;
            setPersons(
                persons
            )
        })
        .catch(error => {
            console.log(error)
        })

    },[])
  return (
    <div>
    <ul>
        {
            persons.map(person => {
                return <li style={{fontWeight: "bold"}} key={person.id}>City: {person.address.street} Country:{person.address.city}</li>
            })
        }
    </ul>
</div>
    
  )
}
