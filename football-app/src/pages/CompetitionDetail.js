import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import {Link, useParams} from "react-router-dom";

const CompetitionDetail = () =>  {
  const [title] = useState("Competition Detail");
  const {id} = useParams();
  
  return (
    <>
      <Navbar/>
      <h1 data-testid="detail-title" className="mt-4">{title}</h1>
      <Link
        to={{
          pathname: "/",
        }}
      >
        Back to Main Page
      </Link>
      <hr />
      <Card compId={id} />
    </>
  );      
}

export default CompetitionDetail;