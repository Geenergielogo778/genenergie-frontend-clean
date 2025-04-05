import React from 'react'
import { useLocation } from 'react-router-dom'

const Result = () => {
    const router = useLocation()
    const query = new URLSearchParams(router.search)
    const session_id = query.get("session_id")
    const package_id = query.get("package_id")

    console.log({session_id, package_id})
  return (
    <div>Result</div>
  )
}

export default Result