import React from 'react'
import data from './data.json'
import '../style/accueil.scss'
import ChildAcc from './ChildAcc'
export default function Accueil() {
  return (
    <div className='banner'>
      <div className='back'>
           <img src='https://kasa-vq.netlify.app/static/media/banner_home.b37df1a62aeac2abe58d.jpg' alt='image' />
      </div>
      <div className='cards'>
        {
           data.map((e)=>{
            return (
              <ChildAcc key={e.id} ele = {e} />
            )
           })
        }
      </div>
    </div>
  )
}
