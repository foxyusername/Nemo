import "../css/welcome.css";
import "../css/welcome_responsive.css";
import {useNavigate} from "react-router-dom"
function Welcomepage({logo}){

  let history=useNavigate();

function homeclick(){
  if(localStorage.getItem('token')){
    history('/Nemo-home')
  }else{
    history('/Nemo-login')
  }
}

function getStarted(){
 if(localStorage.getItem('token')){
  history('/Nemo-home')
 }else{
  history('/Nemo-register')
 }
}

    return <div className="welcome_main_div">
        <div className="welcome_header">
            <div className="welcome_logo"><h1>{logo}</h1></div>
            <div className="welcome_navbar">
              <div className="welcome_navbar_p">
                <p id="first_p" onClick={homeclick}>{localStorage.getItem('token') ? 'Home' : 'Login'}</p>
                <p id="second_p" onClick={()=>{history('/Nemo-about')}}>About</p>
                <p id="third_p" onClick={()=>{history('/Nemo-contact')}}>Contact</p>
              </div>
            </div>
        </div>
      <div className="welcome_body">
   <div className="welcome_all_div"> 
    <div className="welcome_body_title" data-aos="fade-in"><h1>Welcome To Nemo</h1></div>
    <div className="welcome_body_description" data-aos="fade-in" ><p>
    Discover a world where conversations come alive. Express yourself with ease and connect with friends effortlessly.
      </p></div>
      
      <div className="welcome_button_div"> 
       <button id="welcome_button" onClick={getStarted} data-aos="fade-in">Get Started</button>
      </div>
      </div>
      </div>
    </div>
}

export default Welcomepage;