//---------------------------------------------------------useReducer() in Hooks{useReducer is the same as useState but in useState we can work only 
//                                        in one component but with the use of useReducer we can work on multiple component------------------------------------------------

// import React, { useReducer } from 'react'

// function reducer(state,action){
//     if(action.type==="inc"){
//             return state+1
//     }
//     else if(action.type==="dec"){
//         return state-1
//     }
//     else{
//         return state
//     }
// }
// function Hooks() {
//     const [count, dispatch]=useReducer(reducer,0)
//   return ( 
//     <>
//     <button onClick={()=>dispatch({type:"inc"})}>+</button>
//     {count}
//     <button onClick={()=>dispatch({type:"dec"})}>-</button>
//     </>
//   )
// }
// export default Hooks
// ----------------------------------------------------------------useMemo() in Hooks{with the use of useMomo we can increase the efficency of our Function}---------------------------------------------
// import React, { useMemo, useState } from 'react'

// function Hooks() {
//     const [first ,setFirst]=useState(0)
//     const [second ,setSecond]=useState(0)

//     function incriment(){
//         setFirst(first+1)
//     }
//     function decriment(){
//         setSecond(second-1)
//     }
//     const isEven=useMemo(()=>{
//         for(let i=0; i<1000000000; i++){}
//             return first%2===0
//     },[first])
    
//   return (
//     <>
//     <button onClick={incriment}>Number is first {first}</button>
//     {isEven?"even":"odd"}
//     <button onClick={decriment}>Number is second {second}</button>
//     </>
//   )
// }

// export default Hooks


// ----------------------------------useREef() in Hooks { with the use of useRef() you can get the property and value of input
//                                           box and you can style the it also}----------------------------------------------------
// import React, { useRef } from 'react'

// function Hooks() {
//     const inputRef=useRef()
// function handler(){
//     inputRef.current.focus()
//     inputRef.current.value="rohan"
//     inputRef.current.style.color="red"
// }
//   return (
//     <>
//         <input ref={inputRef} type="text"></input>
//         <button onClick={handler}>update</button>
//     </>
//   )
// }

// export default Hooks
// import React, { useState } from 'react'
// function Hooks() {
//     const [username, setUsername]=useState({email:"", password:""})
//   var change=(e)=>{
//     setUsername({...setUsername,[e.target.name]:e.target.value})
// }
//    function handle (){
//        console.log(username)
//    }
//   return (
//     <>
//         Email : <input type="text" name='email' placeholder='Enter username' onChange={change}/><br/>
//         Password : <input type="password" name='password' placeholder='Enter password' onChange={change}/>
//         <button onClick={handle}>Submit</button>
//     </>
//   )
// }
// export default Hooks