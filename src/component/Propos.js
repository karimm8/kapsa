import React, { useState } from 'react'
import '../style/propos.scss'
export default function Propos() {
  const [show,setShow] = useState(false)
  const [show1,setShow1] = useState(false)
  const [show2,setShow2] = useState(false)
  const [show3,setShow3] = useState(false)
  const [active,setActive] = useState(false)
  const [active1,setActive1] = useState(false)
  const [active2,setActive2] = useState(false)
  const [active3,setActive3] = useState(false)

  const hun = () => {
     setActive(!active)
    
     setShow(!show)
     
    
  }
  const hun1 = () => {
    setActive1(!active1)
    setShow1(!show1)
  }
  const hun2 = () => {
    setActive2(!active2)
    setShow2(!show2)
  }
  const hun3 = () => {
    setActive3(!active3)
    setShow3(!show3)
  }
  return (
    <div className='props'>
           <div className='back'>
               <img src='https://kasa-vq.netlify.app/static/media/banniere_aboutxl.3827f97bdcef0854551d.jpg' alt='image' />
           </div>
           <ul className='list'>
               <li>
                <span>Fiabilité</span>
                <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image' className='arrow' onClick={hun1} style={{transform:active1? "rotate(180deg)" : "rotate(0deg)"}} />
               </li>
               {
                show1?
                <div className='show'>
                      <p>
                      Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                      </p>
                </div> : null
               }
            
               <li>
                <span>Respect</span>
               <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image'className='arrow' onClick={hun} style={{transform:active?"rotate(180deg)":"rotate(0deg)"}} />
               </li>
               {
                show?
                <div className='show'>
                      <p>
                      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                      </p>
              </div>:null
               }
               <li>
                <span>Service</span>
               <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image'className='arrow' onClick={hun2} style={{transform:active2?"rotate(180deg)":"rotate(0deg)"}} />
               </li>
               {
                show2?
                <div className='show'>
                      <p>
                      Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                      </p>
                </div>:null
               }
               
               <li>
                <span>Sécurité</span>
               <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image'className='arrow' onClick={hun3} style={{transform:active3?"rotate(180deg)":"rotate(0deg)"}} />
               </li>
               {
                show3?
                <div className='show'>
                      <p>
                      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                      </p>
               </div>:null
               }
               
           </ul>
    </div>
  )
}
