import React, { Component } from "react";
import Table from "../components/Table";

class Football extends Component {
    constructor() {
        super();
        this.state = {
            title: "Football Competition Data",
        }
    }

    render() {
        return (
          <>
            <h1 className="mt-4">{this.state.title}</h1>
            <hr />
            <Table />
          </>
        );  
    }
}

export default Football;