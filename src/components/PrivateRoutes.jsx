import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {


let isAuth = localStorage.getItem("isAdminLoggedIn")

return (
    isAuth ? children : <Navigate to={"/login"} />

  )
}

export default PrivateRoutes
