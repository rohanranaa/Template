// import React from 'react'

// function Practice() {
//   const options = [

//     { label: 'Fruit', value: 'fruit' },
 
//     { label: 'Vegetable', value: 'vegetable' },
 
//     { label: 'Meat', value: 'meat' },
 
//   ];
 
//   const [value, setValue] = React.useState('fruit');
 
//   const handleChange = (event) => {
 
//     setValue(event.target.value);
 
//   };
 
//   return (
 
//     <div>
 
//       <label>
 
//         What do we eat?
 
//         <select value={value} onChange={handleChange}>
 
//           {options.map((option) => (
 
//             <option value={option.value}>{option.label}</option>
 
//           ))}
 
//         </select>
 
//       </label>
 
//       <p>We eat {value}!</p>
 
//     </div>
 
//   );
 
//  };

// export default Practice



// <div className="dropdown">
// <label>Enter any Number:
// <input ref={inputRef} type="number"  id="message"  name="message"/>
// </label>
// <button className='dropdown-menu'>
// {data.map(item => ( <button className='dropdown-item' key={item}>{item}</button>))}
// </button>
// <button onClick={handler}>Update</button>
// </div>