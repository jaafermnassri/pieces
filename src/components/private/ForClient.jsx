import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ForClient = ({children}) => {
  const IsClient = useSelector((state)=>state.userReducer.user.role)
  console.log(IsClient)
  return (
    <div>
          {/* {localStorage.getItem('token')? children:<Navigate to="/login" />} */}
         {IsClient==="client"?children:""}
    </div>
  )
}

export default ForClient