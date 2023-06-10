import { useEffect, useState } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom"
 import {ChatEngine} from "react-chat-engine";
import "../css/chat.css";

 function Chat({load}){
 
const [password,setpassword]=useState('');

const history=useNavigate();

  useEffect(()=>{
    axios.post(''+process.env.VITE_DOMAIN+'/getpassword',{token: localStorage.getItem('token')})
    .then((res)=>{
        setpassword(res.data.password);
        console.log(res.data.password);
    })
    .catch(err=>console.log(err))
  },[])

  function logout(){
  localStorage.removeItem('username');
  localStorage.removeItem('token');
   history('/');
  }

    if(password.length>0){
        return <div style={{height:"100vh"}}>
            <ChatEngine
              projectId="938a61a6-63d6-4b4a-8910-33748762d8cf"
              username={localStorage.getItem('username')}
              secret={password}
              style={{height:'100%'}}
             />
             <div className="log_out_div">
          <button className="log_out" onClick={logout}>log out</button>  
          </div>
        </div>
    }else{
        return <div className="chat_load_div">
            <h1>Loading</h1>
            <h1 style={{marginTop:'30px'}}>{load}</h1>
        </div>
    }
}

export default Chat;