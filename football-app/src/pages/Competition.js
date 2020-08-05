import React, { useState } from "react";
import Table from "../components/Table";

const Competition = () =>  {
  const [title] = useState("Football Competition Data");
  
  return (
    <>
      <h1 className="mt-4">{title}</h1>
      <hr />
      <Table />
    </>
  );      
}

export default Competition;