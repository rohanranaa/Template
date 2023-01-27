//------------------Fetching API using Axios in Class Based Component------------
// import axios from 'axios'
// import  React  from "react";
// export default class  About extends React.Component{
// constructor(){
//   super()
//  this.state={userData:[]}
// }
//   componentDidMount(){
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res=>{console.log(res.data)
//     this.setState({userData:res.data})})
//     .catch(()=>{
//       console.log("Network Error");
//     })
//     console.log(this.state)
// }
// render(){
//   return(
//   <>
// {
//   this.state.userData.map((us,i)=>
//     <div className="container" key={i}>
//       <h1>My name is :{us.name}<br/>
//       My Email-Id is:{us.email}</h1>
//   </div>
//   )
// }
//   </>
//   )
// }
// }

//----------------------------------Import Data in Class based component using axios-------------------------- 
// import axios from 'axios'
// import  React  from "react";
// export default class About extends React.component{
//             component(){
//               super()
//               this.state={userData:[]}
//             }
//             componrntDidMount(){
//               axios.get('')
//               .then(res=>{console.log(res.data)
//                 this.setState({userData:(res.data)})
//               })
//               .catch(()=>console.log("Network Error"))
//             }
//             render(){
//               return(
//                   <>
//                   {
//                   this.state.userData.map((us,ind)=>
//                   <div className='container' key={ind}>
//                     <h1>{us.id}</h1>
//                     <h2>{us.name}</h2>
//                   </div>
//                   )
//                   }
//                   </>
//               )
//             }
// }

// Increment and Decrement Button using useState
// import React, {useState} from 'react'

// function About() {
//  const [count, setCount]=useState(0)
//  const increment=()=>{
//     setCount(count-1)
//  }
  
//   return (
//     <>
//     <button class="btn btn-dark" onClick={increment}>-</button>
//     <h1 class="display-4">{count}</h1>
//     <button class="btn btn-dark" onClick={()=>setCount(count+1)}>+</button>
//     </>
//   )
// }
// export default About