import React,{lazy,Suspense}from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { faFishFins,faLock,faUser,faKey,faEye,faEyeSlash,faX,faSpinner,faPhone,faBuildingUser,faCheck} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faTwitter,faGithub, faGit} from "@fortawesome/free-brands-svg-icons"

//importing components//
import Register from '../components/Register'; 
import Login from '../components/Login';
import Chat from '../components/chat';
import Protect from '../configuration/protect';
import Error from '../components/404';
import About from '../components/about';
import Welcomepage from '../components/Welcome';
 import Contact from "../components/contact";
//import components//

//const Error=lazy(()=>import('../components/404'));
//const Login=lazy(()=>import('../components/Login'));
//const Protect=lazy(()=>import('../configuration/protect'));
//const About=lazy(()=>import('../components/about'));
//const Welcomepage=lazy(()=>import('../components/Welcome'));
//const Contact=lazy(()=>import('../components/contact'));
//const Chat=lazy(()=>import('../components/chat'));
//const Register=lazy(()=>import('../components/Register')); 

function App() {

return <Router>
       <Suspense fallback={<h1>loading...</h1>}>
    <Routes>  
      <Route path='/Nemo-login' element={<Login lock={<FontAwesomeIcon icon={faLock} />} user={<FontAwesomeIcon icon={faUser} />}/>} />
      
      <Route path='/Nemo-register' element={<Register 
      X={<FontAwesomeIcon icon={faX} />} 
      unsee_eye={<FontAwesomeIcon icon={faEyeSlash} />} 
      see_eye={<FontAwesomeIcon icon={faEye} />} 
      unblock={<FontAwesomeIcon icon={faKey} />} 
      fish={<FontAwesomeIcon icon={faFishFins}/>} 
      user={<FontAwesomeIcon icon={faUser} />} 
      email={<FontAwesomeIcon icon={faEnvelope} />} 
      password={<FontAwesomeIcon icon={faLock} />} />}/>
      
      <Route path='*' element={<Error />} />
     <Route path='/' element={<Welcomepage logo={<FontAwesomeIcon icon={faFishFins} />} />} />
     <Route path='/Nemo-Contact' element={<Contact 
     email={<FontAwesomeIcon icon={faEnvelope} />} 
     city={<FontAwesomeIcon icon={faBuildingUser}/>}  
     phone={<FontAwesomeIcon icon={faPhone} />}
     facebook={<FontAwesomeIcon icon={faFacebook} />}
     twitter={<FontAwesomeIcon icon={faTwitter} />}
     instagram={<FontAwesomeIcon icon={faInstagram} />}
     github={<FontAwesomeIcon icon={faGithub} />}
     checkmark={<FontAwesomeIcon icon={faCheck}/>}
      />} />
     <Route path='/Nemo-about' element={<About logo={<FontAwesomeIcon icon={faFishFins} />} />}/>
     
     <Route element={<Protect />}>
     <Route path='Nemo-home' element={<Chat load={<FontAwesomeIcon icon={faSpinner} />} />} />
     </Route>
    
    </Routes>
    </Suspense>
  </Router>
}

export default App