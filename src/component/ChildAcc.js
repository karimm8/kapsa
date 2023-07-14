import React from 'react'
import '../style/child.scss'
import { Link } from 'react-router-dom'
export default function ChildAcc({ele}) {
    const {cover,title,id} = ele
  return (
    <div className='card'>
        <Link to={`/compenent/details/${id}`}><img src={cover} alt={cover} /></Link>
        <h3>{title}</h3>
    </div>
  )
}
