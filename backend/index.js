const express=require('express');
const app=express();
const pool=require('./database');
const cors=require('cors');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const axios=require('axios');
require('dotenv').config();

app.use(cors({
  origin:'nemo-production-1139.up.railway.app'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/insertuser',(req,res)=>{ 
    bcrypt.hash(req.body.password,10).then((hash)=>{
    
  pool.query('select username from googleauth where username=?',[req.body.username],(err,result)=>{
    if(err){
      console.log(err)
    }else if(result.length===0 || result===null){
  
      pool.query("insert into users (username,passcode) values(?,?)",[req.body.username,hash],(err,result)=>{
        if(err){
           res.send('error');
        }else{
            axios.put('https://api.chatengine.io/users/',{username:req.body.username,secret: req.body.password},
            {headers: {'private-key': process.env.PRIVATE_KEY}}
            
            ).then((res)=>console.log(res.data)).catch((err)=>console.log(err))
            const token=jwt.sign({username: req.body.username,password: req.body.password},process.env.JWT_SECRET,{expiresIn: '10000000m'});
            res.send(token);
            //console.log(token);
        }
      })
}else{
  res.send('error');
  console.log('username already registered with firebase');
}
  })
})

})

app.post('/loginuser',(req,res)=>{
  let query='select * from users where username=?';

pool.query(query,[req.body.username],(err,result)=>{
  if(result.length===0 || result===null){
    res.send('notFound');
  }else{
    bcrypt.compare(req.body.password,result[0].passcode).then((match)=>{
      if(match){

        const token=jwt.sign({username: req.body.username,password: req.body.password},process.env.JWT_SECRET,{expiresIn:'10000000m'});
       res.status(200).send(token);
      }else{
        res.send('error');
      }
    })
  }
})

})

app.post('/getpassword',(req,res)=>{
  console.log(req.body.token);
  console.log(process.env.JWT_SECRET);
  let tokenvalue=jwt.verify(req.body.token,process.env.JWT_SECRET);
  res.send(tokenvalue);
  console.log(tokenvalue);
})

app.post('/insertgoogleuser',(req,res)=>{
   console.log(req.body);

   pool.query('select * from googleauth where username=?',[req.body.username],(err,result)=>{
    if(err){
      console.log(err)
    }else if(result.length===0 || result===null){
      pool.query('insert into googleauth(username) values(?)',[req.body.username],(err,result)=>{
        if(err){
          console.log(err)
        }else{
          console.log('inserted succesfully');
        }
      })
    }else{
      console.log('user already exists');
    }
   })

   const token=jwt.sign({username: req.body.username,password: req.body.secret},process.env.JWT_SECRET,{expiresIn:'10000000m'});
  res.send(token);
   axios.put('https://api.chatengine.io/users/',{username:req.body.username,secret: req.body.secret},
        {headers: {'private-key': process.env.PRIVATE_KEY}})
})

app.post('/feedback',(req,res)=>{
  console.log(req.body);
  pool.query('insert into feedback (message,username,date) values(?,?,?)',[req.body.message,req.body.username,req.body.date],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send('sent succesfully');
    }
  })
})


app.listen('3000',()=>{
    console.log('server is running on port 3000')
})