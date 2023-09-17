// import { useState } from "react";

// export default function App() {
// // Main Component
// // component is just a function  
// // can return JSX
// const [advice, setAdvice] = useState("");

// async function getAdvice() {
//   const res = await fetch('https://api.adviceslip.com/advice');
//   const data = await res.json()
//   // console.log(data.slip.advice);
//   setAdvice(data.slip.advice);
// }
// // state is the most fundamental conscept of React
// // we create state
// return <div>
//   <h1>{advice}</h1>
//   <button onClick={getAdvice}>Get advice</button>
// </div>
// }


import { useState } from "react";

export default function App() {
// Main Component
// component is just a function  
// can return JSX
const [site, setSite] = useState("");

async function getSite() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json()
  // console.log(data.slip.advice);
  setSite(data);
}
// state is the most fundamental conscept of React
// we create state
return <div>
  <h1>{site}</h1>
  <button onClick={getSite}>Get Site</button>
</div>
}
