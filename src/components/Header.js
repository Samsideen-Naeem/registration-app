import React, { useEffect, useState, useContext } from 'react'
import{Link, useNavigate} from 'react-router-dom'

function Header() {
  const Navigate = useNavigate();
  const {success, loading, user} =useContext()
  return (
    <div>Header</div>
  )
}

export default Header