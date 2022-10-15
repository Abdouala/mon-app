import React from "react";

export default function Todo(props) {
    console.log(props);
    return (
        <h1>{props.name}</h1>
    );
  }