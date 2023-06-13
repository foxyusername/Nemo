import "../css/register.css";
import "../css/register_responsive.css";
import { useState ,useEffect} from "react";
import * as yup from "yup";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({fish,user,password,email,unblock,see_eye,unsee_eye,X}){  
const [viewpassword,setviewpassword]=useState(false);
const [errormessage,seterrormessage]=useState(''); 


const history=useNavigate();


useEffect(()=>{
  if(localStorage.getItem('token')){
    history('/Nemo-home');
  }
},[])

const schema=yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required(),
    confirm_password: yup.string().oneOf([yup.ref('password')],'passwords must match')
})

const {register,handleSubmit,formState: {errors}}=useForm({
    resolver: yupResolver(schema)
})


function onsubmit(data){
  console.log(data.username);
  axios.post(''+import.meta.env.VITE_SERVER_URL+'/insertuser',{
    username: data.username,
    password: data.password
  }).catch((err)=>console.log(err)).then((res)=>{
 
  console.log(res.data);
    if(res.data==='error'){
     seterrormessage('username has already been used');
     console.log(errormessage);
    }else{
     localStorage.setItem('token',res.data);
     localStorage.setItem('username',data.username);
    seterrormessage('');
  history('/Nemo-home');

    }
  })
}

  return <div className="register_main_div">
   <div className="register_logo"><h1>{fish}</h1></div>
   <div className="right_left_sides">  
    <div className="left_side">
   <div className="text_box">
 <h1>Hang out anytime, anywhere</h1>
<div className="p_text"><p>Nemo makes it easy and fun to stay close to your favorite people.</p></div>
  </div>
  <div className="signup_options">
 <p id="signup_text">already have an account?</p>
 <a href="/Nemo-Login" id="signup_button">Login</a>
  </div>
    </div>
    
    <div className="right_side">
    <form onSubmit={handleSubmit(onsubmit)}>
   <div className="register_div" style={{marginTop:errormessage.length>0 ? "-21px" : null,borderTop:errormessage.length>0 ? "7px solid red" : null}}>
    {errormessage.length>0 ? <div > <p style={{color:'red',marginRight:'8px'}}>X</p> <p>{errormessage}</p> <p style={{color:'red',marginLeft:'8px'}}>X</p></div>:null}
    <div className="register_user_div"><label>{user}</label><input type="text" placeholder="username..." {...register('username')}/></div>
    {errors.username && <p>{errors.username.message}</p>}
    <div className="register_email_div"><label>{email}</label><input type="text" placeholder="email..." {...register('email')}/></div>
    {errors.email && <p>{errors.email.message}</p>}

    <div className="register_password_div"><label>{password}</label>
    <input onChange={(e)=>{setpassword_input(e.target.value)}} type={viewpassword ? "text" :"password"} placeholder="password..." {...register('password')}/>
     <lable onClick={()=>{viewpassword ? setviewpassword(false) : setviewpassword(true)}} id="register_eye">{viewpassword ? unsee_eye : see_eye}</lable></div>

     {errors.password && <p>{errors.password.message}</p>}

    <div className="register_confirmpassword_div"><label>{unblock}</label><input type={viewpassword ? "text" : "password"}  placeholder="confirm password..." {...register('confirm_password')}/></div>
    {errors.confirm_password && <p>{errors.confirm_password.message}</p>}
   <div><button className="submit" >submit</button></div>

   </div>  
   </form>

    </div>
   </div>
  </div>
}

export default Register;