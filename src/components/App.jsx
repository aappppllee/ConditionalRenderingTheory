import React from "react";
import Form from "./login";
var isloggedin = false;

const currentTime = new Date().getHours();

console.log(currentTime);

// function renderConditionally() {
//   if (isloggedin === true) {
//     return <h1>Hello Welcome</h1>;
//   } else {
//     return <Form />;
//   }
// }

function App() {
  return (
    <div className="container">
      {/* {isloggedin ? <h1>Hello Welcome</h1> : <Form />} */}
      {/* {currentTime<12?<h1>Why are you still working</h1>:null} */}
      {currentTime < 12 && <h1>Why are you still working</h1>}
    </div>
  );
}

export default App;
