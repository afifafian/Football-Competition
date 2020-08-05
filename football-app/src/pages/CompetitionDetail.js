import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import {Link, useLocation} from "react-router-dom";

const CompetitionDetail = () =>  {
  const [title] = useState("Competition Detail");
  const {state} = useLocation();
  
  return (
    <>
      <Navbar/>
      <h1 className="mt-4">{title}</h1>
      <h3>ID: {state.id}</h3>
      <Link
        to={{
          pathname: "/",
        }}
      >
        Back to Main Page
      </Link>
      <hr />
      <Card data={state.id} />
    </>
  );      
}

export default CompetitionDetail;