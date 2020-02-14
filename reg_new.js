

/*function validation()
         {
          var users=document.getElementById("users").value;
          var users=document.getElementById("Emailid").value;
            var pass=document.getElementById("pwd").value;
             var crfm=document.getElementById("confrmpwd").value;
             var mob=document.getElementById("mobno").value; 
            

            }
             
              if(users == "")
               {
                document.getElementById("username").innerHTML="please fill it"; 
                 return false;

               }
               
               if((users.length<=2) || (user.length>=20))
               {
                document.getElementById("username").innerHTML="length between 3 to 20 characters"; 
                return false;
               }
               
              if (user!="")
               {
                document.getElementById("username").innerHTML=users; 
                
               }
              
              
              


              if(pass == "")
               {
                        document.getElementById("password").innerHTML="filled password"; 
                        return false;

               }
               if((pass.length<=5) || (pass.length>=20))
               {
                document.getElementById("password").innerHTML="password length between 5 to 20"; 
                return false;
               }
               if (pass!="")
               {
                document.getElementById("password").innerHTML=""; 
                
               }
               

               if(pass != crfm)
               {
                document.getElementById("cnfrmpassword").innerHTML="password not match"; 
                 return false;

               }


               if(mob == "")
               {
                        document.getElementById("number").innerHTML="filled mobile number"; 
                        return false;

               }
               if(mob.length!=10) 
               {
                document.getElementById("number").innerHTML="no. is incoorect"; 
                return false;
               }

               if (isNaN(mob) || mob < 1 || mob ==10) {
                document.getElementById("number").innerHTML="Please fill correct No."; 
                return false;
              }
              if(clck == "")
               {
                  document.getElementById("num").innerHTML="please click"; 
                        return false;

                       
               }
 
            }*/

            /*.............VALIDATION>>>>>>>>*/

            function validate1(abc,error){
          
              var users = abc.value;
             
              
              if(users=="")
               {
                document.getElementById(error).innerHTML="please filled it"; 
                 return false;

               }               
               else if((users.length<=2) || (users.length>=20))
               {
                document.getElementById(error).innerHTML="length between 3 to 20 characters"; 
                return false;
               }   
                      
              else if (users!="")
               {
                document.getElementById(error).innerHTML=""; 
                
               }else{

               }



            }

            // .............FOR DISPLAY..........

            function val(){
            document.getElementById("firstform").style.display="none";
    
            document.getElementById("imgs").style.display="block";
            }
           
            function loader(){
              setTimeout(function()
              {
                document.getElementById("imgs").style.display="none";document.getElementById("secondform").style.display="block";
                             },1000)


            }

          // ...........paasword Macting...........
            function cofrm(){
              var pass=document.getElementById("pwd").value;
              var crfm=document.getElementById("confrmpwd").value;
              var age=document.getElementById("age").value;
              if(pass != crfm)
              {
             
               document.getElementById("cnfrmpassword").innerHTML="password not match"; 
                return false;

              }
              else if (pass==crfm)
              {
               document.getElementById("crfmpassword").innerHTML=""; 
               return false;
              }

              else if(age.length!=2)
              {
               document.getElementById("ageerror").innerHTML="length must be 2"; 
               return false;
              }   
              else if (isNaN(age) ){
                document.getElementById("ageerror").innerHTML="Please fill no"; 
              
              
              }
            }
            
// .............Value...........
          /*
            function my() { 
            
              var x = 0;

              var array=Array();
              array[x] = document.getElementById("users").value;
              x++;
              array[x] = document.getElementById("Emailid").value;
              x++;
              array[x] = document.getElementById("pwd").value;
              x++;
             
              array[x] = document.getElementById("mobno").value;
              x++;
              array[x] = document.getElementById("address").value;
              x++;
              array[x] = document.getElementById("age").value;
              
              

              var e="<hr/>";
              for(var y=0;y<array.length;y++)
              {
                e +=" " + array[y] + "<br>";
              }
              document.getElementById("result").innerHTML = e;
              return false;
            }*/

            
            // ........local storage........
 /*function show()

{ 
    
    var s =document.getElementById('firstform').elements;
    var arr=[];
    for(var i=0;i<s.length;i++)
    {  
      var name= s[i].value;
      arr.push(name);
       }

    localStorage.setItem("lname",arr);
  }*/


  // ...............For Local Storage...........
  function show()

{ 
    
    var s =document.getElementById('firstform').elements;
    var obj={};
    for(var i=0;i<(s.length)-1;i++)
    {

    if(s[i] == "Next")
    {
      continue;
    }
    
    let name=s[i].id;
    let values=s[i].value;
    obj={...obj,[name]:values};
    }
    var myJSON = JSON.stringify(obj);
    if (typeof(Storage) !== "undefined")
    {

    localStorage.setItem("lname",myJSON);
    }
  }




  function dates(){
    var d=document.getElementById("date").value;
    console.log(d);
    var aa= new Date();
    console.log(aa);
    var ndd=new Date(d);
    console.log(ndd);
    var m= aa.getFullYear() - ndd.getFullYear();
    console.log(m);

 document.getElementById("age").innerHTML=m;
 
  }


  function u(val,error)
  {
    var len=val.value.length;
    document.getElementById("er").innerHTML=len;
  }
