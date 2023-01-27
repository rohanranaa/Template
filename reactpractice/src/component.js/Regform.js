// // ---------------------------Submit Data from From Using useState in Function Based Component-------------
// import React, {useState} from 'react'

// function Regform() {
//     const[state,setState]=useState({name:"",age:"",email:"",number:""})
//     const change=(e)=>{
//         setState({...state,[e.target.name]:e.target.value})
//     }
//     const handle=(e)=>{
//         e.preventDefault()
//         console.log(state)
//         var ntext=document.getElementById("name").value;
//             var nregex =/^[a-z]{6,10}$/
//             var atext=document.getElementById("age").value;
//             var aregex =/^[1-9]{1,2}$/
//             var etext=document.getElementById("email").value;
//             var eregex =/^[a-z]+[@]+[a-z]/
//             var ptext=document.getElementById("number").value;
//             var pregex =/^[6-9]\d{9}$/;
//             // -------------------------------Name-----------------------------------
//             if(ntext===""){
//                 document.getElementById("name-val").innerHTML="Please Enter Name"
//             }
//             else if(ntext===Number){
//                 document.getElementById("name-val").innerHTML="Name must have Char."
//             }
//             else if(nregex.test(ntext)){
//                 document.getElementById("name-val").innerHTML="Success"
//             }
//             else{
//                 document.getElementById("name-val").innerHTML="Invalid Name"
//             }
//             // ---------------------------------Age-------------------------------------
//             if(atext===""){
//                 document.getElementById("age-val").innerHTML="Please Enter Age"
//             }
//             else if(aregex.test(atext)){
//                 document.getElementById("age-val").innerHTML="Success"
//             }
//             else{
//                 document.getElementById("age-val").innerHTML="Invalid Age"
//             }
//             // ----------------------------Email-----------------------------------------
//             if(etext===""){
//                 document.getElementById("email-val").innerHTML="Please Enter Email"
//             }
//             else if(eregex.test(etext)){
//                 document.getElementById("email-val").innerHTML="Success"
//             }
//             else{
//                 document.getElementById("email-val").innerHTML="Invalid Email"
//             }
//             // ----------------------------------Number-----------------------------------
//             if(ptext===""){
//             document.getElementById("number-val").innerHTML="Please Enter Number"
//              }
//              else if(pregex.test(ptext)){
//             document.getElementById("number-val").innerHTML="Success"
//             }
//              else{
//             document.getElementById("number-val").innerHTML="Invalid Number"
//              }
        
//     }
//   return (
//     <div className='container'>
//         First Name: <input className="form-control" type="text" id="name"  placeholder={"Enter Your Name "} name="name" onChange={change}/>
        
//         <p id="name-val" style={{color:"red"}}></p>
//         Age: <input className="form-control" type="text" id="age" placeholder={"Enter Your Age "} name="age" onChange={change}/>
        
//         <p id="age-val" style={{color:"red"}}></p>
        
//         Email: <input className="form-control" type="email" id="email" placeholder={"Enter Your Email"} name="email"onChange={change}/>
        
//         <p id="email-val" style={{color:"red"}}></p>
        
//         Ph. Number: <input className="form-control"  id="number" type="number"  maxLength="10" placeholder={"Enter Your Number "} name="number" onChange={change}/>
        
//         <p id="number-val" style={{color:"red"}}></p>
        
//         <button className="btn btn-dark" onClick={handle}>Submit</button>
//     </div>
//   )
// }
// export default Regform