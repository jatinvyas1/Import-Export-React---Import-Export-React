import React from "react";
import "../styles/App.css";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import InputQuery from "./InputQuery";
import SubmitButton from "./SubmitButton";

export default function App() {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
}
