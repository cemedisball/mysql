var mysql=require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
});

var sql="Create Table Customers(id int auto_increment primary key,name varchar(20) not null,address varchar(100));";

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
    con.query(sql,function(err,result){
        if(err) throw err;
    console.log("Created table successfully");
    });
});