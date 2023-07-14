import React from 'react'
import {Link} from 'react-router-dom'
import '../style/l404.scss'
export default function L404() {
  return (
    <div className='error'>
      <div className='content'>
              <span>404</span>
              <p>
                Oups! La page que vous demandez n'existe pas.
              </p>
              <Link to = "/">
                  Retourner sur la page d'accueil
              </Link>
      </div>
        
    </div>
  )
}
