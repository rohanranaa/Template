// // ---------------------------Submit Data from From Using useState in Function Based Component-------------
// import React, {useState} from 'react'

// function Register() {
//     const[state,setState]=useState({fname:"", lname:"",email:"",password:"",number:""})
//     // const[pstate,setPstate]=useState({pass:"password",btnName:"Show"})
//     const change=(e)=>{
//         setState({...state,[e.target.name]:e.target.value})
//     }
//     const handle=(e)=>{
//         e.preventDefault()
//         console.log(state)
//     }
//     // const btnhandle=()=>{
//     //                 if(pstate.pass==="password")
//     //                 {
//     //                     setPstate({pass:"text",btnName:"Hide"})
//     //                 }
//     //                 else
//     //                 {
//     //                     setPstate({pass:"password",btnName:"Show"})
//     //                 }
//     //             }
//     let handler=()=>{
//         var text=document.getElementById("number").value;
//         var regex =/^[7-9]\d{8}[5]$/;
//         if(text==""){
//             document.getElementById("validation").innerHTML="Please Enter Number"
//         }
//         else if(regex.test(text)){
//             document.getElementById("validation").innerHTML="Success"
//         }
//         else{
//             document.getElementById("validation").innerHTML="Invalid Number"
//         }
//     }
//   return (
//     <div className='container'>
//         First Name: <input className="form-control" type="text"  placeholder={"Enter Your Name "} name="fname" onChange={change}/>
//         <br/>
//         age: <input className="form-control" type="text"  placeholder={"Enter Your Name "} name="lname" onChange={change}/>
//         <br/>
//         Email: <input className="form-control" type="email"  placeholder={"Enter Your Email"} name="email"onChange={change}/>
//         <br/>
//         {/* <div className="form-inline">
//         Password: <input className="form-control" type={pstate.pass}  placeholder={"Enter Your Paassword "} name="password" onChange={change}/>
//         <br/> */}
//         {/* <button className="btn btn-primary" type="button" onClick={btnhandle}>{pstate.btnName}</button>
//         <br/> */}
//         {/* </div> */}
//         Number: <input className="form-control" type="number"  placeholder={"Enter Your Number "} name="number" onChange={change}/>
//         <br/>
//         <button className="btn btn-dark" onClick={handle}>Submit</button>
//     </div>
//   )
// }
// export default Register