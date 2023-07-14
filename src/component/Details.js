import data from './data.json'
import '../style/details.scss'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
export default function Details() {
  const [show1,setShow1] = useState(false)
  const [show2,setShow2] = useState(false)
  const [active1,setActive1] = useState(false)
  const [active2,setActive2] = useState(false)
  const [counter,setCounter] = useState(0)
  const hun1 = () => {
    setActive1(!active1)
    setShow1(!show1)
  }
  const hun2 = () => {
    setActive2(!active2)
    setShow2(!show2)
  }
  const next = () => {
    setCounter(counter === details.pictures.length-1 ? 0 : counter + 1)
  }

  const prev = () => {
    setCounter(counter === 0 ? details.pictures.length-1 : counter - 1)
  }

  const {id} = useParams();
  const details = data.find((details)=>{
    return details.id === String(id);
  });
  console.log(details.pictures.indexOf(details.pictures[0]));
  return (
    <div className='details'>
        <div className='carousel'>
              <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image'  className='arrow arrow-left' onClick={prev}/>
              <img src={details.pictures[counter]} alt={details.pictures[counter]} className='cover' />
              <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image' className='arrow arrow-right' onClick={next}/>
              <span className='counter'>
              {details.pictures.indexOf(details.pictures[counter])}/{details.pictures.length} 
              </span>
        </div>
        <div className='info'>
             <div className='sup-info'>
                  <div className='title'>
                         <h2>{details.title}</h2>
                         <p>{details.location}</p>
                         <div className='btn'>
                         {    
                          details.tags.map((e,index)=>{
                         
                                       return (
                                             <button key={index}>{e}</button>
                                  )
                             
                          })
                         }
                        </div>
                  </div>
                  <div className='profil'>
                    <div className='header'>
                          <p className='profil'>{details.host.name}</p>
                          <img src={details.host.picture} alt={details.host.picture} />
                    </div>
                    <div className='etoil'>
                         <img src='https://kasa-vq.netlify.app/static/media/fullStar.6430150c126a3adf92c132c52c9c7428.svg' alt='image'/>
                         <img src='https://kasa-vq.netlify.app/static/media/fullStar.6430150c126a3adf92c132c52c9c7428.svg' alt='image'/>
                         <img src='https://kasa-vq.netlify.app/static/media/fullStar.6430150c126a3adf92c132c52c9c7428.svg' alt='image'/>
                         <img src='https://kasa-vq.netlify.app/static/media/fullStar.6430150c126a3adf92c132c52c9c7428.svg' alt='image'/>
                         <img src='https://kasa-vq.netlify.app/static/media/fullStar.6430150c126a3adf92c132c52c9c7428.svg' alt='image'/>
                    </div>
                  </div>
             </div>
             <ul className='list'>
               <li>
                <span>Description</span>
                <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image' className='arrow' onClick={hun1} style={{transform:active1? "rotate(180deg)" : "rotate(0deg)"}} />
               </li>
               {
                show1?
                <div className='show'>
                      <p>
                        {details.description}
                      </p>
                </div> : null
               }
            
               <li>
                <span>Equipement</span>
               <img src='https://kasa-vq.netlify.app/static/media/arrow.b052dd29e3a2bab76700eee79e133c37.svg' alt='image'className='arrow' onClick={hun2} style={{transform:active2?"rotate(180deg)":"rotate(0deg)"}} />
               </li>
               {
                show2?
                <div className='show'>
                      <p>
                         {details.equipments}
                      </p>
              </div>:null
               }
            </ul>
        </div>
    </div>
  )
}
