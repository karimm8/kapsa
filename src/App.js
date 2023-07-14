import './style/app.scss';
import Accueil from './component/Accueil';
import Propos from './component/Propos';
import Details from './component/Details';
import L404 from './component/L404';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
function App() {
  return (
    <>
     <div className="container">
         <BrowserRouter>
             <div className='header'>
                  <Link to="/">
                        <img width={180} height={68} src='https://kasa-vq.netlify.app/static/media/logoHeader.28bcdc5933dc39a590d83eb2133ce13c.svg'/>
                  </Link>
                  <ul>
                          <Link className='link1'  to={"/"} target="_blank">Accueil</Link>
                          <Link className='link1 link2' to={"/compenent/propos"} target="_blank">A Propos</Link>
                  </ul>
             </div>
             <Routes>
                          <Route path="/" element={<Accueil />} />
                          <Route path="/compenent/propos" element={<Propos />} />
                          <Route path='/compenent/details/:id' element= {<Details />} />
                          <Route path='/*' element= {<L404 />} />
             </Routes>
         </BrowserRouter>
    </div>
    <div className='footer'>
      <div className='content'>
          <img src='https://kasa-vq.netlify.app/static/media/logoFooter.ee689fd9409d1b5a898b4247819d8a00.svg'/>
          <p>© 2020 Kasa. All rights reserved</p> 
          </div>
    </div>
    </>
  );
}

export default App;
