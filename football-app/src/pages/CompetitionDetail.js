import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import {Link, useParams} from "react-router-dom";

const CompetitionDetail = () =>  {
  const [title] = useState("Competition Detail");
  // const {state} = useLocation();
  const {id} = useParams();
  
  return (
    <>
      <Navbar/>
      <h1 className="mt-4">{title}</h1>
      <h3>ID: {id}</h3>
      <Link
        to={{
          pathname: "/",
        }}
      >
        Back to Main Page
      </Link>
      <hr />
      <Card data={id} />
    </>
  );      
}

export default CompetitionDetail;