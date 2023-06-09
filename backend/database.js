const mysql=require('mysql2');

 const url='mysql://'+process.env.MYSQLUSER+':'+process.env.MYSQLPASSWORD+'@'+process.env.MYSQLHOST+':'+process.env.MYSQLPORT+'/'+process.env.MYSQLDATABASE+'';

 const pool=mysql.createPool(url);

module.exports=pool;