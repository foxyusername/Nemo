import { useEffect, useState } from "react";
import "../css/login.css";
import "../css/login_responsive.css";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import {auth,provider} from '../configuration/firebase';
import {useNavigate } from "react-router-dom";

 function Login({user,lock}){

  const [login_username,setlogin_username]=useState('');
  const [login_password,setlogin_password]=useState('');
  const [errormessage,seterrormessage]=useState('');

  const history=useNavigate();

useEffect(()=>{
  if(localStorage.getItem('token')){
    history('/Nemo-home');
  }
},[])


function submited(){
if(login_username.length>0 && login_password.length>0){
    axios.post(''+process.env.VITE_DOMAIN+'/loginuser',{username: login_username, password: login_password}).then((res)=>{
        console.log(res)
        if(res.data==='notFound' || res.data==="error"){
          seterrormessage("Couldn't find an account ");
          console.log('no accounts found');
        }else{
            localStorage.setItem('token',res.data);
            localStorage.setItem('username',login_username);
            seterrormessage('');
            history('/Nemo-home')
        }
      }).catch((err)=>console.log(err))
      
}
}

const google=()=> {  
  signInWithPopup(auth, provider).then((res)=>{

   axios.post(''+process.env.VITE_DOMAIN+'/insertgoogleuser',
   {username: res._tokenResponse.displayName, secret: "GoogleAuth"}).then((res)=>{
   localStorage.setItem('token',res.data);
   history('/Nemo-home');
    console.log(res);
   }).catch((err)=>console.log(err));

        console.log(res);
        localStorage.setItem('username',res._tokenResponse.displayName);
    }).catch((err)=>console.log(err))
      
  }
  

    return <div className="login_main_div">
    <div className={errormessage ? "login_div_error" : "login_div"}>
      {errormessage ?  <div><p id="errormessage">{errormessage}</p></div>:null}
    <div className="login_title"><h1>Login</h1></div>
    <div className="login_input_div">
    <div className="login_username"><p>{user}</p><input placeholder="username..." onChange={(e)=>{setlogin_username(e.target.value)}}/> </div>
    <div className="login_password"><p>{lock}</p> <input placeholder="password..." onChange={(e)=>{setlogin_password(e.target.value)}} /> </div>
    </div>
    <div className="forgot_password"><p>Forgot Password?</p></div>
    <div className="login_button"><button onClick={submited}>Login</button></div>
    
    <div className="login_google_div"><p>sign up using</p>
    <div>
    <img onClick={google} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" />
    </div>
    <p id="or">or</p>
    <a href="/Nemo-register">Sign Up</a>
    </div>
   </div>
    </div>
}

export default Login;