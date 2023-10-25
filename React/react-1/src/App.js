import "./App.css";
import React from "react";

export default function App() {
  // const error = true;
  // return error ? <h1>Error</h1> : <h1>Success</h1>;
  //-----Alternate
  // //return <h1> {error ? "Error" : "Success"}</h1>;
  //--------------------------------------------------------
  // return (
  //   <>
  //     <label htmlFor="input">Input: </label>
  //     <input id="input" type="text" maxLength={"3"}></input>
  //   </>
  // );
  //--------Alternate
  // const props = {
  //   id: "input",
  //   type: "text",
  //   maxLength: "3",
  // };
  // return (
  //   <>
  //     <label htmlFor="input">Input: </label>
  //     <input {...props} placeholder="user"></input>
  //   </>
  // );
  //--------------------------------------------------------
  // return (
  //   <p
  //     style={{
  //       color: "red",
  //       textAlign: "center",
  //       fontSize: "40px",
  //     }}
  //   >
  //     Hello World
  //   </p>
  // );
  //--------------------------------------------------------
  return (
    <>
      <h1>Hello Shashank</h1>
      <h1>Hello Tiple</h1>
    </>
  );
}
