// import React from 'react'
// // import axios from "react"
// import { useState } from 'react'
// function Crud() {
//     const url=`https://coapi.zipaworld.com/api/masters/careerMaster/create`
//      const [state,setState]=useState({experience:"",joblocation:"",jobtitle:"",jobtype:""})
//    const change=(e)=>{
//     setState({...state,[e.target.name]:e.target.value})
//    console.log(state)
//    }
//  function submit(){
//     fetch (url,{
//         method:"POST",
//         headers:{
//             'Accept':'application/json',
//             'Content-Type':'applicationo/json'
//         },
//         body:JSON.stringify(state)
//     })
//     .then((result)=>{
//         console.log()
//     })
    
// //    axios.post(url,{
// //     experience: state.experience,
// //     joblocation: state.joblocation,
// //     jobtitle: state.jobtitle,
// //     jobtype: state.jobtype
// //    })
// //    .then(res=>{
// //     console.log(res.data)
// //    })
// //    .catch(()=>{
// //     console.log("Network Error")
// //    })
// //    console.log(setState)
// //    setState({experience:"",joblocation:"",jobtitle:"",jobtype:""})
//    }
//   return (
//     <>
//     <div className="container">
//        Experience:  <input type="number" value={state.experience} id="experience" name="experience" onChange={(e)=>change(e)} />
//        <br/>
//        Job Location: <input value={state.joblocation} id="joblocation" onChange={(e)=>change(e)} name="joblocation" />
//        <br/>
//        Job Title:   <input value={state.jobtitle} id="jobtitle" onChange={(e)=>change(e)} name="jobtitle"/>
//        <br/>
//        Job Type: <input value={state.jobtype} id="jobtype" onChange={(e)=>change(e)} name="jobtype"/>
//        <button onClick={submit}>Submit</button>
//     </div>
//     </>
//   )
// }

// export default Crud