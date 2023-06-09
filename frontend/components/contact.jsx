import { useState,useEffect } from "react";
import "../css/contact.css";
import "../css/contact_responsive.css";
import axios from "axios";
import moment from "moment";

function Contact({email,phone,city,facebook,instagram,twitter,github,checkmark}){

  const [message,setmessage]=useState('');
  const [errormessage,seterrormessage]=useState('');
  const [clicked,setclicked]=useState(false);

  function messageValue(e){
     setmessage(e.target.value);
  }

  useEffect(()=>{
  setclicked(false);
  },[])

    function messageSend(e){
      const currentDate = moment().format('YYYY-MM-DD');

    if(!clicked){

      if(localStorage.getItem('username')){
  
      if(message.length>0){
        axios.post(''+process.env.VITE_DOMAIN+'/feedback',{
          message:message,
          date:currentDate,
          username:localStorage.getItem('username')
        }).then((res)=>{
           console.log(res.data);
          setmessage('');
          seterrormessage('');
          setclicked(true);
        }).catch((err)=>console.log(err))
      }
  
    }else{
   seterrormessage('you need to be logged in first');
  }
    }
}

    return <div className="contact_main_div" >
        <div className="contact_body" data-aos="fade-in">

        <div className="contact_info_div">
         <h1 id="contact_info_title">Contact Us</h1>
         <div className="contact_info_email"><label>{email}</label><p>Jamaspishvilinika@icloud.com</p></div>
         <div className="contact_info_phone"><label>{phone}</label><p>+995591-19-16-14</p></div>
        <div className="contact_info_phone"><label>{city}</label><p>Georgia Tbilisi chavchavadze street 2nd avenue</p></div>

      <div className="contact_info_social">
        <a id="facebook" href="https://www.facebook.com/profile.php?id=100013425753100">{facebook}</a>
        <a id="instagram" href="https://www.instagram.com/nika_jamaspishvili/">{instagram}</a>
        <a href="https://twitter.com/NikaJama123" id="twitter">{twitter}</a>
        <a href="https://github.com/foxyusername" id="github">{github}</a>
      </div>
     
        </div>

        <div className="contact_message_div">
        <p className="contact_errormessage">{errormessage}</p>
        <h1 id="contact_message_title">Help & Support</h1>
        <div className="contact_message_body">
       <div className="textarea_div"><textarea maxLength={200} onChange={messageValue} value={message} placeholder="type your message here..."></textarea></div>
   <div className={!clicked ? "contact_message_button" : "contact_message_checked"}> <button onClick={messageSend} >{clicked ? checkmark : "Send"}</button></div>
        </div>
         </div>
        </div>
    </div>
}
export default Contact;