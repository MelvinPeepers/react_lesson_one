import { useEffect, useState } from "react";

export default function App() {
// Main Component
// component is just a function  
// can return JSX
const [advice, setAdvice] = useState("");
const [count, setCount] = useState(0)

async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json()
  console.log(data);
  setAdvice(data.slip.advice);
  setCount ((c) => c + 1);
}

useEffect(function() {
  getAdvice();
}, []);
// state is the most fundamental conscept of React
// we create state
return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>You have read <strong>{props.count}</strong> pieces of advice.</p>
  )
}


// import { useState } from "react";

// export default function App() {
// // Main Component
// // component is just a function  
// // can return JSX
// const [site, setSite] = useState("");

// async function getSite() {
//   const res = await fetch('https://api.netlify.com/api/v1/sites/fea2e189-225d-4d95-928b-1f21f3c8b8b9');
//   const data = await res.json()
//   setSite(data);
// }
// // state is the most fundamental conscept of React
// // we create state
// return <div>
//   <h1>{site}</h1>
//   <button onClick={getSite}>Get Site</button>
// </div>
// }
