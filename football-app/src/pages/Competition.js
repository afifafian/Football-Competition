import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Table from "../components/Table";

const Competition = () =>  {
  const [title] = useState("Football Competition Data");
  
  return (
    <>
      <Navbar/>
      <h1 className="mt-4" data-testid="main-title">{title}</h1>
      <hr />
      <Table />
    </>
  );      
}

export default Competition;