import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function Ref() {
    const UserName = useRef()
    const [user,setuser] = useState('')
    const ShowUsername=() =>{

        setuser(UserName.current.value)


    }
  return (
    <div>
        <h1>{user}</h1>
    <input type="text" ref={UserName}/>
    <button onClick={ShowUsername}>SHOW</button>
</div>
    
  )
}
