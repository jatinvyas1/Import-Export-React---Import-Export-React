import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import SubHeading from "./Subheading";
import InputQuery from "./InputQuery";
import SubmitButton from "./SubmitButton";
export default const App = () => {
  return (
    <div id="main">
      < Heading />
      < SubHeading/>
      < InputQuery/>
      < SubmitButton/>
    </div>
  )
}


