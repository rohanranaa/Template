// // ----------------------------------Dark Mode-------------------------------  

// import React, { useState } from 'react'

// function Darkmode() {
//     const [design , setDesign]=useState({
//         color: "black",
//         backgroundColor: "white"
//     })
//     const [btntext, setBtntext]=useState("Dark Mode")
//     const darkmode=()=>{
//         if (design.color=="black") {
//             setDesign ({color:"white",
//             backgroundColor:"black"
//             })
//             setBtntext="Dark Mode"
//         } else {
//             setDesign ({color:"black",
//             backgroundColor:"white"
//             })
//             setBtntext="Light Mode"
//         }
//     }
//   return (
//     <>
//     <button className="btn btn-dark" onClick={darkmode}>{btntext}</button>
//     <div className="container">
//     <div className="row">
//   <div className="col-sm-6" >
//     <div className="card" style={design}>
//       <div className="card-body">
//         <h5 className="card-title">Special title treatment</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6">
//     <div className="card" style={design}>
//       <div className="card-body">
//         <h5 className="card-title">Special title treatment</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
//     </>
//   )
// }

// export default Darkmode