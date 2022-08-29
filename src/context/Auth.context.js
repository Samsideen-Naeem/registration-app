import React, { createContext, useState } from 'react'


const authContext = createContext();
AuthProvider = authContext.Provider;

function Authcontext() {

  const [success, setUsename] = useState("false")
  const [error, setError] = useState("null")
  const [loading, setLoading] = useState("false")
  const [user, setUser] = useState("null")
  return (
    <div>
      
    </div>
  )
}

export default Auth.context
