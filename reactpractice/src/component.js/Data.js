//-------------------Click Button using useEffect and useState in Function Based Component------------------
// import React, { useEffect, useState } from 'react'
//  function Data() {
//     let [state,setState]=useState(0)
//   let  handler=()=>{
//         setState(state++)
//     }
//     useEffect( ()=>{
//         alert(`Hey How are  you?`)
//     },[0])
//   return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={handler}>Click me</button>
//     </>
//   )
// }
// export default Data


// ----------------------Show Hide Password Using useState() in Function Based Componet-------------------
// import React,{useState} from 'react'
// function Data() {
//     const [state,setState]=useState({pass:"password",btnName:"Show"})

//    const handle=()=>{
//             if(state.pass==="password")
//             {
//                 setState({pass:"text",btnName:"Hide"})
//             }
//             else
//             {
//                 setState({pass:"password",btnName:"Show"})
//             }
//     }
//   return (
//     <div>
//         <input type={state.pass} placeholder={"Enter Your Password"}/>
//         <button type="button" onClick={handle}>{state.btnName}</button>
//     </div>
//   )
// }
// export default Data





// ----------------------Show Hide Password Using useRef() in Function Based Componet-------------------
// function Data() {
//   const textInput=useRef()
//     const [showhide,setShowhide]=useState("show")
//     const [pass,setPass]=useState("password")
//    const handle=()=>{
//     // console.log(textInput.current.value)
//             if(textInput.current.type==="password")
//             {
//               setShowhide("Show")
//               setPass("text")
//             }
//             else
//             {
//               setShowhide("Hide")
//               setPass("password")
//             }
//             }
//   return (
//     <div>
//         <input type={pass} placeholder={"Enter Your Password"} ref={textInput}/>
//         <button onClick={handle}>{showhide}</button>
//     </div>
//   )
// }
// export default Data