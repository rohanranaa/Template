// // ---------------------------Submit Data from From Using useState in Function Based Component-------------
// import React, {useState} from 'react'

// function Copy() {
//     const [nval,setNval]=useState("")
//     const [aval,setAval]=useState("")
//     const [emailval,setEval]=useState("")
//     const [numval,setNumval]=useState("")
//     const [state,setState]=useState({name:"",age:"",email:"",number:""})
//   const  handle=(e)=>{
//         console.log(state)
//     }
//     const achange=(e)=>{
//         e.preventDefault()
//         const {name,value}=e.target
//         setState({...state,[name]:value})
//         // console.log(state)
//         var ntext=document.getElementById("name").value;
//             var nregex =/^[a-z]{6,10}$/
//             var atext=document.getElementById("age").value;
//             var aregex =/^[1-9]{1,2}$/
//             var etext=document.getElementById("email").value;
//             var eregex =/^[a-z]+[@]+[a-z]/
//             var ptext=document.getElementById("number").value;
//             var pregex =/^[6-9]\d{9}$/













//             // -------------------------------Name-----------------------------------
//             if(ntext===""){
//                 setNval("Please Enter Name")
//             }
//             else if(typeof(ntext)==='number'){
//                 setNval("Name must have Char.")
//             }
//             else if(nregex.test(ntext)){
//                 setNval("")
//             }
//             else{
//               setNval("Name contain 6-10 characters")
//             }
//             // ---------------------------------Age-------------------------------------
//             if(atext===""){
//                 setAval("Please Enter Age")
//             }
//             else if(aregex.test(atext)){
//                 setAval("")
//             }
//             else{
//                 setAval("Invalid Age")
//             }
//             // ----------------------------Email-----------------------------------------
//             if(etext===""){
//                 setEval("Enter Your Email")
//             }
//             else if(eregex.test(etext)){
//                 setEval("")
//             }
//             else{
//                 setEval("email must like this username@gmail.com")
//             }
//             // ----------------------------------Number-----------------------------------
//             if(ptext===""){
//                 setNumval("Please Enter Number")
//              }
//              else if(pregex.test(ptext)){
//                 setNumval("")
//             }
//              else{
//                 setNumval("Number start with 6-9 and have 10 numbers")
//              }
//     }
//   return (
//     <div className='p-3 mb-2 bg-light text-black'>
//         First Name: <input className="form-control " type="text" id="name" value={state.name}  placeholder={"Enter Your Name "} name="name" onChange={achange}/>
        
//         <p className="text-danger">{nval}</p>
//         Age: <input className="form-control" type="number" id="age" value={state.age} placeholder={"Enter Your Age "} name="age" onChange={achange}/>
        
//         <p className="text-danger">{aval}</p>
        
//         Email: <input className="form-control" type="email" id="email" value={state.email} placeholder={"Enter Your Email"} name="email"onChange={achange}/>
        
//         <p className="text-danger">{emailval}</p>
        
//         Ph. Number: <input className="form-control" value={state.number}  id="number" type="number"  maxLength="10" placeholder={"Enter Your Number "} name="number" onChange={achange}/>
        
//         <p className="text-danger">{numval}</p>
        
//         <button className="btn btn-success" onClick={handle}>Submit</button>
//     </div>
//   )
// }
// export default Copy