// // ---------------------------------Input Multiplication of number using DropDown--------------------------------------
// import React, { useState } from 'react'
// import { useRef } from 'react'
// function Table() {
//     const inputRef = useRef(null);
//     const [data,setData]=useState([])
//     function handler(e) {
//       var rana=(inputRef.current.value)
//       var number = [rana]
//       const arr=[]
//           for (let i = 1; i <= 10; i++) {
//         let result = number * i ;
//         arr.push(result)
//         setData(arr)
//         console.log(result)
//             }
//         }
//       return (
//         <>
//            <input ref={inputRef} type="number"/>
//            <div className="dropdown">
//           <button className=" btn-primary " type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" onClick={handler}>Update</button>
//            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//             {data.map(item => ( <li key={item}><a className="dropdown-item" href="/">{item}</a></li>))}
//            </ul>
//             </div>
// {/* 
// <div className="dropdown">
//   <button>
//     Dropdown button
//   </button>
//   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//     <li><a className="dropdown-item">Action</a></li>
//     <li><a className="dropdown-item">Another action</a></li>
//     <li><a className="dropdown-item">Something else here</a></li>
//   </ul>
// </div> */}
//         </>
//       )
//     }
// export default Table